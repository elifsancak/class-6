function renderStudent(student, modules) {

  history.pushState({}, null, '/class-6/?student=' + student.name);

  const header = renderStudentThumbnail(student);

  const githubButton = document.createElement('button');
  githubButton.innerHTML = student.userName + ' (on GitHub)';
  githubButton.style = 'height:35px;'

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/' + student.userName;
  githubLink.target = '_blank';
  githubLink.appendChild(githubButton);

  // once md bios have standardized names
  // and they build un.gh.io portfolios in module 0
  // buttons to those can be put here

  const modulesUl = modules
    .map(module => {
      const header = document.createElement('button');
      header.innerHTML = module.name;
      header.onclick = () => {
        document.getElementById('root').innerHTML = '';
        // reading students from global
        document.getElementById('root').appendChild(renderModule(module, students));
      };
      header.style = 'height:35px;'

      const reposUl = module.repos
        .map(repo => {

          const li = document.createElement('li');
          li.appendChild(header);
          li.appendChild(renderRepo(repo, student));
          return li;
        })
        .reduce((ul, li) => {
          ul.appendChild(li);
          return ul;
        }, document.createElement('ul'))

      const container = document.createElement('div');
      container.appendChild(header);
      container.appendChild(reposUl);

      return container;
    })
    .reduce((div, ul) => {
      div.appendChild(ul);
      return div;
    }, document.createElement('div'))

  const container = document.createElement('div');
  container.appendChild(document.createElement('br'));
  container.appendChild(header);
  container.appendChild(githubLink);
  container.appendChild(document.createElement('br'));
  container.appendChild(document.createElement('br'));
  container.appendChild(modulesUl);

  return container;
}

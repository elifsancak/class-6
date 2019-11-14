function renderStudent(student, modules) {
  const header = renderStudentThumbnail(student);

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
  container.appendChild(header);
  container.appendChild(modulesUl);

  return container;
}

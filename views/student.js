function renderStudent(student, modules) {
  const header = renderStudentThumbnail(student);

  const modulesUl = modules
    .map(module => {
      const header = document.createElement('h3');
      header.innerHTML = module.name

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

function renderModule(module, students) {
  const header = document.createElement('h2');
  header.innerHTML = module.name;

  const studentsUl = students
    .map(student => {
      const header = renderStudentThumbnail(student);
      const modulesList = module.repos
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
      container.appendChild(modulesList);

      return container;
    })
    .reduce((div, ul) => {
      div.appendChild(ul);
      return div;
    }, document.createElement('div'))

  const container = document.createElement('div');
  container.appendChild(header);
  container.appendChild(studentsUl);

  return container;
}

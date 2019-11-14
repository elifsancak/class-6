function renderRepo(repo, student) {
  const header = renderLinkButtons(repo.name, student.userName, repo.name);

  const pathsList = repo.paths
    ? repo.paths
      .map(path => {
        const links = renderLinkButtons(path, student.userName, repo.name, path);
        const li = document.createElement('li');
        li.appendChild(links);
        return li;
      })
      .reduce((ul, li) => {
        ul.appendChild(li);
        return ul;
      }, document.createElement('ul'))
    : document.createElement('div');

  const container = document.createElement('div');
  container.appendChild(header);
  container.appendChild(pathsList);

  return container;

}



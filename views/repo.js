
function renderRepo(student, repo) {
  const headerString = repo.name + ' : ' + (
    repo.hasOwnProperty('type')
      ? ' (' + repo.type + ') '
      : ''
  );

  const repoText = document.createTextNode(headerString);

  const repoList = document.createElement('li');
  repoList.appendChild(repoText);
  repoList.appendChild(renderLinkButtons(student, repo))

  if (repo.paths instanceof Array) {
    const pathsList = repo.paths
      .map(path => {

        const pathText = document.createTextNode(path + ' : ');

        const li = document.createElement('li');
        li.appendChild(pathText);
        li.appendChild(renderLinkButtons(student, repo, path))
        return li;
      })
      .reduce((ul, li) => {
        ul.appendChild(li);
        return ul;
      }, document.createElement('ul'));

    repoList.appendChild(pathsList);
  }

  return repoList;
}


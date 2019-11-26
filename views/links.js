function renderLinks(userName, repoName, path) {
  const liveA = document.createElement('a');
  liveA.href = path
    ? 'https://' + userName + '.github.io/' + repoName + '/' + path
    : 'https://' + userName + '.github.io/' + repoName;
  liveA.target = '_blank';

  const sourceA = document.createElement('a');
  sourceA.href = path
    ? 'https://github.com/' + userName + '/' + repoName + '/tree/master/' + path
    : 'https://github.com/' + userName + '/' + repoName;

  sourceA.target = '_blank';

  return { liveA, sourceA };
}

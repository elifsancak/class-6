function renderLinkButtons(text, userName, repoName, path) {
  const repoLinks = renderLinks(userName, repoName, path);

  const viewSourceButton = document.createElement('button');
  viewSourceButton.innerHTML = 'source code';
  repoLinks.sourceA.appendChild(viewSourceButton);

  const viewLiveButton = document.createElement('button');
  viewLiveButton.innerHTML = 'live site';
  repoLinks.liveA.appendChild(viewLiveButton);

  const container = document.createElement('div');
  container.appendChild(document.createTextNode(text + ': '));
  container.appendChild(repoLinks.liveA);
  container.appendChild(repoLinks.sourceA);

  return container;
}

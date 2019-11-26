/* improvements:
  color code based on 404 status
    red means 404
    green means no 404

*/

function renderLinkButtons(text, userName, repo, path) {
  const repoName = repo.name;

  const repoLinks = renderLinks(userName, repoName, path);

  const title = text + ': ' + (
    repo.hasOwnProperty('type') && !path
      ? '(' + repo.type + ')' : ''
  );
  const titleNode = document.createTextNode(title);

  const viewSourceButton = document.createElement('button');
  viewSourceButton.innerHTML = 'source code';
  repoLinks.sourceA.appendChild(viewSourceButton);
  console.log(repoLinks.sourceA.href)
  fetch(repoLinks.sourceA.href)
    .then(resp => {
      console.log(resp)
      if (!resp.ok) {
        viewSourceButton.innerHTML += ' (missing)';
        viewSourceButton.style.color = 'orange';
      }
    })
    .catch(err => {
      viewSourceButton.innerHTML += ' (missing)';
      viewSourceButton.style.color = 'red';
    });

  const container = document.createElement('div');
  container.appendChild(titleNode);
  if (repo.live) {
    const viewLiveButton = document.createElement('button');
    viewLiveButton.innerHTML = 'live site';
    repoLinks.liveA.appendChild(viewLiveButton);
    console.log(repoLinks.liveA.href)
    fetch(repoLinks.liveA.href)
      .then(resp => {
        console.log(resp)
        if (!resp.ok) {
          viewLiveButton.innerHTML += ' (missing)';
          viewLiveButton.style.color = 'orange';
        }
      })
      .catch(err => {
        viewLiveButton.innerHTML += ' (missing)';
        viewLiveButton.style.color = 'red';
      });

    container.appendChild(repoLinks.liveA);
  }
  container.appendChild(repoLinks.sourceA);

  return container;
}

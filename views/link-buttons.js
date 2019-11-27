
function renderLinkButtons(student, repo, path) {

  const container = document.createElement('div');
  container.style.display = 'inline';

  const pagesCheck = path
    ? 'https://' + student.userName + '.github.io/' + repo.name + '/' + path
    : 'https://' + student.userName + '.github.io/' + repo.name + '/index.html';

  fetch(pagesCheck)
    .then(resp => {
      if (resp.ok == true && resp.status !== 404) {

        if (repo.live) {
          const liveButton = document.createElement('button');
          liveButton.innerHTML = 'live site';

          const a = document.createElement('a');
          a.href = path
            ? 'https://' + student.userName + '.github.io/' + repo.name + '/' + path
            : 'https://' + student.userName + '.github.io/' + repo.name + '/index.html';
          a.target = '_blank';
          a.appendChild(liveButton);

          container.appendChild(a);
        }

        const sourceButton = document.createElement('button');
        sourceButton.innerHTML = 'source code';

        const a = document.createElement('a');
        a.href = path
          ? 'https://github.com/' + student.userName + '/' + repo.name + '/blob/master/' + path
          : 'https://github.com/' + student.userName + '/' + repo.name;
        a.target = '_blank';
        a.appendChild(sourceButton);

        container.appendChild(a);

      } else {
        const code = document.createElement('code');
        code.innerHTML = '-- 404 --';

        container.appendChild(code);
      }
    })
    .catch(err => {
      console.log(err);

      const code = document.createElement('code');
      code.innerHTML = '-- ' + err.message + ' --';

      container.appendChild(code);
    })

  return container;

}

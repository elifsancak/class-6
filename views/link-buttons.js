
function renderLinkButtons(student, repo, path) {

  const container = document.createElement('div');
  container.style.display = 'inline';

  const base = repo.url
    ? repo.url
    : 'https://' + student.userName + '.github.io/' + repo.name;

  const gitPathing = repo.url
    ? ''
    : '/blob/master/';

  const pagesCheck = path
    ? base + '/' + path
    : base + '/index.html';

  fetch(pagesCheck)
    .then(resp => {
      if (resp.ok == true && resp.status !== 404) {

        if (repo.live) {

          const base = repo.url
            ? repo.url
            : 'https://' + student.userName + '.github.io/' + repo.name;

          const liveButton = document.createElement('button');
          liveButton.innerHTML = 'live site';

          const a = document.createElement('a');
          a.href = path
            ? base + '/' + path
            : base;
          a.target = '_blank';
          a.appendChild(liveButton);

          container.appendChild(a);
        }

        const sourceButton = document.createElement('button');
        sourceButton.innerHTML = 'source code';

        const a = document.createElement('a');
        a.href = path
          ? 'https://github.com/' + student.userName + '/' + repo.name + gitPathing + path
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

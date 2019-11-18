function renderStudentThumbnail(student) {

  const studentImg = document.createElement('img');
  studentImg.alt = student.name + ' (' + student.userName + ')';
  studentImg.style = 'height:65px;width:65px;';

  fetch('https://api.github.com/users/' + student.userName)
    .then(resp => resp.json())
    .then(user => studentImg.src = user.avatar_url)
    .catch(err => console.log(err));

  const nameComponent = document.createElement('p');
  nameComponent.innerHTML = student.name;


  const container = document.createElement('div');
  container.appendChild(studentImg);
  container.appendChild(nameComponent);


  return container;

}

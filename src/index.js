import { getUsers } from './api/userApi'

getUsers().then(result => {
  let userBody = result.reduce((body, user) => {
    body += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>`;

    return body;
  }, '');

  global.document.getElementById('users').innerHTML = userBody;
});

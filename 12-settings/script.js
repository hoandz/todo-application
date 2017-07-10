var current_loggedin_user_email =  localStorage.getItem('current_loggedin_user');

var current_loggedin_user = JSON.parse(localStorage.getItem(current_loggedin_user_email));
console.log(current_loggedin_user);
document.getElementById('username').value = current_loggedin_user.username;
document.getElementById('email').value = current_loggedin_user.email;
document.getElementById('password').value = current_loggedin_user.password;
document.getElementById('birthday').value = current_loggedin_user.birthday;
document.getElementById('gender').value = current_loggedin_user.gender;
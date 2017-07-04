function signUp(){
	var username = document.getElementById('username').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var birthday = document.getElementById('birthday').value;
	var gender = document.getElementById('gender').value;
	var obj = {
		username: username,
		email: email,
		password: password,
		birthday: birthday,
		gender: gender
	};
	localStorage.setItem(email, JSON.stringify(obj));
	var obj = JSON.parse(localStorage.getItem(email));
}

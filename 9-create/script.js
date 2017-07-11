function create_todo_list(){
	var title = document.getElementById('title').value;
	var description = document.getElementById('description').value;
	var time = document.getElementById('time').value;
	var obj = {
	title: title,
	description: description,
	time: time
	};
	var current_loggedin_user_email = localStorage.getItem('current_loggedin_user');
	var current_loggedin_user = JSON.parse(localStorage.getItem(current_loggedin_user_email));
	var scheduled = current_loggedin_user.scheduled;
	console.log(scheduled);
	scheduled.unshift(obj);
	console.log(scheduled, current_loggedin_user);

	localStorage.setItem(current_loggedin_user_email, JSON.stringify(current_loggedin_user));
	window.location = "./../4-home/index.HTML";
}


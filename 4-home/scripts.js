//Lay user theo email
//loi scheduled list cua user
//truy cap vao tung phan tu cua danh sach
//ve item ---> data + html
var current_loggedin_user_email = localStorage.getItem('current_loggedin_user');
var current_loggedin_user = JSON.parse(localStorage.getItem(current_loggedin_user_email));
var scheduled = current_loggedin_user.scheduled;
for(var i = 0; i< scheduled.length; i++){
	var item = scheduled[i];

	var content_html = `
		<div class="ht-web-app">
					<div class="boder-text-left">
						<div class="text-finish-home-screen">
							<div>
							`
							+ item.title +
							`</div>
						</div>
						<div class="text-web-app">
							<div>
							`
							+ item.description +
							`</div>
						</div>
					</div>
					<div class="boder-text-right">
						<div>
						`
							+ item.time +
						`</div>
					</div>
				</div>
				<div class="bottom-line">
					<div class="div-1"></div>
					<div class="div-2"></div>
					<div class="div-3"></div>
				</div>
	`
	document.getElementById('content_html').innerHTML += content_html;
} 
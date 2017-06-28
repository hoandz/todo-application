
var ht_username = "tranhoan"
var ht_password = "hoan"

function login(){
	//lay du lieu tai form usernam, password
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	//so sanh username, password minh nhap voi phan co san
	if(username == ht_username && password == ht_password){
		window.location.href = "../13-navigation/index.html";
	}else{
		alert('Khong hop le!');
	}
	//neu ca 2 khop voi phan co san thi chuyen den trang 13-navigation
	//con khong thi alert "loi, vui long nhap lai"
}
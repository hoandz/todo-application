//tao ham login
function login(){
//lay du lieu username va password
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
//ep kieu chuyen tu string ve object
var user = JSON.parse(localStorage.getItem(email));
//neu password = chinh password tai date thi chuyen den file 13-navigation
//con khong dung thi bao loi
if(password == user.password){
	window.location = "./../13-navigation/index.HTML";
}else{
	alert("Loi")
}

}


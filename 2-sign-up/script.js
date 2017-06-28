function signUp(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	if (typeof(Storage) !== "undefined") {

   		localStorage.setItem("username", "ton");
   		localStorage.username = 'ton';
   		localStorage['username'] = "ton";
    	document.getElementById("ht-save").innerHTML = localStorage.getItem("username");
    	window.location.href = "../13-navigation/index.html";
	} else {
    	document.getElementById("ht-save").innerHTML = "Sorry, your browser does not support Web Storage...";
	}

}

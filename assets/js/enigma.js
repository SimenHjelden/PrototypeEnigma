(function(){

	// Elements
	var container, txtPwd, txtRepeatPwd, pwd, repeatPwd, checkPwd;
	// Buttons
	var loginBtn, regBtn, backBtn;
	// Pages
	var loginPage, regPage, mainPage, forgotPwPage;

	var init = function()
	{
		setObjects();
		setEventHandlers();
	}

	var setObjects = function()
	{
		// Elements
		container = document.getElementById("enigma");
		txtPwd = document.getElementById("txtPwd");
		txtRepeatPwd = document.getElementById("txtRepeatPwd");
		pwd = document.getElementById("pwd");
		repeatPwd = document.getElementById("repeatPwd");
		checkPwd = document.getElementById("checkPwd");

		// Buttons
		loginBtn = document.getElementById("loginBtn");
		regBtn = document.getElementById("regBtn");
		backBtn = document.getElementById("tilbake");

		// PageUrls
		loginPage = "login.html";
		mainPage = "main.html";
		regPage = "reg.html";
		forgotPwPage = "forgot-pw.html";
	}

	var setEventHandlers = function()
	{	
		if(checkPwd != null){checkPwd.addEventListener("change", checkedPwd, false); }
		if(loginBtn!=null){ loginBtn.addEventListener("click", login, false); }
		if(regBtn!=null){ regBtn.addEventListener("click", function(){goTo(mainPage);}, false); }
		if(backBtn!=null){ backBtn.addEventListener("click", function(){history.go(-1);}, false); }
	}

	var login = function()
	{
		// Do loginmagic
		goTo(mainPage);
	}

	var goTo = function(pageUrl)
	{
		window.location.assign(pageUrl);
	}
	
	var checkedPwd = function(){
		if(checkPwd.checked){
			pwd.style.display = "block";
			txtPwd.style.display = "block";
			repeatPwd.style.display = "block";
			txtRepeatPwd.style.display = "block";
			}
			else{
				pwd.style.display = "none";
				txtPwd.style.display = "none";
				repeatPwd.style.display = "none";
				txtRepeatPwd.style.display = "none";
				}
		}
	
	window.onload = init;

})();
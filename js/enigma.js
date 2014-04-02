(function(){

	// Elements
	var container;
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

	window.onload = init;

})();
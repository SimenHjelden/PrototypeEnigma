(function(){

	// Elements
	var container;
	// Buttons
	var loginBtn, regBtn;
	// Pages
	var loginPage, regPage, mainPage;

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

		// PageUrls
		loginPage = "login.html";
		mainPage = "main.html";
		regPage = "reg.html";
	}

	var setEventHandlers = function()
	{
		loginBtn.addEventListener("click", login, false);
		regBtn.addEventListener("click", function(){goTo(regPage);}, false);
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
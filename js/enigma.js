(function(){

	// Elements
	var container;
	// Buttons
	var loginBtn;
	// Pages
	var loginPage, mainPage;

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

		// PageUrls
		loginPage = "login.html";
		mainPage = "main.html";
	}

	var setEventHandlers = function()
	{
		loginBtn.addEventListener("click", login, false);
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
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
		loginBtn.addEventListener("click", goTo, false);
	}

	var goTo = function()
	{
		switch(this.id)
		{
			case "loginBtn" :
				window.location.assign(mainPage);
				break;
		}
	}

	window.onload = init;

})();
(function(){

	// Elements
	var container, pwedBlock;
	// Buttons
	var loginBtn, regBtn, backBtn, switchBtn = {};
	// Pages
	var loginPage, regPage, mainPage, forgotPwPage;

	var init = function()
	{
		setObjects();
		setEventHandlers();
		getCookie();
		swipeHandlers();
		sjekkSession();
	}
	
	var sjekkSession = function(){
			if(document.cookie){
				
				}
			else{
				goTo(loginPage);
				}
		}

	var setObjects = function()
	{
		// Elements
		container = document.getElementById("enigma");

		// Buttons
		loginBtn = document.getElementById("loginBtn");
		regBtn = document.getElementById("regBtn");
		backBtn = document.getElementById("backBtn");
		switchBtn.div = document.getElementById("switchBtn");
		switchBtn.toggler = document.getElementById("toggler");
		switchBtn.on = false;
		pwedBlock = document.getElementById("showPassField");
		

		// PageUrls
		loginPage = "login.html";
		mainPage = "main.html";
		regPage = "reg.html";
		forgotPwPage = "forgot-pw.html";
	}

	var setEventHandlers = function()
	{	

		if(loginBtn != null)
			{
				loginBtn.addEventListener("click", login, false);
			}
		if(regBtn != null)
			{
				regBtn.addEventListener("click", function()
					{
						goTo(mainPage);
					}, false);
			}
		if(backBtn != null)
			{
				backBtn.addEventListener("click", function()
					{
						history.go(-1);
					}, false);
			}
		if(switchBtn.div != null)
			{
				switchBtn.div.addEventListener("click", function()
					{
						toggleBtn();
						
					}, false);
			}
	}
	var toggleBtn = function()
	{
		if(!switchBtn.on) 
		{
			switchBtn.toggler.style.marginLeft="0px";
			switchBtn.toggler.style.left="0px";
			if(pwedBlock != null) {pwedBlock.style.display = "none";}
			switchBtn.on = true;
		}
		else
		{
			switchBtn.toggler.style.marginLeft="52px";
			if(pwedBlock != null) {pwedBlock.style.display = "block";}
			switchBtn.on = false;

		}
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
	
	
	var getCookie = function()
	{
		if(document.cookie)
		{
			//alert("Cookie finnes " + document.cookie);
		} 
		else 
		{
			//alert("Cookie finnes ikke");
		}
	}
		
	var swipeHandlers = function(){
			$(".listModule li").on("swipeleft", function(e){
				var listitem = $(this);
					listitem.addClass("swipeDelete");
					listitem.remove();
					
				});
		}	
		
	window.onload = init();

})();
(function(){

	// Elements
	var container, pwedBlock;
	// Buttons
	var loginBtn, logoutBtn, regBtn, backBtn, switchBtn = {};
	// Pages
	var loginPage, regPage, mainPage, forgotPwPage;

	var init = function()
	{
		setObjects();
		setEventHandlers();
		swipeHandlers();
		sjekkSession();
		
	}
	
	var sjekkSession = function(){
			if(document.cookie){
				alert("Cookie Finnes");
				}
			else{
				alert("Cookie Finnes ikke");
				goTo(loginPage);
				}
		}

	var setObjects = function()
	{
		// Elements
		container = document.getElementById("enigma");

		// Buttons
		loginBtn = document.getElementById("loginBtn");
		logoutBtn = document.getElementById("logoutBtn");
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
						goTo(regPage);
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
		if(logoutBtn != null)
			{
				logoutBtn.addEventListener("click", function()
				{
					slettCookie();
					goTo(loginPage);
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
		var username = document.getElementById("usrnInput");
		var password = document.getElementById("passInput");
		if(username.value === "root" && password.value === "root") {
			lagCookie();
			goTo(mainPage);
		}
		else{alert("Wrong username or password")}
		
	}

	var goTo = function(pageUrl)
	{
		window.location.assign(pageUrl);
	}
	
		
	var swipeHandlers = function(){
		$(".listModule li").on("swipeleft", function(e){
			var listitem = $(this);
				listitem.addClass("swipeDelete");
				alert("Fuksjon som illustrerer sletting av element");	
				
		}),
		
		$(".listModule li").on("swiperight", function(e){
				var listitem = $(this);
				listitem.addClass("swipeEdit");
				alert("Funksjon som illustrerer editering av et element");
			})
	}
	
	var lagCookie = function(){
		var dato = new Date();
		dato.setDate(dato.getDate() + 7);
		//dato.setDate(dato.getHours() + 7);

		document.cookie = "tall=" + 4236 + ";expires=" + dato.toUTCString();
		
	}

	var slettCookie = function(){
		alert("Sletter cookie");
		var dato = new Date();
		dato.setDate(dato.getDate() - 7);
		//dato.setDate(dato.getHours() + 7);

		document.cookie = "tall=;expires=" + dato.toUTCString();
	}
		
	window.onload = init();

})();
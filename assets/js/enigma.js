(function(){

	// Elements
	var container, pwedBlock, logo;
	// Buttons
	var loginBtn, logoutBtn, regBtn, backBtn, switchBtn = {}, teamBtn, createEnigmaBtn,
	slettRebusBtn, editEnigmaBtn, rebusListBtn;
	// Pages
	var loginPage, regPage, mainPage, forgotPwPage, selectedTeamPage, currentPage, 
	settingsPage, mapPage, addPostPage, editPostPage, regTeamPage, regRebusPage, 
	myTeamPage, myRebusPage, selectedRebusPage, selectedRebusPage, editRebusPage, 
	editTeamPage;

	var init = function()
	{
		
		setObjects();
		setEventHandlers();
		swipeHandlers();
		sjekkSession();
		removeLoading();
		
	}
	
	var sjekkSession = function(){
			var cp = currentPage;
			if(document.cookie){
				//alert("Cookie Finnes");
			}
			else if((cp === regPage) || (cp === loginPage) || (cp === forgotPwPage)) {
				//alert("Cookie finnes ikke, men du skal jo registrere deg eller gå til login page lizm");
			}
			else {
				//alert("Cookie Finnes ikke");
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
		teamBtn = $(".teamBtn");
		switchBtn.div = document.getElementById("switchBtn");
		switchBtn.toggler = document.getElementById("toggler");
		switchBtn.on = false;
		pwedBlock = document.getElementById("showPassField");
		createEnigmaBtn = document.getElementById("createEnigmaBtn");
		editEnigmaBtn = document.getElementById("editEnigmaBtn");
		slettRebusBtn = document.getElementById("slettRebusBtn");
		rebusListBtn = $('.rebusListBtn');
		logo = document.getElementById("logo");
		

		// PageUrls
		loginPage = "login.html";
		mainPage = "main.html";
		regPage = "reg.html";
		forgotPwPage = "forgot-pw.html";
		selectedTeamPage = "selected-team.html";
		selectedRebusPage  = "selected-rebus.html";
		mapPage = "enigmaMap.html";
		settingsPage = "settings.html";
		addPostPage = "reg-post.html";
		editPostPage = "edit-post.html";
		regTeamPage = "reg-team.html";
		regRebusPage = "reg-rebus.html";
		myTeamPage = "my-team.html";
		myRebusPage = "my-rebus.html";
		selectedRebusPage = "selected-rebus.html";
		editRebusPage = "edit-rebus.html";
		editTeamPage = "edit-team.html";
		currentPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
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
						var currUrl = window.location.pathname.split( '/' );
						var prevUrl = document.referrer;
						var currPageParent = currUrl[currUrl.length - 3];
						prevUrl = prevUrl.split( '/' );
						var prevPageParent = prevUrl[prevUrl.length - 3];
						if(currPageParent === prevPageParent) {
							//alert(prevUrl[prevUrl.length - 1]);
							history.go(-1);
						}
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
		if(createEnigmaBtn != null)
			{
				createEnigmaBtn.addEventListener("click", function()
					{
						goTo(selectedRebusPage);
					}, false);
			}
		if(slettRebusBtn != null)
			{
				slettRebusBtn.addEventListener("click", function()
					{
						//alert("enigma.js:line113 | Rebusen ble slettet.");
						goTo(myRebusPage);
					}, false);
			}
		if(rebusListBtn != null)
			{
				rebusListBtn.click(function(){goTo(selectedRebusPage);});
			}
		if(teamBtn != null)
			{
				teamBtn.click(function() {
					goTo(selectedTeamPage);
				});
			}
				
		logo.addEventListener("click", logoRedirect, false);
		
		if(editEnigmaBtn != null){
			editEnigmaBtn.addEventListener("click", function(){
				
				if(currentPage === editRebusPage){
					alert("Tenk at nå har du endret en rebus");
					goTo(myRebusPage);
					}
				else if(currentPage === editTeamPage){
					alert("Tenk at nå har du endret et lag");
					goTo(myTeamPage);
					}	
				
				})
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
	
	
	var removeLoading = function(){
			if(currentPage != settingsPage && currentPage != mapPage && currentPage != addPostPage && currentPage != editPostPage && currentPage != selectedRebusPage){
				$(document).on("pageshow", "[data-role='page']", function () {
 				$('div.ui-loader').remove();
				})
				}
				
				}
	
	var logoRedirect = function(){
		if(currentPage !== mainPage && sjekkSession)
			goTo(mainPage);
			else
			logo.removeEventListener("click", logoRedirect(), false);	
		
		}
	
		
	var swipeHandlers = function(){
		$(".listModule li").on("swipeleft", function(e){
			var listitem = $(this);
				listitem.addClass("swipeDelete");
				alert("Fuksjon som illustrerer sletting av element");
				listitem.remove();	
				
				
		}),
		
		$(".listModule li").on("swiperight", function(e){
				var listitem = $(this);
					listitem.addClass("swipeEdit");
				alert("Funksjon som illustrerer editering av et element");
				if(currentPage === myTeamPage)
					goTo(editTeamPage);
				else if(currentPage === myRebusPage)
					goTo(editRebusPage);
			}),
			
		$(".listActions .fa-pencil").click(function(e){
				var listitem = $(this).closest("li");
					listitem.addClass("swipeEdit");
				alert("Funksjon som illustrerer editering av et element");
				if(currentPage === myTeamPage)
					goTo(editTeamPage);
				else if(currentPage === myRebusPage)
					goTo(editRebusPage);
			}),
			
		$(".listActions .fa-trash-o").click(function(e){
				var listitem = $(this).closest("li");
				listitem.addClass("swipeDelete");
				alert("Funksjon som illustrerer sletting av et element");
				listitem.remove();
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

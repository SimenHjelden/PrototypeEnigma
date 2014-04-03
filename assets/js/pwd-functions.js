// JavaScript Document

(function(){
	 
	 var txtPwd, txtRepeatPwd, pwd, repeatPwd, checkPwd;
	 
	 function init(){
		 setObjects();
		 setEventHandlers();
		 }
	 
	 var setObjects = function()
	{
		// Elements
		txtPwd = document.getElementById("txtPwd");
		txtRepeatPwd = document.getElementById("txtRepeatPwd");
		pwd = document.getElementById("pwd");
		repeatPwd = document.getElementById("repeatPwd");
		checkPwd = document.getElementById("checkPwd");

	}
	
	var setEventHandlers = function()
	{	
		if(checkPwd != null){checkPwd.addEventListener("change", checkedPwd, false); }
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
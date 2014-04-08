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
		txtPwd.addEventListener("focus", pwdMatch, false);
		txtRepeatPwd.addEventListener("focus", pwdMatch, false);
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
				txtPwd.value = "";
				txtRepeatPwd.value = "";
				}
		}
		
		var pwdMatch = function(){
			if(txtPwd.value != "" && txtRepeatPwd != ""){
				if(txtPwd.value == txtRepeatPwd.value){
					txtPwd.style.borderColor = "#2ecc71";
					txtRepeatPwd.style.borderColor = "#2ecc71";
					}
					else if(txtPwd.value != txtRepeatPwd.value){
						txtPwd.style.borderColor = "#c0392b";
						txtRepeatPwd.style.borderColor = "#c0392b";	
					}
			}
		}
		
	 
	 window.onload = init;
	 
})();
// JavaScript Document

(function(){
	 
	 var txtPwd, txtRepeatPwd, pwdInfo, pwd, repeatPwd, checkPwd;
	 
	 function init(){
		 setObjects();
		 setEventHandlers();
		 }
	 
	 var setObjects = function()
	{
		// Elements
		txtPwd = document.getElementById("txtPwd");
		txtRepeatPwd = document.getElementById("txtRepeatPwd");
		pwdInfo = document.getElementById("pwdInfo");
		pwd = document.getElementById("pwd");
		repeatPwd = document.getElementById("repeatPwd");
		checkPwd = document.getElementById("checkPwd");
		pwedBlock = document.getElementById("showPassField");

	}
	
	var setEventHandlers = function()
	{	
		if(checkPwd != null){checkPwd.addEventListener("change", checkedPwd, false); }
		if(txtPwd != null) {
			txtPwd.addEventListener("focus", pwdMatch, false);
		}
		if(txtRepeatPwd != null) {
			txtRepeatPwd.addEventListener("focus", pwdMatch, false);
		}
	}
	 
	 
	 var checkedPwd = function(){
		if(checkPwd.click){
			pwedBlock.style.display = "block";
			pwd.style.display = "block";
			txtPwd.style.display = "block";
			repeatPwd.style.display = "block";
			txtRepeatPwd.style.display = "block";
			pwdInfo.style.display = "block";
			}
			else{
				pwedBlock.style.display = "none";
				pwd.style.display = "none";
				txtPwd.style.display = "none";
				repeatPwd.style.display = "none";
				txtRepeatPwd.style.display = "none";
				pwdInfo.style.display = "none";
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
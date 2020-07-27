//模态框部分登录的判断代码
function checkusername(){
	//alert("checkusername");
	var s=document.getElementById("username").value;
	if(s==""){
	    document.getElementById("user").innerHTML="不能为空";//改变span里面的文本
	   	document.getElementById("user").style.color="red";
	   		return false;
	}
	else if(s.length<6){
	   	document.getElementById("user").innerHTML='用户名小于6位';
	   	document.getElementById("user").style.color="red";
	}
	else{
	   	document.getElementById("user").innerHTML="验证通过";
	   	document.getElementById("user").style.color="green";
	   		return true;
	}
}
function checkpwd(){
	var s=document.getElementById("password").value;
	if(s==""){
	   	document.getElementById("pwd").innerHTML="不能为空";//改变span里面的文本
	   	document.getElementById("pwd").style.color="red";
	   	return false;
	}
	else if(s.length<8){
	   	document.getElementById("pwd").innerHTML='密码小于8位';
	   	document.getElementById("pwd").style.color="red";
	}
	else{
	    document.getElementById("pwd").innerHTML="验证通过";
	   	document.getElementById("pwd").style.color="green";
	   	return true;
	}
}
window.onload=function(){
	document.getElementById("username").onblur=function(){
		checkusername();
	}
	document.getElementById("password").onblur=function(){
	   	checkpwd();
	}
	document.getElementById("myform").onsubmit=function(){
	   	if(checkusername() && checkpwd()){
	   		return true;//验证通过,调转到ok.html
	   	}
	   	else{
	   	  	return false;
	   	}
	}
}/*模态框登录判断部分结束*/
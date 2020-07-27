/*给轮播项目添加了个5秒的定时器*/
$(function(){
	$("#myCarousel").carousel({
		interval : 5000
	});
});
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
	   		return true;
	   	}
	   	else{
	   	  	return false;
	   	}
	}
}/*模态框登录判断部分结束*/


function get(){
	$.ajax({
		type:"post",
		dataType:"json",
		url:"php/register.php",
		async:false,
		
		data:{
			id:$("#name").val(),
			pass:$("#passworde").val(),
			email:$("#email").val(),
			phone:$("#tel").val()
		},
		success:function(data){
			if(data==1){
				alert("有用户存在,请换个用户名进行注册");
			}
			else{
				alert("恭喜您,这个崭新的用户名属于您");
			}
		}
		
	});
}

function ok(){
	$.ajax({
		type:"post",
		dataType:"json",
		url:"php/login.php",
		async:false,
		
		data:{
			id:$("#username").val(),
			pass:$("#password").val(),
		},
		success:function(data){
			if(data==1){
				alert("用户名或密码错误/不存在");
			}
			else if(data==2){
				alert("普通用户登录成功");
				window.location.href="system/index-2.html";
			}else{
				alert("管理员用户登录成功");
				window.location.href="system/index-1.html";
			}
		}
		
	});
}



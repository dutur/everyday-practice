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

/*从后台数据库进行调用显示出来*/
$.get("php/picture.php",function(data){
	//console.log(data);
	let show=JSON.parse(data);
	for(var i=0;i<show.length;i++){
		var item="";
				
		var pr_id=show[i]['ID'];
		console.log(pr_name);
		var pr_name=show[i]['pic'];
		var pr_category=show[i]['pic_1'];
		var pr_model=show[i]['word'];
		var pr_size=show[i]['pic_2'];
		var pr_package=show[i]['word_1'];
		var pr_del=show[i]['pic_3'];
				
		item+="<div class='box'>";
		item+="<span>ID:"+pr_id+"</span>";
		item+="<img src='"+pr_name+"' />";
		item+="<div class='info-box'>";
		item+="<img src='"+pr_category+"' />";
		item+="<p>"+pr_model+"</p>";
		item+="</div>";
		item+="<p><img src='"+pr_size+"' />"+"</p>";
		item+="<p>"+pr_package+"</p>";
		item+="<p><img src='"+pr_del+"' />"+"</p>";
		item+="</div>";
		
				
		$(".container").append(item);
	}
})
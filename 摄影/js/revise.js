var loc=location.href;
var n1=loc.length;
var n2=loc.indexOf("?");
post_revise_id=decodeURI(loc.substr(n2+1,n1-n2));

function getok(){
//	$.ajax({
//		type:"post",
//		dataType:"json",
//		url:"../php/update.php",
//		async:false,
//		data:{
//			id:post_revise_id,
//			pass:$("#password").val(),
//			email:$("#email").val(),
//			phone:$("#tel").val()
//		},
//		success:function(data){
//			if(data==1){
//				alert("修改不成功");
//			}
//			else{
//				alert("修改成功");
////				window.location.href="system/index-1.html";
//			}
//		}
		
//	});
	$.post("../php/update.php",{id:post_revise_id,
								pass:$("#password").val(),
								email:$("#email").val(),
								phone:$("#tel").val()},
	function(data){
		if(data==1){
			alert("修改成功");
		}
		else{
			alert("修改失败");
		}
	},"json");
}

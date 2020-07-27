$(document).ready(function(){
	session();
	userdata();
})

//判断登录的情况
function session(){
	$.get("../php/session.php",function(data){
		if(data==8){
			alert("请登录");
		}
		else{
			$("#aluba").text(data);
		}
	})
}

//用户查询那块
function userdata(){
	$.get("../php/userdata.php",function(data){
		var testdata=data;
		let show=JSON.parse(testdata);
		console.log(show);
		for(i=0;i<show.length;i++){
			var str="";
			str="<tr><td>"+show[i].name+"</td><td>"+show[i].password+"</td><td>"+show[i].email+"</td><td>"+show[i].phone+"</td><td><a href='#' id='"+show[i].name+"'>修改</a> <a href='../php/delete.php?id="+show[i].name+"'>删除</a></td></tr>";
			$("table").append(str);
		}
	})
}

//点击修改按钮便能跳转到修改的页面(有属于该行id的后缀名)
$(document).on("click","tr td a:first-child",function(){
	var index=$(this).attr('id');
	alert(index);
	console.log(index);
	location.href="../system/revise.html?"+encodeURI(index);
})

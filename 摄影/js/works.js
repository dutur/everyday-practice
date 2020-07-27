$(document).ready(function(){
	worksadd();
})
//用户查询那块
function worksadd(){
	$.get("../php/worksselect.php",function(data){
		var testdata=data;
		let show=JSON.parse(testdata);
		console.log(show);
		for(i=0;i<show.length;i++){
			var str="";
			str="<tr><td>"+show[i].ID+"</td><td>"+show[i].pic+"</td><td>"+show[i].pic_1+"</td><td>"+show[i].word+"</td><td>"+show[i].pic_2+"</td><td>"+show[i].word_1+"</td><td>"+show[i].pic_3+"</td><td><a href='#' id='"+show[i].ID+"'>修改</a> <a href='../php/worddelete.php?id="+show[i].ID+"'>删除</a> </td></tr>";
			$("table").append(str);
		}
	})
}


//点击修改按钮便能跳转到修改的页面(有属于该行id的后缀名)
$(document).on("click","tr td a:first-child",function(){
	var index=$(this).attr('id');
	alert(index);
	console.log(index);
	location.href="../system/worksrevise.html?"+encodeURI(index);
})
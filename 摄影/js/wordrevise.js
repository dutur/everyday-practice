var loc=location.href;
var n1=loc.length;
var n2=loc.indexOf("?");
post_revise_id=decodeURI(loc.substr(n2+1,n1-n2));

function getok(){
	$.post("../php/wordupdate.php",{id:post_revise_id,
								word:$("#text").val(),
								word_1:$("#txt").val()},
	function(data){
		if(data==1){
			alert("修改成功");
		}
		else{
			alert("修改失败");
		}
	},"json");
}

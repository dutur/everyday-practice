function getok(){
	$.ajax({
		type:"post",
		dataType:"json",
		url:"../php/worksadd.php",
		async:false,
		
		data:{
			id:$("#text").val(),
			pic:$("#text_2").val(),
			pic_1:$("#text_3").val(),
			word:$("#text_4").val(),
			pic_2:$("#text_5").val(),
			word_1:$("#text_6").val(),
			pic_3:$("#text_7").val()
		},
		success:function(data){
			if(data==1){
				alert("数据增加不成功");
			}
			else{
				alert("新的数据增加成功");
			}
		}
		
	});
}
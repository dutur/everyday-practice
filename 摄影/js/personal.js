$.get("../php/personal.php",function(data){
	var testdata=data;
	let show=JSON.parse(testdata);
	console.log(show);
	for(i=0;i<show.length;i++){
		var str="";
		str="<tr><td>"+show[i].name+"</td><td>"+show[i].password+"</td><td>"+show[i].email+"</td><td>"+show[i].phone+"</td><td>"+show[i].admin+"</td></tr>";
		$("table").append(str);
	}
})
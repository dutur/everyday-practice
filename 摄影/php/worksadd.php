<?php
	require("conn.php");
	mysqli_query($conn,"SET Names utf-8");
	
	$id=$_POST["id"];
	$pic=$_POST["pic"];
	$pic_1=$_POST["pic_1"];
	$word=$_POST["word"];
	$pic_2=$_POST["pic_2"];
	$word_1=$_POST["word_1"];
	$pic_3=$_POST["pic_3"];
	$check="select * from works where ID='$id' and pic='$pic' and word='$word' and word_1='$word_1' ";
	
	
	$result=$conn->query($check);
	
	$num=mysqli_num_rows($result);
	if($num){
		$json=1;
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}
	else{
		$sql="INSERT INTO `works`(`ID`, `pic`, `pic_1`, `word`, `pic_2`, `word_1`, `pic_3`) VALUES ('$id','$pic','$pic_1','$word','$pic_2','$word_1','$pic_3')";
		$now=$conn->query($sql);
		$json=2;
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}
	$conn->close();
?>
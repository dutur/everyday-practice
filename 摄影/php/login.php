<?php
	session_start();
	require("conn.php");
	
	$id=$_POST["id"];
	$pass=$_POST["pass"];
	
	$check="select * from users where Name='$id'and Password='$pass' ";
	
	
	$result=$conn->query($check);
	
	$num=mysqli_num_rows($result);
	
	if($id=='admind'  && $pass=='admin120330'){
		$_SESSION['Name']=$id;
		$json=3;
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}else if($num){
		$_SESSION['Name']=$id;
		$json=2;
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}else{
		$json=1;
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}
	
	
//	if($num){
//		$_SESSION['Name']=$id;
//		$json=2;
//		echo json_encode($json,JSON_UNESCAPED_UNICODE);
//	}
//	else{
//		$json=1;
//		echo json_encode($json,JSON_UNESCAPED_UNICODE);
//	}
	$conn->close();
?>
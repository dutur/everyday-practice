<?php
require("conn.php");

$id=$_POST["id"];
$pass=$_POST["pass"];
$email=$_POST["email"];
$phone=$_POST["phone"];

$check="select * from users where Name='$id'and Email='$email' and Phone='$phone' ";


$result=$conn->query($check);

$num=mysqli_num_rows($result);
if($num){
	$json=1;
	echo json_encode($json,JSON_UNESCAPED_UNICODE);
}
else{
	$sql="INSERT INTO `users`(`Name`, `Password`, `Email`, `Phone`) VALUES ('$id','$pass','$email','$phone')";
	$now=$conn->query($sql);
	$json=2;
	echo json_encode($json,JSON_UNESCAPED_UNICODE);
}
$conn->close();
?>
<?php
require("conn.php");

$id=$_POST["id"];
$pass=$_POST["pass"];
$email=$_POST["email"];
$phone=$_POST["phone"];

$select="update users set Password='$pass', Email='$email' ,Phone='$phone' where Name='$id'";

$post_action=$conn->query($select);

//echo $select;
if($post_action){
	$json=1;
	echo json_encode($json,JSON_UNESCAPED_UNICODE);
}
else{
	$now=$conn->query($sql);
	$json=2;
	echo json_encode($json,JSON_UNESCAPED_UNICODE);
}
$conn->close();
?>
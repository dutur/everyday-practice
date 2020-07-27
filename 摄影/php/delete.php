<?php
require("conn.php");

$id=$_GET["id"];

$select="delete from users where Name='$id'";

$post_action=$conn->query($select);
//echo $select;
if($post_action){
	$json=1;
//	echo json_encode($json,JSON_UNESCAPED_UNICODE);
//	echo $json;
	echo "<script>alert('删除成功！')</script>";
}
else{
	$json=2;
//	echo json_encode($json,JSON_UNESCAPED_UNICODE);
	echo "<script>alert('删除失败！')</script>";
//	echo $json;
}
$conn->close();
?><?php

?>
<?php
	header("Content-type:text/html;charset=utf-8");
	$localhost="localhost";
	$username="root";
	$pwd="";
	$db="dyp";
	$conn = new mysqli($localhost,$username,$pwd,$db);
	mysqli_query($conn,"SET Names utf8");
?>
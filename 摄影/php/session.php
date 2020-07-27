<?php
session_start();

if(isset($_SESSION['Name'])){
	echo $_SESSION['Name'];
}
else{
	echo 8;
}
?>
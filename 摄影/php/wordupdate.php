<?php
	require("conn.php");
	
	$id=$_POST["id"];
	$word=$_POST["word"];
	$word_1=$_POST["word_1"];
	
	$select="update works set word='$word', word_1='$word_1'  where ID='$id'";
	
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
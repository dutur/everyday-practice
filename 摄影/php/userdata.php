<?php
	require("conn.php");
	
	$select="select * from users";  
//	查询users数据库的数据
	
	$post_action=$conn->query($select); 
//	执行上述效果
	
	$abc1=array();
	
	while($action=mysqli_fetch_array($post_action)){
		
		$abc=array(
			'name'=>$action[0],
			'password'=>$action[1],
			'email'=>$action[2],
			'phone'=>$action[3]
		);
		$abc1[]=$abc;
	}
	echo json_encode($abc1,JSON_UNESCAPED_UNICODE);
	$conn->close();
?>
<?php
	session_start();
	require("conn.php");
	$name=$_SESSION['Name'];
	$select="select * from users where Name='$name'";  
//	查询users数据库的数据
	
	$post_action=$conn->query($select); 
//	执行上述效果
	
	$abc1=array();
	if($name=='admind'){
	while($action=mysqli_fetch_array($post_action)){
		
		$abc=array(
			'name'=>$action[0],
			'password'=>$action[1],
			'email'=>$action[2],
			'phone'=>$action[3],
			'admin'=>"管理员"
		);
		$abc1[]=$abc;
	}
}
else{
		while($action=mysqli_fetch_array($post_action)){
		
		$abc=array(
			'name'=>$action[0],
			'password'=>$action[1],
			'email'=>$action[2],
			'phone'=>$action[3],
			'admin'=>"普通用户"
		);
		$abc1[]=$abc;
	}
}
	echo json_encode($abc1,JSON_UNESCAPED_UNICODE);
	$conn->close();
?>
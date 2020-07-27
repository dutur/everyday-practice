<?php
	
	require("conn.php");
	mysqli_query($conn,"SET Names utf-8");
	$select="select * from works";  
//	查询users数据库的数据
	
	$post_action=$conn->query($select); 
//	执行上述效果
	
	$abc1=array();
	
	
	
	while($action=mysqli_fetch_array($post_action)){
		$abc=array(
			'ID'=>$action[0],
			'pic'=>$action[1],
			'pic_1'=>$action[2],
			'word'=>$action[3],
			'pic_2'=>$action[4],
			'word_1'=>$action[5],
			'pic_3'=>$action[6]
		);
		$abc1[]=$abc;
		
	}
	echo json_encode($abc1,JSON_UNESCAPED_UNICODE);
	$conn->close();
?>
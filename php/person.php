<?php
	exit("<h1>数据库</h1>")
	// $ip = '127.0.0.1';
	$root = 'root';
	$password = '1075753601tt';
	$name = '51yougo';
	$connect = mysqli_connect( '127.0.0.1', $root, $password, $name);
	if( !$connect ){
		$GLOBALS['msg'] = '数据库连接失败';
		return;
	}
	// 接受表单传过来的数据
	$user = $_POST['user'];
	$pass = $_POST['password'];
	$email = $_POST['email'];
	// var_dump($_POST);

	$query = mysqli_query($connect,"insert into person values ( NULL, '{$user}', '{$pass}', '{$email}');");
	
	if ( $query ){
		$GLOBALS['msg'] = '注册成功,3秒之后自动跳转到首页……';
	}else {
		$GLOBALS['msg'] = '注册失败';
	}
	
	
	Header("refresh:5;url='../index.html'");
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<style>
			h1{
				margin-top: 50px;
				color: #F00582;
				text-align: center;
			}
		</style>
		<title></title>
	</head>
	<body>
		<?php if (isset($msg)): ?>
		<h1><?php echo $msg; ?></h1>
		<?php endif ?>
		<h1>13246</h1>
	</body>
</html>
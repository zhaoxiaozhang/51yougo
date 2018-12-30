$(function  (){
	
	codes()
	checks()	

function checks(){
	// 用户名验证
	var targ_user = false
	var targ_pass = false
	var targ_again = false
	var targ_email = false
	var targ_code = false
	$('#user').blur(function (){
		var user = $('#user').val()
		

		if(user == ""){
			$('.user-sp').html("*请输入用户名").css('color','red')
			targ_user = false
		}
		else if(user.length > 8){
			$('.user-sp').html("*用户名必须小于8个字符").css('color','red')
			targ_user = false
		}
		else if( user.length < 4 && user.length > 0 ){
			$('.user-sp').html("*用户名必须大于3个字符").css('color','red')
			targ_user = false
		}else{
			// $('.user-lb').hide()
			$('.user-sp').html("✔").css('color','#F00582')
			targ_user = true
		}
	})
	
	// 密码验证
	$('#password').blur(function(){
		var pass = $('#password').val()

		if( pass == "" ){
			$('.pass-sp').html("*请输入密码").css('color','red')
			targ_pass = false
		}
		else if( pass.length > 11 ){
			$('.pass-sp').html("*密码不能大于10位").css('color','red')
			targ_pass = false
		}
		else if( pass.length < 5 && pass.length > 0){
			$('.pass-sp').html("*密码不能小于5位").css('color','red')
			targ_pass = false
		}else{
			$('.pass-sp').html("✔").css('color','#F00582')
			targ_pass = true
		}		
	})
	
	//  重复密码验证
	$('#again').blur(function (){
		var again = $('#again').val()
		var pass = $('#password').val()

		if (again == ""){
			$('.again-sp').html('*请确认密码').css('color','red')
			targ_again = false
		}
		else if (again !== pass){
			$('.again-sp').html('*密码不匹配').css('color','red')
			targ_again = false
		}else{
			$('.again-sp').html('✔').css('color','#F00582')
			targ_again = true
		}
	})
	
	// 邮箱验证
	$('#email').blur(function (){
		var email = $('#email').val()
		var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

		if ( email == "" ){
			$('.email-sp').html('*请输入邮箱').css('color','red')
			targ_email = false
		}
		else if( !reg.test(email) ){
		$('.email-sp').html('*邮箱格式不正确').css('color','red')
		targ_email = false
		}else{
			$('.email-sp').html('✔').css('color','#F00582')
			targ_email = true
		}
	})
	
	
	// 验证的验证
	$('#code').blur(function (){
		var code = $('#code').val().toUpperCase()
		var codehtml = $('#codea').html()

		if ( code == "" ){
			$('.code-sp').html('*请输入验证码').css('color','red')
			targ_code = false
		}else if (!(code == codehtml)){
			$('.code-sp').html('*验证码有误！').css('color','red');
			targ_code = false
			codes();
		}else {
			$('.code-sp').html('✔').css('color','#F00582')
			targ_code = true
		}
		
	})
	
	$('#submit').click(function(){
		if (targ_user &&targ_pass && targ_again && targ_email && targ_code == true){
			return true
		}else{
			return false
		}
	})
	
}

	
	// 随机验证码生产
	function codes (){
		var	item = ""
		var codelength = 4   //定义验证码长度
		var codeval = $('#codea')
		var rod =  new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
		'S','T','U','V','W','X','Y','Z');
		for(i = 0; i < codelength; i++){
			var index = Math.floor(Math.random()*36)   //去除0-36的随机数作为索引   foor()向下取整
			item += rod[index]
		}
		codeval.html(item)
	}
	
	
	// 单击刷新验证码
	$('#codea').click(function(){
		codes()
	})



})
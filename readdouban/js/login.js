$(function () {
           var checked=$.cookie().choice;
    	    if(checked=="checked"){
    		var checked=$("#check").prop("checked",true)
             
           
             $("#username").val($.cookie().username)
             
    	}

    	$(".form").submit(function (){
       
        var checked=$("#checkbox").prop("checked");
        
      //验证用户名和密码
        var password=$("#password").val();
    	var username=$("#username").val();
    	var psw=$.cookie().password;
    	var uname=$.cookie().username;
    	var phone=$.cookie().phone;
    	var email=$.cookie().email;
    	
    	if(psw==password&&(uname==username||username==phone||username==email)){
    		 $.cookie("username2",$("#username").val(),{expires:7,path:"/"})
            
    		location.href="../index.html"
    	}

        return false;
	})

    	$("#check").click(function (event) {
		$.cookie("choice","checked",{expires:7,path:"/"})
	});
}) 
    	
      
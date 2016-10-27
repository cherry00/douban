$(function () {
           var checked=localStorage.getItem("choice");
    	    if(checked=="checked"){
    		var checked=$("#check").prop("checked",true)
             
           
             $("#username").val(localStorage.getItem("username"))
             
    	}

    	$(".form").submit(function (){
       
        var checked=$("#checkbox").prop("checked");
        
      //验证用户名和密码
        var password=$("#password").val();
    	var username=$("#username").val();
    	var psw=localStorage.getItem("password");
    	var uname=localStorage.getItem("username");
    	var phone=localStorage.getItem("phone");
    	var email=localStorage.getItem("email");
    	
    	if(psw==password&&(uname==username||username==phone||username==email)){
    		 localStorage.setItem("username2",$("#username").val())
            
    		location.href="../index.html"
    	}

        return false;
	})

    	$("#check").click(function (event) {
		localStorage.setItem("choice","checked")
	});
}) 
    	
      
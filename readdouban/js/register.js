$(function () {
	//勾选框
	//console.log($.cookie("email"))
	 $(".form").on("submit",function () {
 	
 
 	var email=$("#email");
    var psw=$("#psw");
 	var username=$("#username");
 	var phone=$("#phone");
 	

   if(email.val()!=$.cookie("email")){
 	check(email,psw,username,phone)
 	var cookieemail=JSON.stringify($.cookie("email"));
 	var cookiepassword=JSON.stringify($.cookie("password"));
 	var cookieusername=JSON.stringify($.cookie("username"));
 	var cookiephone=JSON.stringify($.cookie("phone"));
    
 	if(cookieemail!=undefined&&cookiepassword!=undefined&&cookieusername!=undefined&&cookiephone!=undefined){
 		
 		window.location.href="login.html";
 	}
}
 	
 	return false;
 	

  })


//=================================================================
 function check(obj1,obj2,obj3,obj4){
 	var re1=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
 	var re2=/^[a-zA-Z0-9]\w{8,20}$/;
 	var re3 = /^[a-zA-Z0-9]\w{7,14}$/;
 	var re4 = /^1\d{10}$/;
 	if(re1.test(obj1.val())){//邮箱验证
 		

		 obj1.siblings('em').html("邮箱正确")
      

         if(re2.test(obj2.val())){//密码验证
			obj2.siblings('em').html("密码正确")
           

            if(re3.test(obj3.val())){//用户名验证
			obj3.siblings('em').html("用户名正确")
          
	            if(re4.test(obj4.val())){//手机号验证
				obj4.siblings('em').html("手机号正确")
	            $.cookie("phone",obj4.val(),{expires:7,path:"/"});
	            $.cookie("email",obj1.val(),{expires:7,path:"/"});
	            $.cookie("username",obj3.val(),{expires:7,path:"/"});
	            $.cookie("password",obj2.val(),{expires:7,path:"/"});
		}else{
			obj4.siblings('em').html("您输入的手机号不正确，请重新输入")
			
		}       

		}else{
			obj3.siblings('em').html("用户名长度为7-14个字符，请重新输入")
			
		}     

		}else{
			obj2.siblings('em').html("密码至少为8位，请重新输入")
			
		}     




		}else{
		   obj1.siblings('em').html("您输入的邮箱不正确，请重新输入")
		  
		}

 }


//==================================================================

$("#checkbox").click(function() {
	
  
    	$("button").toggleClass('active');
  	
  		
  	
		});
  	
  	


//弹出框
$("b").click(function(){
	$(".city").css({"display":"block"});
})
//关闭弹出框
$(".address").find("span").click(function(){
	$(".city").css({"display":"none"});
});	

//取数据
 var str1="";
 var str2="";
 var str3="";
 $.ajax({
 	url: '../json/register.json',
 	type: 'POST',
 	
 })
 .done(function(data) {
   
 	
 	var data1=data.one.city;
 	var data2=data.two.city;
 	var data3=data.three.city;
 $.each(data1,function (i) {
             	
             	str1+="<a class='chose' href='##'>"+data1[i]+"</a>"
		})	 
 $("#box1").html(str1)
  $.each(data2,function (i) {
             	
             	str2+="<a class='chose' href='##'>"+data2[i]+"</a>"
		})	 
 $("#box2").html(str2)
  $.each(data3,function (i) {
             	
             	str3+="<a class='chose' href='##'>"+data3[i]+"</a>"
		})	 
 $("#box3").html(str3)
			 
	
 })

 //选项卡
 $(".city").find("ul").find("li").click(function(){$(this).find('div').css({"display":"block"});
 	$(this).siblings('li').find("div").css({"display":"none"});
 	$(this).addClass("act");
 	$(this).siblings('li').removeClass('act')
 	$(this).find(".box").find(".chose").click(function(){
 		
 		$(".location i").html($(this).html())

 	})
    
 })







	
})
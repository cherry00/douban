$(function () {
	
	
	//选项卡
    $(".sellerlist ").find(".tab").click(function(){
    	$(this).siblings(".sellercon").addClass('selleractive');
    	$(this).parent().siblings().find(".sellercon").removeClass('selleractive');
    	
    	$(this).addClass("cur")

    	
    	$(this).parent().siblings().find(".tab").removeClass("cur")
    })
  

   









var str="";
var str1="";
var str2="";
var str3="";
var str4="";
var str5="";
var str6="";
var str7="";
var str8="";
var str9="";
var str10="";
var str11="";
var str12="";
var str13="";
var str14="";
var str15="";
var str16="";
var str17="";

$.ajax({
	url: 'json/index.json',
	type: 'POST',
	
})
.done(function(data) {
	//最受关注图书榜JSON
	$.each(data.pbook,function(index,obj){
		
		str+="<li><div class='media'><a class='media-left' href='html/detail.html?pid="+obj.pid+"'><img src='"+obj.img+"' alt='/'></a><div class='media-body'><h4 class='media-heading'>"+obj.title+"</h4><span class='glyphicon glyphicon-star '></span><span class='glyphicon glyphicon-star '></span><span class='glyphicon glyphicon-star '></span><span class='glyphicon glyphicon-star '></span><span class='glyphicon glyphicon-star '>9.2</span><p>"+obj.writer+"</p><p>"+obj.type+"</p></div></div><b>"+obj.comment+"<span>"+obj.observer+"</span></b></li>"
}) 
    //豆瓣纸书JSON
   
    str1+="<a class='media-left ' href='html/detail.html?pid="+data.paperone.pid+"'><img src='"+data.paperone.img+"' alt='/'></a><div class='media-body papercon'><h4 class='media-heading'>"+data.paperone.title+"<span>"+data.paperone.price+"</span></h4><p>"+data.paperone.comment+"</p></div>"
    $.each(data.papertwo,function(index,obj){
    	str2+="<li><a href='html/detail.html?pid="+obj.pid+"'><img src='"+obj.img+"' alt='' /></a><a href='html/detail.html?pid=three'><p>"+obj.title+"</p></a><p>"+obj.price+"</p></li>"
    })


    //电子图书JSON
    $.each(data.ebook,function(index,obj){
    	str3+="<li><a href='html/detail.html?pid="+obj.pid+"'><img src='"+obj.img+"' alt=''></a><a href=''><p>"+obj.title+"</p></a><p>"+obj.price+"</p></li>"
    	    
    })	    
    	    
    //书评JSON
   $.each(data.bookreview,function(index,obj){
   	   str4+="<div class='media reviewlist'><a class='media-left' href=''><img src='"+obj.img+"' alt='' /></a><div class='media-body '><a href=''><p class='media-heading'>"+obj.writer+"</p></a><p>"+obj.book+"</p><a href=''><p>"+obj.comment+"</p></a><p>"+obj.num+"  <span>"+obj.date+"</span></p></div></div>"
     })		
    		
    //banner

    str5="<a href=''><img src='"+data.banner_top.img+"' alt=''></a>";
    str6="<a href=''><img src='"+data.banner_center.img+"' alt=''></a>";
    str7="<a href=''><img src='"+data.banner_bottom.img+"' alt=''></a>";
    str8="<a href=''><img src='"+data.banner_right.img+"' alt=''></a>";		
    //热门标签
    $.each(data.hotlabal_con,function(index,obj){
      str9+=" <div class='literature'><h4>"+obj.title+"</h4><a href='html/list.html?pid=one'>"+obj.type01+"</a><a href='html/list.html?pid=two'>"+obj.type02+"</a><a href='html/list.html?pid=two'>"+obj.type03+"</a><a href='html/list.html?pid=three'>"+obj.type04+"</a><a href='html/list.html?pid=four'>"+obj.type05+"</a><a href='html/list.html?pid=five'>"+obj.type06+"</a><a href='html/list.html?pid=six'>"+obj.type07+"</a><a href='html/list.html?pid=seven'>"+obj.type08+"</a><a href='html/list.html?pid=three' class='colorchange'>"+obj.type09+">></a></div>"
            	
  })          	
            	
    //豆瓣图书250        	
     $.each(data.doubanbook,function(index,obj){
     	str10+="<li><a href='html/detail.html?pid="+obj.pid+"'><img src='"+obj.img+"' alt='' /></a><a href='?pid=six'><p>"+obj.title+"</p></a></li>"
        	  
              
        	
     })       	
            	
    //畅销图书榜
   
    	
    	$.each(data.seller.one,function(index2,obj2){
    		
    		str11+="<li><p>"+obj2.num+"<a href='html/detail.html?pid="+obj2.pid+"'>"+obj2.title+"</a></p><em>"+obj2.writer+"</em><span><a href=''>去购买</a></span></li>"
               		
        })   
        $.each(data.seller.two,function(index2,obj2){
    		
    		str12+="<li><p>"+obj2.num+"<a href='html/detail.html?pid="+obj2.pid+"'>"+obj2.title+"</a></p><em>"+obj2.writer+"</em><span><a href=''>去购买</a></span></li>"
               		
        })     
        $.each(data.seller.three,function(index2,obj2){
    		
    		str13+="<li><p>"+obj2.num+"<a href='html/detail.html?pid="+obj2.pid+"'>"+obj2.title+"</a></p><em>"+obj2.writer+"</em><span><a href=''>去购买</a></span></li>"
               		
        })         		
               		
   //新书速递
   $.each(data.newbook.one,function(index,obj){
   	str14+="<li><a href='html/detail.html?pid="+obj.pid+"'><img src='"+obj.img+"'></a><a href=''><p>"+obj.title+"</p></a><em>"+obj.writer+"</em></li>"
	        				
                            
   })            	
    	
     $.each(data.newbook.two,function(index,obj){
   	str15+="<li><a href='html/detail.html?pid="+obj.pid+"'><img src='"+obj.img+"'></a><a href=''><p>"+obj.title+"</p></a><em>"+obj.writer+"</em></li>"
	        				
                            
   })   
    $.each(data.newbook.three,function(index,obj){
   	str16+="<li><a href='html/detail.html?pid="+obj.pid+"'><img src='"+obj.img+"'></a><a href=''><p>"+obj.title+"</p></a><em>"+obj.writer+"</em></li>"
	        				
                            
   })   
    $.each(data.newbook.four,function(index,obj){
   	str17+="<li><a href='html/detail.html?pid="+obj.pid+"'><img src='"+obj.img+"'></a><a href=''><p>"+obj.title+"</p></a><em>"+obj.writer+"</em></li>"
	        				
                            
   })          	
            	
            	
   $(".pbooklist").html(str);
   $(".papertop").html(str1);
   $(".paperlist").html(str2);
   $(".ebooklist").html(str3);
   $(".review").html(str4);	
   $(".banner_top").html(str5);
   $(".banner_center").html(str6);
   $(".bannerbottom").html(str7);
   $(".banner_right01").html(str8);		
   $(".hotlabal_con").html(str9);
   $(".book250list").html(str10);
   $("#sellercon1").html(str11);
   $("#sellercon2").html(str12);
   $("#sellercon3").html(str13);
   $("#detaillist01").html(str14);
   $("#detaillist02").html(str15);
   $("#detaillist03").html(str16);
   $("#detaillist04").html(str17);


   //轮播图显示详情方法
   $(".detaillist ").find('li').on("mouseover mouseout","a:first-child",function(){
		var offset=$(this).parent("li").offset();
		//var width=$(this).parent("li").width();
		$(".introduce").toggleClass('active');
		$(".introduce").css({"margin-left":offset.left-5,"margin-top":offset.top-150})

	})

     //畅销图书榜划过效果
   $(".sellerlist").find(".sellercon").find("li").on("mouseover mouseout",function(){

    	$(this).toggleClass('sellerli');
    	$(this).find("span").find("a").toggleClass('buy');
    })
  })   

//搜索框
// $("#search_btn").click(function(){
// 	var val=$("#search_text").val();
	
// 	if(val!=""){
//       window.location.href="html/list.html"
// 	}
// })

// $("#search_btn").click(function(){

// 	$.ajax({
// 		url: 'json/detail.json',
// 		type: 'GET',
		
// 		data: name,
// 	})
// 	.done(function() {
// 		console.log("success");
// 	})
	
// }


//搜索框搜索书名
$("#search_btn").click(function(){
	
$.get('json/detail.json', function(data) {
 var val=$("#search_text").val();

 if(val!=""){
 	var flag=true;
 	$.each(data,function(index,obj){
 		
 		
 		if(flag){
 			if(val==obj.title){
 			
 			location.href="html/detail.html?pid="+obj.pid;
 			flag=false;
 			
 		 }else{
 		 	flag=true;
 		 	location.href="html/blankpage.html"
 		 }
 		}
 		
 		
 		
 		
       

 	})
 	
 	
 }

});


})






//头部个人中心

$(".top_nav_right li:first").on("mouseover mouseout",function(event) {
	$(".down").toggleClass('doubanshow')
});


//用cookie变用户名
var user=localStorage.getItem("username2")

if(user!=undefined){
$("<a href='javascript:void(0)'><span>"+user+"</span></a>").prependTo($(".top_nav_right li:eq(2)"));

$("<a href='html/cart.html'>提醒</a>").prependTo($(".top_nav_right li:eq(1)"));

}else{
	$("<a href='html/register.html'><span>注册</span></a>").prependTo($(".top_nav_right li:eq(2)"));

$("<a href='html/login.html'>登录</a>").prependTo($(".top_nav_right li:eq(1)"));
$(".pcenter").css({"display":"none"})
}




$(".top_nav_right li:eq(2)").click(function(){
	$(".pcenter").toggleClass('pcentershow')
})
$(".pcenter li:eq(1)").click(function(){
	localStorage.removeItem("username2");
})



})    

//搜索联想
window.onload = function(){		
      	
	var oTxt = document.getElementById('search_text');
				oTxt.onkeyup = function() {
					
					var val = this.value;
					var oScript = document.createElement('script');
					oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + val + "&cb=aa"
					document.body.appendChild(oScript);
					document.body.removeChild(oScript);
				}
} 
   
function aa(data){
	
 	var olist=document.getElementById("searchlist");
 	var html="";
 	if(data.s.length>0){
 		for(var i=0;i<data.s.length;i++){
 			html+='<li><a href="https://www.baidu.com/s?wd=' + data.s[i] + '" target="_blank">' + data.s[i] + '</a></li>';

 		}
 		olist.style.display="block";
 		olist.innerHTML=html;
 	}else{
 		olist.style.display="none";
 	}
  }     
   	


 	

 			
    			
   			
    		
    	
  

    
    	
	    	
	    	
	    	
    	
    	
    	
    		
    		
    	





    	
  		

     					
     					   					
     						
     						
     						
     						
     						
     						
     						
     						
     					
                        

                    
     			
	






	
	

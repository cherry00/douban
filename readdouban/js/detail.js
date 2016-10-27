$(function (argument) {
//登录后显示用户名
	var user=localStorage.getItem("username2")
	if(user!=undefined){
		$("<a href='##'>"+user+"</a>").appendTo('.navlog')
	}else{
		$("<a href='login.html'>登录</a>").appendTo('.navlog')
		$(".navlog a:eq(2)").mouseover(function(){
			$(".person").css({"display":"none"})
		})
	}
$(".person a:eq(6)").click(function(){
	localStorage.removeItem("username2");
})
	


	//选项卡
	$(".directory > li").click(function(){
		$(this).find('div').addClass('act');
		$(this).siblings('li').find("div").removeClass('act');
		$(this).addClass('color');
		$(this).siblings('li').removeClass('color');
	})

  //评论1
   $(".commentlist > li").click(function(){
   	  $(this).find(".combox").addClass('comboxact');
   	  $(this).siblings('li').find(".combox").removeClass('comboxact');
   	  $(this).addClass('comact');
   	  $(this).siblings('li').removeClass('comact')
   })
  
   //定价划过效果
   $(".gift").on("mouseover mouseout",function(){
     $(this).siblings('.give').toggleClass('priceact');
   })
   
    $(".cart").on("mouseover mouseout",function(){
     $(this).siblings('.add').toggleClass('priceact');

   })
    //购物车点击效果
    var num=0;
    $(".cart").click(function(){
    	//$(this).siblings('.remove').toggleClass('priceact');
    	$(this).siblings('.add').toggleClass('priceact');
    	$(this).css({"background":"url(../images/detail/cart02.png)"})
    	;
    	;
    	num++;
    	$(".navlog").find("a:eq(1)").find("span").html(num);
    	return false;
    });
    //个人中心划过效果

    $(".navlog").find("a:eq(2)").on("mouseover mouseout",function(){
    	$(".person").toggleClass('personact');
    	
    	 $(".personact").on("mouseover",function(){
    		$(this).show();
    	});
    	$(".personact").on("mouseout",function(){
    		$(this).hide();
    	})
    })
 var str="";
 var str1="";
  $.ajax({
  	url: '../json/detail.json',
  	type: 'POST',
  
  })
  .done(function(data) {
  	//console.log(data);
  	str=location.search.split("=")[1];
  	//console.log(str);
    
  	$.each(data,function(index,obj){
  		if(index==str){
  			str1="<a id='shop' data-id='"+obj.pid+"' class='media-left' href='#'><img src='"+obj.img+"' alt='/'class='book'></a><div class='media-body '><h4 class='media-heading title' data-title='"+obj.title+"'>"+obj.title+"</h4><p class='writer' data-writer='"+obj.writer+"'>"+obj.writer+"</p><p>"+obj.type+"</p><p>"+obj.publish+"</p><p>"+obj.tigong+"</p><p>"+obj.word+"</p><span class='glyphicon glyphicon-star '></span><span class='glyphicon glyphicon-star '></span><span class='glyphicon glyphicon-star '></span><span class='glyphicon glyphicon-star '></span><span class='glyphicon glyphicon-star '>  9.2 <em>| 71人评价</em></span><a href='' class='read'><img src='../images/detail/read.jpg' alt='' ></a><a href='' class='share'><img src='../images/detail/share.jpg' alt='' ></a><a href='' class='shareicon'><img src='../images/detail/icon.jpg' alt='' ></a></div>"
						 
		}			
					
		})				
		
			$(".bookdetail").html(str1)		

			 //分享划过效果
   $(".share").on("mouseover mouseout",function(){

   	$(this).siblings('.shareicon').toggleClass('shareiconact');
  	 })	
     //加入购物车 
      if(localStorage.getItem("cart")){
            	var obj=JSON.parse(localStorage.getItem("cart"))
            }else{
            	var obj={};
            }
    var number=obj[$("#shop").attr("data-id")]||0;
    $(".cart").click(function(){
       
    var proid=$("#shop").attr("data-id");
    // var title=$(".title").attr("data-title");
    // var writer=$(".writer").attr("data-writer");
    
    obj[proid]=++number;
    // obj[1]=title;
    // obj[2]=writer;
    var objtostr=JSON.stringify(obj);
    localStorage.setItem("cart",objtostr);
    // var cookieobj=JSON.parse(localStorage.getItem("cart"));
    // console.log(cookieobj)


	 })					
						
						
					
						
						
						
						
					
 })  		
  	

  	

 
  
  




















})



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
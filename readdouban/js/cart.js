$(function (argument) {

//登录后显示用户名
	var user=$.cookie("username2")
	if(user!=undefined){
		$("<a href='##'>"+user+"</a>").appendTo('.navlog')
	}else{
		$("<a href='login.html'>登录</a>").appendTo('.navlog')
		$(".navlog a:eq(2)").mouseover(function(){
			$(".person").css({"display":"none"})
		})
	}
$(".person a:eq(6)").click(function(){
	$.removeCookie("username2",{path:"/"});
})


//左侧列表划过效果

	$(".cartlist").find("li").on("click mouseover",function(){
		$(this).addClass('cur');
		$(this).siblings('li').removeClass('cur');
	})

	//个人中心

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
var str2="";
var booknum=0;
var num=0;
var bookprice=0;
var price=0;
var tprice=0;
var n=0;
var pricenow=0;
var booknum1=0;
var num1=0;
var price1=0;
var tprice1=0;

//console.log($.cookie("cart"))
if($.cookie("cart")!=undefined){



$.ajax({
	url: '../json/detail.json',
	type: 'POST',
	
})
.done(function(data) {
	
	var cookieobj=JSON.parse($.cookie("cart"));
    // console.log(cookieobj)
    // console.log($.cookie("cart"))
    $.each(cookieobj,function(key,value){
    	
    	bookprice=(value*data[key].price).toFixed(2) ;
    	 str+=" <tr class='cell'><td class='td-select'><input type='checkbox'></td><td class='td-name'>"+data[key].title+"<span>"+data[key].writer+"</span></td><td class='td-num'>"+value+"</td><td class='td-price'>"+data[key].price+"</td><td class='td-totalprice'>"+bookprice +"</td><td class='td-op' data-id='"+data[key].pid+"'>删除</td></tr>" 
             
           
              	
    })     
//购物车赋值
       $("tbody").html(str);       	
     //输出每件产品的数量和总价     	
      $("tbody tr").each(function(){
      
      	booknum+=parseInt($(this).find(".td-num").html());
      	price+=parseFloat($(this).find(".td-totalprice").html())

      })
    num=booknum;
    tprice=price.toFixed(2);
   //合计 
     str1="<p class='choose'>已选作品<span>"+num+"</span>篇</p><p class='total'>合计：<span>￥"+tprice+"</span></p><p class='pay'><a href='javascript:void(0)'><img src='../images/pay.jpg' alt=''/></a></p>"

        $(".bot_right").html(str1)	
   str2=num;
   $(".shop_cart").find("span").html(str2);


//   //删除事件开始
//   $(".td-op").each(function(){
  	
//   	$(this).click(function() {
//   	 n=parseInt($(this).siblings('.td-num').html());
//  //给数量重新赋值 

//     //极限值
//     n=n-1;
//   	if(n<=0){
//   		n=0;
//   		$(this).siblings('.td-num').html(n)
//   		$(this).siblings(".td-totalprice").html(0)
  		
//   	}
    

//     console.log(n)
//   	$(this).siblings('.td-num').html(n);
// //给总价重新赋值 
//   	pricenow=(n*parseFloat($(this).siblings('.td-price').html())).toFixed(2)

//   	$(this).siblings(".td-totalprice").html(pricenow)
//  //给合计重新赋值
 

//  $("tbody tr").each(function(){
      
//       	booknum1+=parseInt($(this).find(".td-num").html());
//       	price1+=parseFloat($(this).find(".td-totalprice").html())
     
//       })
//     num1=booknum1;
//     booknum1=0;
//     tprice1=price1.toFixed(2);
//     price1=0;
    
    
// $(".choose").find("span").html(num1);
// $(".total").find("span").html(tprice1);
// $(".shop_cart").find("span").html(num1);


  	
  	
//   });
//   })
//   //删除事件结束  

//删除开始========================================================
  $(".td-op").each(function(){
     $(this).click(function(){
      
       
       var index=$(this).attr("data-id")
        
        delete cookieobj[index];
       
        var objtostr=JSON.stringify(cookieobj);
        $.cookie("cart",objtostr,{expires:7,path:"/"});
        $(this).parent(".cell").remove();
        

         //给合计重新赋值
 

 $("tbody tr").each(function(){
      
      	booknum1+=parseInt($(this).find(".td-num").html());
      	price1+=parseFloat($(this).find(".td-totalprice").html())
     
      })
    num1=booknum1;
    booknum1=0;
    tprice1=price1.toFixed(2);
    price1=0;
    
    
$(".choose").find("span").html(num1);
$(".total").find("span").html(tprice1);
$(".shop_cart").find("span").html(num1);

//给弹窗赋值

$(".value span").html($(".total").find("span").html());
$(".payment span").html($(".total").find("span").html());
$(".details_left p span:eq(1)").html($(".shop_cart").find("span").html())
$(".perinfo p span:first").html($.cookie("username2"))
if($(".td-name:first").html()!=undefined){
var bookname1=$(".td-name:first").html()
var bookname2=bookname1.split("<span>")[0];
$(".details_left p span:eq(0)").html("《"+bookname2+"》")
 console.log(bookname1)
 } 
//左侧购物车数量赋值======================================
$(".cartlist li:eq(1) span").html($(".navlog a:eq(1) span").html()+"本")


     })

  })
//删除结束========================================================


  //全选
  if($(".check").find("input[type='checkbox']").prop("checked",true)){
  	//alert(1)
  	$("tr").find("input[type='checkbox']").prop("checked",function(i,val){
  		return !val
  	})
  }else{
  	// $("tr").find("input[type='checkbox']").removeProp("checked")
  }

//给弹窗赋值

$(".value span").html($(".total").find("span").html());
$(".payment span").html($(".total").find("span").html());
$(".details_left p span:eq(1)").html($(".shop_cart").find("span").html())
$(".perinfo p span:first").html($.cookie("username2"))
if($(".td-name:first").html()!=undefined){
var bookname1=$(".td-name:first").html()
var bookname2=bookname1.split("<span>")[0];
$(".details_left p span:eq(0)").html("《"+bookname2+"》")
}
//左侧购物车数量赋值======================================
$(".cartlist li:eq(1) span").html($(".navlog a:eq(1) span").html()+"本")

//console.log($.cookie("cart"))



//点击弹窗
$(".pay img ").click(function(){
  $(".shade").addClass('shadeact')
})
  
$(".model h3 span").click(function(){
  $(".shade").removeClass('shadeact')
   
  })  
$(".see a:eq(1)").click(function(){
   $(".shade").removeClass('shadeact')
})  
$(".see a:eq(0)").click(function(){
 
if($(".method ").find("input:checked").val()=="on"){//判断选中一个单选框
   $(".shade").removeClass('shadeact')
}
}) 



})
    	

}







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
$(function (argument) {
	
	var str1="";
	var i=0;
	var len=0;
	$.ajax({
		url: '../json/list.json',
		type: 'POST',
		
	})
	.done(function(data) {
		//=======================================================//		data的长度	
		for(var index in data){
				len++
			}			
		var numperpage=10;				
		var total=len;	
		var num=Math.ceil(total/numperpage);
		//console.log(num)

		
		
 // 给页面添加内容===============================
        function creatinformation(n) {
        	//$.each(data,function(index,obj){
			//console.log(index,obj)
			var str="";
			for(var i=n*numperpage+1 ;i<=Math.min((n+1)*numperpage,total) ;i++){
				str+="<li><div class='media'><a class='media-left' href='detail.html?pid="+data[i].pid+"'><img src='"+data[i].img+"' alt='' /></a><div class='media-body'><h4 class='media-heading'>"+data[i].title+"</h4><p class='writer'>"+data[i].writer+"</p><p class='evaluate'>(144388人评论)</p><p class='introduce'>"+data[i].con+"</p><p class='price'>"+data[i].price+"</p></div></div></li>"
				// console.log(data[i].img)
			}
			 
			
		//})	
		$(".conlist").html(str);	
        }
		creatinformation(0)	;
		
//创建页数按钮
  for(var j=0;j<num;j++){
  	str1+="<li>"+(j+1)+"</li>"
  }
  $(".btn").html(str1)

//给页数按钮添加事件
 $(".btn li:first").addClass('cur')
 $(".btn li").click(function(){
 	i=$(this).index()
 	//console.log(i)
 	creatinformation(i)
 	$(this).addClass('cur');
 	$(this).siblings('li').removeClass('cur')
 })

// 给上一页添加事件               	
                $(".pre").click(function(){
                	
                	if(i>0){
                      i--
                	  creatinformation(i)
                	  
                	}
                	$(".btn").find("li:eq("+i+")").addClass('cur');

                    $(".btn").find("li:eq("+i+")").siblings('li').removeClass('cur')
                	
                })
 // 给下一页添加事件                 
                 $(".next").click(function(){
                	
                	if(i<(num-1)){
                      i++
                	  creatinformation(i)
                	  
                	}
                	$(".btn").find("li:eq("+i+")").addClass('cur');

                    $(".btn").find("li:eq("+i+")").siblings('li').removeClass('cur')
				
		        })
					
					
						
						
						
		
	})

$(".top_nav_right li:first").on("mouseover mouseout",function(event) {
	$(".down").toggleClass('doubanshow')
});


//用cookie变用户名
var user=localStorage.getItem("username2")

if(user!=undefined){
$("<a href='javascript:void(0)'><span>"+user+"</span></a>").prependTo($(".top_nav_right li:eq(2)"));

$("<a href='cart.html'>提醒</a>").prependTo($(".top_nav_right li:eq(1)"));

}else{
	$("<a href='register.html'><span>注册</span></a>").prependTo($(".top_nav_right li:eq(2)"));

$("<a href='login.html'>登录</a>").prependTo($(".top_nav_right li:eq(1)"));
$(".pcenter").css({"display":"none"})
}




$(".top_nav_right li:eq(2)").click(function(){
	$(".pcenter").toggleClass('pcentershow')
})
$(".pcenter li:eq(1)").click(function(){
	localStorage.removeItem("username2");
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
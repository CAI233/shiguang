$(function(){
	$(".box").fullpage({
		anchors:["firstpage","secondpage","thirdpage","fourthpage","fifthpage","sixthpage"],
		verticalCentered:true,
		// navigation:true,
		// navigationTooltips:["首页","关于","服务","方案","客户","联系"],
		// navigationPosition:"right",
		menu:"#navul",
		afterLoad: function(anchorLink, index){
						setTimeout(function(){
							//console.log(index-1);
							if(index-1==0){
								$(".section:eq(0) h1").addClass("animated bounceIn");
								$(".section:eq(0) h3").addClass("animated bounceInUp");
								$(".section:eq(0) P").addClass("animated bounceIn");
							}
							if(index-1==1){
								$(".section:eq(1) .row").addClass("animated bounceInRight").css("display","block");
							}
							if(index-1==2){
								$(".section:eq(2) div.sec2>p").addClass("animated rubberBand");
								$(".section:eq(2) div.sec23div").addClass("animated rubberBand");
							}
							if(index-1==3){
								$(".section:eq(3) div.sec2>p").addClass("animated rubberBand");
								$(".section:eq(3) div.sec23div:gt(3)").addClass("animated bounceInUp");
								$(".section:eq(3) div.sec23div:lt(4)").addClass("animated bounceInDown");
							}
							if(index-1==4){
								$(".section:eq(4) div.sec2>p").addClass("animated rubberBand");
								$(".section:eq(4) div.sec23>div").addClass("animated flipInY");
								
							}
							if(index-1==5){
								$(".section:eq(5) div.sec2>p").addClass("animated flipInX");
								$(".section:eq(5) div.sec23>div").addClass("animated flipInX");
								
							}
						},20)
					},				
	});

	var imgSrc =["13","07","05","10","02","03","11","09","04","01"];
	//var x = $(document).clientWidth;
	console.log(imgSrc.length);
	for(var i=0;i<imgSrc.length;i++){
		if(i<5){
			$(".sec1").eq(i).css({"background-image":"url('img/banner"+imgSrc[i]+".jpg')",
				"background-size":"cover","background-position":"center center","height":"100%"});
		}
		else
		{		
			$(".section").eq(i-4).css({"background-image":"url('img/banner"+imgSrc[i]+".jpg')",
				"background-size":"cover","background-position":"center center"});
		}	 		
	}
		// var y =0;
		// setInterval(function(){
		// 	y++;
		// 	//绝对值函数;
		// 	var scss = -Math.abs(400-y)+"px";
		// 	// console.log(y);
		// 	if(y<400){
		// 		$(".secimg").css({"transform":"translate("+scss+") rotateY(180deg)"});
		// 	}
		// 	if(y>400){
		// 		$(".secimg").css({"transform":"translate("+scss+") rotateY(0deg)"});
		// 	}
		// 	if(y>800){
		// 		y=0;	
		// 	}	
		// },20)
		//小图标的插入
		var iimg = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22"];
		// console.log($("div.sec23div>i").length);
		for(var i=0;i<iimg.length;i++){
			if(i<16){
				console.log(i);
				$("div.sec23div>i").eq(i).css({"background-image":"url('img/icon/"+iimg[i]+".png')",
				"background-size":"contain","background-position":"center center"});
			}
			else{
				console.log(i);
				$("div.sec6div>p>i").eq(i-16).css({"background-image":"url('img/icon/"+iimg[i]+".png')",
				"background-size":"contain","background-position":"center center"});
			}
			
		}
	

})


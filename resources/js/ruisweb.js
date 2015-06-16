$(function(){
	
	$(window).scroll(function(){
		var scroH = $(this).scrollTop();
		if(scroH > $(window).height()){
			$("#side").show(100);
		}else{
			$("#side").hide(100);
		}
	})
	
	$(".sina").hover(function(){
		$(".sinaFloat").stop().toggle(200);
		$(".sina").hover(function(){
			$("sinaFloat").hide();
		})
	})
	$(".weixin").hover(function(){
		$(".weixinFloat").stop().toggle(200);
		$(".weixin").hover(function(){
			$("weixinFloat").hide();
		})
	})
	
	$("#side .cur2").click(function(){
		$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.stop().animate({scrollTop:0});
	})
	
	$("#foucsCase .explain").stop().animate({opacity:0.9},800);
	var foucsHeight = $(window).height();
	$("#foucsCase").css("height",foucsHeight);
	if(navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)){
		$("#foucsCase").css("max-height","640px");
	}
	var foucsCaseH = $("#foucsCase .explain").height();
	var foucsCaseW = $("#foucsCase .explain").width();
	$("#foucsCase .explain").css("margin-top",-foucsCaseH/2);
	$("#foucsCase .explain").css("margin-left",-foucsCaseW/2);
	$("#foucsCase a").click(function(){
		$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.stop().animate({scrollTop:foucsHeight},400);
		new navB;
	})
})

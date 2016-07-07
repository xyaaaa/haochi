//点击，清除样式，添加样式
$(function(){
	$('header .header .right .daohang ul li').click(function(){
		$('header .header .right .daohang ul li').removeClass('li');
		$(this).addClass('li');
	});
	$('.content .fourth .ul1 ul li').click((function(){
		$('.content .fourth .ul1 ul li').removeClass('li1');
		$(this).addClass('li1');
	}));
	$('.fifth .ul1 li').click(function(){
		$('.fifth .ul1 li').removeClass('li1');
		$(this).addClass('li1');
	});
});



$(window).scroll(function(){var o=$(".header-main");$(window).scrollTop()>=50?o.addClass("header-fixed"):o.removeClass("header-fixed")}),$(document).ready(function(){$("#media").carousel({pause:!0,interval:3e3}),$("#certification").carousel({pause:!0,interval:3e3}),$('[data-toggle="tooltip"]').tooltip()}),$(window).scroll(function(){$(this).scrollTop()>=500?$("#return-to-top").fadeIn(200):$("#return-to-top").fadeOut(200)}),$("#return-to-top").click(function(){$("body,html").animate({scrollTop:0},500)}),
$("#service").click(function(){
	var full_url = document.URL;
	var result= full_url.split('/');
	var url = result[result.length-2];
	if(url == 'our-work'){
		$(window).width()>=768&&(window.location.href="../service.php");
	}
	else{
		$(window).width()>=768&&(window.location.href="service.php");
	}
	});
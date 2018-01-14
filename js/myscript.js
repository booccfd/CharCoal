// JavaScript Document

$(document).ready(function(e) {
	$('.new .mBanner div.description p.dscr').animate({
		height:30+'px'
	},0);
	
	$('.new .mBanner ul li').mouseover(function(e) {
		$(this).find('p.dscr').animate({height:50+'px'},300);
	});
	$('.new .mBanner ul li').mouseleave(function(e) {
		$(this).find('p.dscr').animate({height:30+'px'},300);
	});
});
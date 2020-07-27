$('#wrap ul li').hover(function(){
	$(this).stop().animate({
		width:'789px'
	},500).siblings().stop().animate({
		width:'100px'
	},500);
});

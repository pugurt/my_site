$(document).ready(function(){
	// 스크롤
	$('.wrap>a', '.badak li').click(function(){
		$.scrollTo(this.hash || 0,900);
		e.preventDefault();
	})
});
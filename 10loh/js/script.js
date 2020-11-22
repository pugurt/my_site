$(document).ready(function(){
	$(".mSlider").bxSlider({
		auto:true,
		controls:false,
		ouchEnabled:false

	}); 

	$(".sub_character>ul>li").click(function(){
		var liNum = $(this).index();
		$(".cha-btn-hover>ul>li").removeClass(); 
		$(this).addClass("change-btn");//액티브 클릭하면 이미지 바꾸는방법뭐지 ★이거 안되는 이유를 찾기
		$(".sub_section_wrap>div").hide();
		$(".sub_section_wrap>div").eq(liNum).fadeIn();
	});
});
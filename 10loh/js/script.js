$(document).ready(function(){
//bx슬라이드
	$(".mSlider").bxSlider({
		auto:true,
		controls:false,
		ouchEnabled:false
	}); 

//캐릭터 선택
	//캐릭터 버튼 기본
	$(".sub_character>ul>li>img:nth-child(3)").show();
	$(".sub_character>ul>li>img:nth-child(1),.sub_character>ul>li>img:nth-child(2)").hide();
	$(".sub_character>ul>li>img:nth-child(2)").eq(0).show();
	$(".sub_character>ul>li>img:nth-child(3)").eq(0).hide();
	$(".sub_section_wrap>div").hide(); 
	$(".sub_section_wrap>div").eq(0).show(); 

	//마우스 클릭
	$(".sub_character>ul>li").click(function(){
		var liNum = $(this).index();
	 	//클릭한 것 검은 캐릭터 창띄우기
		$(".sub_character>ul>li>img:nth-child(3)").show();
		$(".sub_character>ul>li>img:nth-child(1)").hide();
		$(".sub_character>ul>li>img:nth-child(2)").hide();
		$(".sub_character>ul>li>img:nth-child(3)").eq(liNum).hide();
		$(".sub_character>ul>li>img:nth-child(2)").eq(liNum).show();

		//누르면 정보뜨기
		$(".sub_section_wrap>div").hide(); 
		$(".sub_section_wrap>div").eq(liNum).fadeIn();

		//캐릭터 애니메이션
		//https://jeongah-story.tistory.com/68
		$(".sub_section_wrap>div>img:nth-child(1)").eq(liNum).finish();
		$(".sub_section_wrap>div>img:nth-child(1)").eq(liNum).animate({ left:"-20px" }, function(){
			$(".sub_character>ul>li").click(function(){
				$(".sub_section_wrap>div>img:nth-child(1)").eq(liNum).animate({ left:"-30px" });
			});
		});
		
	});

//경고창
$(".navlist>ul>li:nth-child(2)>ul>li:nth-child(3)").click(function(){
	alert("해당 페이지는 정비중입니다.");
});



});
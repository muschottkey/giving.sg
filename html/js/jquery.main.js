function MainTabs(){
	var item_click = $('.tab-nav-area a');
	item_click.click(function(){
		var id_ = $(this).attr('href');
		
		if(!$(this).parent().hasClass('active')){
			$(this).parent().siblings().removeClass('active');
			$(this).parent().addClass('active');
			$(id_).siblings().hide().removeClass('active');
			$(id_).addClass('active').hide().fadeIn(410);
		}
		return false;
	});
}

$(function(){
	MainTabs();
	$('.accordion-title').click(function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$(this).find('.fa').removeClass('fa-plus').addClass('fa-minus');
			$(this).next('.accordion-content').stop().slideDown(400);
		}
		else{
			$(this).removeClass('active');
			$(this).next('.accordion-content').stop().slideUp(400);
			$(this).find('.fa').removeClass('fa-minus').addClass('fa-plus');
		}
	});
	$('.top-title-area').click(function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$(this).find('.fa').removeClass('fa-plus').addClass('fa-minus');
			$(this).next('.cpn-holder').stop().slideDown(400);
		}
		else{
			$(this).removeClass('active');
			$(this).find('.fa').removeClass('fa-minus').addClass('fa-plus');
			$(this).next('.cpn-holder').stop().slideUp(400);
		}
	});
	
	$('.cpn-holder .btn-close').click(function(){
		$(this).closest('.tab').find('.top-title-area').removeClass('active');
		$(this).closest('.tab').find('.top-title-area .fa').removeClass('fa-minus').addClass('fa-plus');
		$(this).closest('.tab').find('.cpn-holder').stop().slideUp(400);
	});
	
	if($('.img-area-holder img').length){
		var items_visible;
		var winWidth = $(window).innerWidth();
		console.log(winWidth);
		if(winWidth <= 767){
			items_visible = 8;
		}
		if(winWidth >= 768 && winWidth < 980){
			items_visible = 12;
		}
		if(winWidth >= 980){
			items_visible = 18;
		}
		console.log(items_visible);
		$('.img-area-holder img:lt('+items_visible+')').show();
		var items = $('.img-area-holder img').length;
		var shown = 12;
		$('.btn-more-img').click(function () {
			shown = $('.img-area-holder img:visible').size()+items_visible;
			if(shown < items){
				$('.img-area-holder img:lt('+shown+')').stop().fadeIn(400);
			}
			else{
				$('.img-area-holder img:lt('+items+')').stop().fadeIn(400);
			 	$('.btn-area').hide();
			 }
		});
	}

	/* Progressive display of search results*/
	$('.search-results-wrapper .cpn-sgtn-item:lt(9)').show();
	$('.btn-more-img').click(function () {
			var items = $('.search-results-wrapper .cpn-sgtn-item').length;
			shown = $('.search-results-wrapper .cpn-sgtn-item:visible').size()+6;
			if(shown < items){
				$('.search-results-wrapper .cpn-sgtn-item:lt('+shown+')').stop().fadeIn(400);
			}
			else{
				$('.search-results-wrapper .cpn-sgtn-item:lt('+items+')').stop().fadeIn(400);
			 	$('.btn-area').hide();
			 }
		});
	
	$('').click(function(){
		var i_ = $(this).closest('.accordion-content').find('.img-area-holder img:visible:last').index();
		$(this).closest('.accordion-content').find('.img-area-holder img:eq(i_):gt(5)').show();
	});
	
	$('.carousel-inner > .ico').click(function(){
		$(this).toggleClass('active');
	});

	var addCpnBtn = $('.swiper-wrapper').height();
	$('.add-cpn-btn').height(addCpnBtn);
		
});
(function($){
	$.fn.sameHeight = function(opt) {
		var options = $.extend({
			skipClass: 'same-height-ignore',
			leftEdgeClass: 'same-height-left',
			rightEdgeClass: 'same-height-right',
			elements: '>*',
			flexible: false,
			multiLine: false,
			useMinHeight: false,
			biggestHeight: false
		},opt);
		return this.each(function(){
			var holder = $(this), postResizeTimer, ignoreResize;
			var elements = holder.find(options.elements).not('.' + options.skipClass);
			if(!elements.length) return;

			// resize handler
			function doResize() {
				elements.css(options.useMinHeight && supportMinHeight ? 'minHeight' : 'height', '');
				if(options.multiLine) {
					// resize elements row by row
					resizeElementsByRows(elements, options);
				} else {
					// resize elements by holder
					resizeElements(elements, holder, options);
				}
			}
			doResize();

			// handle flexible layout / font resize
			var delayedResizeHandler = function() {
				if(!ignoreResize) {
					ignoreResize = true;
					doResize();
					clearTimeout(postResizeTimer);
					postResizeTimer = setTimeout(function() {
						doResize();
						setTimeout(function(){
							ignoreResize = false;
						}, 10);
					}, 100);
				}
			};

			// handle flexible/responsive layout
			if(options.flexible) {
				$(window).bind('resize orientationchange fontresize', delayedResizeHandler);
			}

			// handle complete page load including images and fonts
			$(window).bind('load', delayedResizeHandler);
		});
	};

	// detect css min-height support
	var supportMinHeight = typeof document.documentElement.style.maxHeight !== 'undefined';

	// get elements by rows
	function resizeElementsByRows(boxes, options) {
		var currentRow = $(), maxHeight, maxCalcHeight = 0, firstOffset = boxes.eq(0).offset().top;
		boxes.each(function(ind){
			var curItem = $(this);
			if(curItem.offset().top === firstOffset) {
				currentRow = currentRow.add(this);
			} else {
				maxHeight = getMaxHeight(currentRow);
				maxCalcHeight = Math.max(maxCalcHeight, resizeElements(currentRow, maxHeight, options));
				currentRow = curItem;
				firstOffset = curItem.offset().top;
			}
		});
		if(currentRow.length) {
			maxHeight = getMaxHeight(currentRow);
			maxCalcHeight = Math.max(maxCalcHeight, resizeElements(currentRow, maxHeight, options));
		}
		if(options.biggestHeight) {
			boxes.css(options.useMinHeight && supportMinHeight ? 'minHeight' : 'height', maxCalcHeight);
		}
	}

	// calculate max element height
	function getMaxHeight(boxes) {
		var maxHeight = 0;
		boxes.each(function(){
			maxHeight = Math.max(maxHeight, $(this).outerHeight());
		});
		return maxHeight;
	}

	// resize helper function
	function resizeElements(boxes, parent, options) {
		var calcHeight;
		var parentHeight = typeof parent === 'number' ? parent : parent.height();
		boxes.removeClass(options.leftEdgeClass).removeClass(options.rightEdgeClass).each(function(i){
			var element = $(this);
			var depthDiffHeight = 0;
			var isBorderBox = element.css('boxSizing') === 'border-box' || element.css('-moz-box-sizing') === 'border-box' || element.css('-webkit-box-sizing') === 'border-box';

			if(typeof parent !== 'number') {
				element.parents().each(function(){
					var tmpParent = $(this);
					if(parent.is(this)) {
						return false;
					} else {
						depthDiffHeight += tmpParent.outerHeight() - tmpParent.height();
					}
				});
			}
			calcHeight = parentHeight - depthDiffHeight;
			calcHeight -= isBorderBox ? 0 : element.outerHeight() - element.height();

			if(calcHeight > 0) {
				element.css(options.useMinHeight && supportMinHeight ? 'minHeight' : 'height', calcHeight);
			}
		});
		boxes.filter(':first').addClass(options.leftEdgeClass);
		boxes.filter(':last').addClass(options.rightEdgeClass);
		return calcHeight;
	}
}(jQuery));

function MainTabs(){
	var item_click = $('.tab-nav-area a:not(.ignore-tab-event)');
	item_click.click(function(){
		var id_ = $(this).attr('href');
		
		if(!$(this).parent().hasClass('active') && !$(this).parent().hasClass("inactive")){
			$(this).parent().siblings().removeClass('active');
			$(this).parent().addClass('active');
			$(id_).siblings().hide().removeClass('active');
			$(id_).addClass('active').hide().fadeIn(410);
		}
		return false;
	});
}

$('.m-nav-link').click(function(){
	$('#nav').stop().slideToggle(450);
	return false;
})


$(function(){
	if($('.dtn-amt-item .dtn-amt.span2').length){
		$('.dtn-amt-item').sameHeight({
			elements: '> div',
			flexible: true,
			multiLine: true
		});
	}
	
	$(document).click(function(e){
		if($(e.target).closest('.table.gf-bkt').get(0) == null){
			$('.table.gf-bkt .edit-box').hide();
			$('.table.gf-bkt .edit-pencil-area').show();
		}
	});
	
	MainTabs();
	
	$('.check:not(.main)').click(function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$(this).closest('tr').addClass('active');
			$('.delete-all-area').show();
		}
		else{
			$(this).removeClass('active');
			$(this).closest('tr').removeClass('active');
			if($(this).closest('tbody').find('tr.active').length == 0){
				$('.delete-all-area').hide();
			}
		}
	});
	
	$('.delete-all-area .delete').click(function(){
		$(this).closest('.p-section').find('table.gf-bkt tr.active').remove();
		$(this).closest('.delete-all-area').hide();
		return false;
	});
	
	$('.check.main:not(.main-mobile)').click(function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$(this).closest('table').find('tbody > tr:not(.summary)').addClass('active');
			$(this).closest('table').find('tbody > tr .check').addClass('active');
			$('.delete-all-area').show();
		}
		else{
			$(this).removeClass('active');
			$(this).closest('table').find('tbody > tr:not(.summary)').removeClass('active');
			$(this).closest('table').find('tbody > tr .check').removeClass('active');
			$('.delete-all-area').hide();
		}
	});
	
	$('.check-col .add-txt.main').click(function(){
		$(this).closest('td').find('.check').trigger('click');
	});
	
	$('.check.main-mobile').click(function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$(this).closest('.p-section').find('table tbody > tr:not(.summary)').addClass('active');
			$(this).closest('.p-section').find('table tbody > tr .check').addClass('active');
			$(this).closest('.delete-all-area').find('.delete').css('visibility', 'visible');
		}
		else{
			$(this).removeClass('active');
			$(this).closest('.p-section').find('table tbody > tr:not(.summary)').removeClass('active');
			$(this).closest('.p-section').find('table tbody > tr .check').removeClass('active');
			$(this).closest('.delete-all-area').find('.delete').css('visibility', 'hidden');
		}
	});
	
	$('.edit-pencil-area .fa').click(function(){
		$(this).closest('td').find('.edit-box').show();
		$(this).closest('td').find('.edit-pencil-area').hide();
	});
	
	$('.edit-box .delete-row').click(function(){
		$(this).closest('tr').remove();
	});
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


/************************************************************************************************************************************************************************************/

/*!
 * @preserve
 *
 * Readmore.js jQuery plugin
 * Author: @jed_foster
 * Project home: http://jedfoster.github.io/Readmore.js
 * Licensed under the MIT license
 *
 * Debounce function from http://davidwalsh.name/javascript-debounce-function
 */
!function(e){"use strict";function t(e,t,a){var i;return function(){var n=this,o=arguments,r=function(){i=null,a||e.apply(n,o)},s=a&&!i;clearTimeout(i),i=setTimeout(r,t),s&&e.apply(n,o)}}function a(e){var t=++h;return String(null==e?"rmjs-":e)+t}function i(e){var t=e.clone().css({height:"auto",width:e.width(),maxHeight:"none",overflow:"hidden"}).insertAfter(e),a=t.outerHeight(),i=parseInt(t.css({maxHeight:""}).css("max-height").replace(/[^-\d\.]/g,""),10),n=e.data("defaultHeight");t.remove();var o=i||e.data("collapsedHeight")||n;e.data({expandedHeight:a,maxHeight:i,collapsedHeight:o}).css({maxHeight:"none"})}function n(e){if(!d[e.selector]){var t=" ";e.embedCSS&&""!==e.blockCSS&&(t+=e.selector+" + [data-readmore-toggle], "+e.selector+"[data-readmore]{"+e.blockCSS+"}"),t+=e.selector+"[data-readmore]{transition: height "+e.speed+"ms;overflow: hidden;}",function(e,t){var a=e.createElement("style");a.type="text/css",a.styleSheet?a.styleSheet.cssText=t:a.appendChild(e.createTextNode(t)),e.getElementsByTagName("head")[0].appendChild(a)}(document,t),d[e.selector]=!0}}function o(t,a){this.element=t,this.options=e.extend({},s,a),n(this.options),this._defaults=s,this._name=r,this.init(),window.addEventListener?(window.addEventListener("load",l),window.addEventListener("resize",l)):(window.attachEvent("load",l),window.attachEvent("resize",l))}var r="readmore",s={speed:100,collapsedHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,blockCSS:"display: block; width: 100%;",startOpen:!1,beforeToggle:function(){},afterToggle:function(){}},d={},h=0,l=t(function(){e("[data-readmore]").each(function(){var t=e(this),a="true"===t.attr("aria-expanded");i(t),t.css({height:t.data(a?"expandedHeight":"collapsedHeight")})})},100);o.prototype={init:function(){var t=this,n=e(this.element);n.data({defaultHeight:this.options.collapsedHeight,heightMargin:this.options.heightMargin}),i(n);var o=n.data("collapsedHeight"),r=n.data("heightMargin");if(n.outerHeight(!0)<=o+r)return!0;var s=n.attr("id")||a(),d=t.options.startOpen?t.options.lessLink:t.options.moreLink;n.attr({"data-readmore":"","aria-expanded":!1,id:s}),n.after(e(d).on("click",function(e){t.toggle(this,n[0],e)}).attr({"data-readmore-toggle":"","aria-controls":s})),t.options.startOpen||n.css({height:o})},toggle:function(t,a,i){i&&i.preventDefault(),t||(t=e('[aria-controls="'+this.element.id+'"]')[0]),a||(a=this.element);var n=this,o=e(a),r="",s="",d=!1,h=o.data("collapsedHeight");o.height()<=h?(r=o.data("expandedHeight")+"px",s="lessLink",d=!0):(r=h,s="moreLink"),n.options.beforeToggle(t,a,!d),o.css({height:r}),o.on("transitionend",function(){n.options.afterToggle(t,a,d),e(this).attr({"aria-expanded":d}).off("transitionend")}),e(t).replaceWith(e(n.options[s]).on("click",function(e){n.toggle(this,a,e)}).attr({"data-readmore-toggle":"","aria-controls":o.attr("id")}))},destroy:function(){e(this.element).each(function(){var t=e(this);t.attr({"data-readmore":null,"aria-expanded":null}).css({maxHeight:"",height:""}).next("[data-readmore-toggle]").remove(),t.removeData()})}},e.fn.readmore=function(t){var a=arguments,i=this.selector;return t=t||{},"object"==typeof t?this.each(function(){if(e.data(this,"plugin_"+r)){var a=e.data(this,"plugin_"+r);a.destroy.apply(a)}t.selector=i,e.data(this,"plugin_"+r,new o(this,t))}):"string"==typeof t&&"_"!==t[0]&&"init"!==t?this.each(function(){var i=e.data(this,"plugin_"+r);i instanceof o&&"function"==typeof i[t]&&i[t].apply(i,Array.prototype.slice.call(a,1))}):void 0}}(jQuery);
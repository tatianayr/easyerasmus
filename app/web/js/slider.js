/** @format */

var pc_element = pc_element || {};
!(function (p) {
	'use strict';
	(pc_element.pc_initialize = {
		init: function () {
			pc_element.pc_initialize.swiperSlider(),
				pc_element.pc_initialize.owlCarousel();
		},
		swiperSlider: function () {
			var $swiperContainer = p('.swiper-container');
			if ($swiperContainer.length > 0) {
				p($swiperContainer).each(function () {
					var t = p(this),
						i = (p(this).attr('id'), p(this).data('perpage') || 1),
						a = p(this).data('loop'),
						e = p(this).data('speed') || 1000,
						o = p(this).data('space') || 0,
						l = p(this).data('effect'),
						c = p(this).data('center'),
						pl = p(this).data('autoplay'),
						nex = p(this).data('next'),
						pre = p(this).data('prev'),
						pag = p(this).data('pagination'),
						pagtype = p(this).data('paginationtype'),
						d = p(this).data('direction') || 'horizontal',
						r = p(this).data('breakpoints');
					new Swiper(t, {
						slidesPerView: i,
						direction: d,
						spaceBetween: o,
						loop: a,
						speed: e,
						effect: l,
						breakpoints: r,
						centeredSlides: c,
						// autoplay: {
						//     delay: 3000,
						//     disableOnInteraction: !1
						// },
						autoplay: pl,
						pagination: {
							el: pag,
							type: pagtype,
							clickable: !0,
						},
						navigation: {
							nextEl: nex,
							prevEl: pre,
						},
						on: {
							slideChangeTransitionStart: function () {
								$('.slider_item > div').css({
									transition: '0.1s',
									opacity: '0',
								});
							},
							slideChangeTransitionEnd: function () {
								var $firstAnimatingElements = $('div.swiper-slide').find(
									'[data-animation]'
								);
								doAnimations($firstAnimatingElements);
								$('.slider_item > div')
									// .find('[data-animation]')
									.css({ opacity: '1', transition: '0.1s' });
							},
						},
					});
				});
				$($swiperContainer).hover(
					function () {
						this.swiper.autoplay.stop();
					},
					function () {
						this.swiper.autoplay.start();
					}
				);
			}
		},

		owlCarousel: function () {
			p('.owl-carousel').each(function () {
				var t = p(this),
					i = (p(this).attr('id'), p(this).data('perpage') || 1),
					a = p(this).data('loop'),
					au = p(this).data('autoplay'),
					e = p(this).data('speed') || 1000,
					o = p(this).data('margin') || 0,
					ce = p(this).data('center'),
					rs = p(this).data('responsive'),
					dot = p(this).data('dots'),
					nav = p(this).data('nav');
				t.owlCarousel({
					items: i,
					margin: o,
					loop: a,
					dots: dot,
					smartSpeed: e,
					responsive: rs,
					center: ce,
					autoplay: au,
					autoplayHoverPause: true,
					nav: nav,
					navText: [
						"<i class='ti-angle-left'></i>",
						"<i class='ti-angle-right'></i>",
					],
				});
			});
		},
	}),
		(pc_element.documentOnReady = {
			init: function () {
				pc_element.pc_initialize.init();
			},
		}),
		p(document).ready(pc_element.documentOnReady.init);

	function doAnimations(elements) {
		var animationEndEvents =
			'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay,
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
})(jQuery);

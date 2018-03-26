require.config({　　　　
	paths: {
		"jquery": "./jquery-1.12.4.min",
		"swiper": "./swiper",
		"animation": "./wow",
		"swiper-animation": "./swiper.animate1.0.2.min",
	},
	shim: {
		animation: {
			deps: [],
			exports: 'WOW'
		}
	}

});

require(['jquery'], function($) {
	console.log('load finish!' + new Date());
	$('.header .menu .target').on('mouseenter', function() {
		$(this).addClass('active on').parent('.item').siblings().find('.target').removeClass('active on');
	});
	$('.header .menu').on('mouseleave', function() {
		$(this).find('.target').removeClass('active on')
	});
	//pc 菜单

	$.each($('.header .mobile-menu .child-menu .target'), function(index, val) {
		if ($(val).siblings('.child-menu').length > 0) {
			$(val).addClass('children-menu');
		}
	});
	$('.header .mobile-menu .child-menu .target').on('click', function() {
		if ($(this).siblings('.child-menu').length > 0) {
			$(this).parents('.child-menu').addClass('moveout')
			$(this).siblings().addClass('moveoin');
		}
		if ($(this).hasClass('back')) {
			$(this).parents('.child-menu').eq(0).removeClass('moveoin')
			$(this).parents('.child-menu').eq(1).removeClass('moveout')
		}
	});
	$('.header .toggle-mobile-bottom').on('click', function() {
		$('body').addClass('mobile-menu-open');
		$(this).addClass('active')
	});
	$('.mobile-layout').on('click', function() {
		$('body').removeClass('mobile-menu-open');
		$('.header .toggle-mobile-bottom').removeClass('active')
	});
	// 手机菜单

	$('.header .nav span.share').on('mouseenter ', function() {
		$('.header .nav-layout .share-layout').addClass('active');
		$('.header .nav span.share').addClass('active');
	});
	$('.nav-layout-mouse-leave').on('mouseleave', function() {
		$('.header .nav-layout .share-layout').removeClass('active');
		$('.header .nav span.share').removeClass('active');
	});
	$('.header .nav .navigation').on('mouseenter', function() {
		$('.header .nav-layout .share-layout').removeClass('active');
		$('.header .nav span.share').removeClass('active');
	});
	//分享


	$('.header .nav .navigation').on('mouseenter', function() {
		$('.header .nav .navigation').addClass('active')
		$('.header .nav-layout .navigation-layout').addClass('active');

	});
	$('.nav-layout-mouse-leave').on('mouseleave', function() {
		$('.header .nav .navigation').removeClass('active')
		$('.header .nav-layout .navigation-layout').removeClass('active');
	});
	$('.header .nav span.share').on('mouseenter ', function() {
		$('.header .nav .navigation').removeClass('active')
		$('.header .nav-layout .navigation-layout').removeClass('active');
	});
	//网站导航
})
// require(['jquery', 'swiper', 'animation', 'swiper-animation'], function($, swiper, animation, swiper_animation) {
// 	console.log('load finish!' + new Date());
// })

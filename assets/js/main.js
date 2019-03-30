$(document).ready(function(){


	var doFullpage = document.documentElement.clientWidth;
	if (doFullpage > 800) {
		$(window).scroll(function () {
			if ($(this).scrollTop()) {
				$('.mission__circle__line svg path');
			}
		});
	}


	$('.vacancy__card').on('click', '.btn-vacancy', function (e) {
		e.preventDefault();
		$(this).parent().parent().addClass("show-info");
	});

	$(".header__tooltip").hover(function(){
		$('.tooltip-inner').removeClass('hidden-tooltip');
	},function(){
		$('.tooltip-inner').addClass('hidden-tooltip');
	});

	$(".fav--header").hover(function(){
		$('.tooltip-inner').removeClass('hidden-tooltip');
	},function(){
		$('.tooltip-inner').addClass('hidden-tooltip');
	});

	$(".fav-svg").on('click', function (e) {
		e.preventDefault();
		$(".fav-svg").toggleClass("animated");
	});


	$('body').on('click', '.btn--form', function (e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: ( $('.form').offset().top - 50)
			}, 400)

		});

	// Menu button
	$('.header__menu-button').click(function(e) {
		e.preventDefault();

		$(this).toggleClass('active');
		$('.header__nav').toggleClass('active');

		if (window.innerWidth <= 980) {
			$('.header__search-button').removeClass('active');
			$('.header__search-form').addClass('hidden');
		}
	});

	// Search input
	$('.header__search-button').click(function(e) {
		e.preventDefault();

		$(this).toggleClass('active');
		$('.header__search-form').toggleClass('hidden');
		$('.block').toggleClass('hidden');

		$('.header__search-input')[0].focus();

		if (window.innerWidth > 980) {
			$('.header__nav').toggleClass('hidden');
			$('.block').toggleClass('hidden');

		} else {
			$('.header__menu-button').removeClass('active');
			$('.header__nav').removeClass('active');
			$('.block').toggleClass('hidden');
		}

		if (window.innerWidth <= 980) {
			$('.header__menu-button').toggleClass('hidden');
			$('.block').toggleClass('hidden');
		}
	});

	$("select").chosen({
		disable_search: true
	});


	$(".file-upload input[type=file]").change(function(){
		var filename = $(this).val().replace(/.*\\/, "");
		$("#filename").val(filename);
		$("#filename").css({"display":"block"})
	});

	$('#services-tabs').tab('show');



	$('#search').click( function(event){

		event.stopPropagation();


		$("#list").fadeIn("fast");

	});
	$(document).click( function(){

		$('#list').hide();
	});


	$(".single_img").fancybox({
	});

	$(".fancybox").fancybox({
		beforeClose: function(){
			$(".zoomContainer").remove();
			$('.zoomWindowContainer').remove();
			$(".zoomLens").remove();
		}
	});


	// Slider | Product
	$('.one-product__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.one-product__slider_navigation',
		arrows: false,
		dots: false,
		infinite: true,
		focusOnSelect: true,
		fade: true,
		cssEase: 'linear'
	});
// Slider | one-product-slider
	$('.one-product__slider_navigation').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		asNavFor: '.one-product__slider',
		focusOnSelect: true,
		centerMode: false,
		vertical: true,
		responsive: [
			{
				breakpoint: 950,
				settings: {
					vertical: false,
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 5,
					vertical: false
				}
			},
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 4,
					vertical: false
				}
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow: 3,
					vertical: false
				}
			}
		]
	});

	// Slider
	$('.product__list').slick({
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: $('.slider-button--prev'),
		nextArrow: $('.slider-button--next'),
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	// Slider
	$('.clients__list').slick({
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: $('.slider-button--prev'),
		nextArrow: $('.slider-button--next'),
		responsive: [
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	var s = skrollr.init({
		forceHeight: false
	});



	$(window).on('scroll', function(){
		var scroll= $(window).scrollTop();
		var elem = $('.svg-animation-line');
		var top = elem.offset().top - parseInt($(window).height()/2);
		var i=true;

		if(scroll>=top && i==true){
			i=false;
			elem.find('animate').addClass('active');
			elem.find('animateMotion').addClass('active');
		}
	});
});


function showSuccess() {
	var targ = 'form-popup-price.html';
	$.fancybox.open({
		src  : targ,
		type : 'ajax',
		baseClass: 'success-popup-container',
		slideShow  : false,
		fullScreen : false,
		thumbs     : false
	});
}


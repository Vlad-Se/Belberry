$(function(){
var widthMenu = 500;
function placeh(place_tag){
	$(place_tag).focus(function(){
			$(this).attr("placeholder", ""); 
	    }).blur(function(){
	            $(this).attr("placeholder", $(this).data('empty')); 
	    }).each(function(){
	         $(this).attr("placeholder", $(this).data('empty'));  
		});
}
$(document).ready(function(e) {
	//Открытие/закрытие мобильного меню
	$(".header__mobile-container").click(function(){
		if($(this).hasClass("header__mobile-container--active")){
			$(this).removeClass("header__mobile-container--active");
			$(".mobile-menu").css({"width":"0"});
		}
		else{
			$(this).addClass("header__mobile-container--active");
			$(".mobile-menu").css({"width":"100%"});
		}
	});
	//Открытие/закрытие меню услуг
	$(".header__menu-item--razdels").click(function(){
		if($(this).hasClass("header__menu-item--active")){
			$(this).removeClass("header__menu-item--active");
			$(".hidden-menu").fadeOut(300);
			$(".hidden-menu").find(".hidden-menu__container").css({"width":"0"});
		}
		else{
			$(this).addClass("header__menu-item--active");
			$(".hidden-menu").fadeIn(300);
			$(".hidden-menu").find(".hidden-menu__container").css({"width":widthMenu});
		}
	});
	$(".hidden-menu__close").click(function(){
		$(".header__menu-item--razdels").removeClass("header__menu-item--active");
		$(this).closest(".hidden-menu").fadeOut(300);
		$(this).closest(".hidden-menu__container").css({"width":"0"});
	});
	$(document).mouseup(function (e){
		var div = $('.hidden-menu__container');
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
				$(".header__menu-item--razdels").removeClass("header__menu-item--active");
				div.closest(".hidden-menu").fadeOut(300);
				div.css({"width":"0"});
		}
	});
	//Наведение на меню Услуг
	$(".hidden-menu__item a").hover(function(){
		$(this).closest(".hidden-menu__item").addClass("hidden-menu__item--active");
	},function(){
		$(this).closest(".hidden-menu__item").removeClass("hidden-menu__item--active");
	});
	//Открытие/закрытие поиска
	$(".header__search").click(function(){
		$(this).addClass("header__search--active");
		$(".hidden-search").fadeIn(300);
		$(".hidden-search").find(".hidden-search__container").slideDown(700);
	});
	$(".hidden-search__close").click(function(){
		$(".header__search").removeClass("header__search--active");
		$(this).closest(".hidden-search").fadeOut(300);
		$(this).closest(".hidden-search__container").slideUp(700);
	});
	$(document).mouseup(function (e){
		var div = $('.hidden-search__container');
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
				$(".header__search").removeClass("header__search--active");
				div.closest(".hidden-search").fadeOut(300);
				div.slideUp(700);
		}
	});
	//Слайдер
	$('.slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true
	});
	//placeholder
	placeh(".hidden-search__input");
	$(window).resize(function() {
		
	});
});
});

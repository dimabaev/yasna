// Объявление модуля
var myModale = ( () => {

	// Инициализирует наш модуль
	let init = () => {
		_setUpListners();
	};

	// Прослушивает события
	let _setUpListners = () => {
        
	};

    // swiper
    let swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

    let galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    });
    let galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;


    // Возвращаем объект (публичные методы)
	return {
		init: init
	};

})();

// Вызов модуля
myModale.init();

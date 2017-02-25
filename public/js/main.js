// Объявление модуля
var myModale = (() => {

    // Инициализирует наш модуль
    let init = () => {
        _setUpListners();
    };
    // Назначаем события
    let _setUpListners = () => {
    //   $('.photo-small').delegate('click', _triggerImg )  
    };


    // смена фотографий
    
    var Slideshow = (function(){

	var _changeSlide = function($this){
		var
			container = $this.closest('.products__slideshow'),
			path = $this.find('img').attr('src'),
			display = container.find('.products__slideshow-img');

        
		$this.closest('.products__slideshow-item').addClass('active')
			.siblings().removeClass('active');

		display.fadeOut(function(){
			$(this).attr('src', path).fadeIn();
		});
	}

        return {
            init: function(){
                $('.products__slideshow-link').on('click', function(e){
                    e.preventDefault();

                    var
                        $this = $(this);

                    _changeSlide($this);

                });
            }
        }
    }());

    Slideshow.init();




    // swiper
    let swiper = new Swiper('.swiper-container');


    // Возвращаем объект (публичные методы)
    return {
        init: init,
        Slideshow: Slideshow
    };

})();

// Вызов модуля
myModale.init();
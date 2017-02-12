/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./app/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	// Объявление модуля
	var myModale = function () {
	    var _sync1$owlCarousel, _sync2$owlCarousel;

	    // Инициализирует наш модуль
	    var init = function init() {
	        _setUpListners();
	    };

	    var _setUpListners = function _setUpListners() {
	        $('#load__popUp').on('click', _showModal); //откритые модального окна
	        $('#close__popup').on('click', _closeModal); //закрытие модального окна
	    };

	    //работает с модальным окном
	    var _showModal = function _showModal(ev) {
	        console.log('открытие модального окна');
	        ev.preventDefault();

	        $('.block__modal').toggleClass('flex');
	    };

	    // закрытие модального окна
	    var _closeModal = function _closeModal(ev) {
	        console.log('Закрытие модального окна');
	        ev.preventDefault();

	        $('.block__modal').removeClass('flex');
	    };

	    // OWL скритпт для работы со слайдером
	    //=============== 
	    var sync1 = $('#sync1');
	    var sync2 = $('#sync2');
	    var slidesPerPage = 4; //globaly define number of elements per page
	    var syncedSecondary = true;

	    sync1.owlCarousel((_sync1$owlCarousel = {
	        items: 1,
	        loop: true,
	        dots: false,
	        slideSpeed: 2000,
	        autoplay: true
	    }, _defineProperty(_sync1$owlCarousel, 'loop', true), _defineProperty(_sync1$owlCarousel, 'margin', 10), _sync1$owlCarousel));

	    sync2.owlCarousel((_sync2$owlCarousel = {
	        items: 3,
	        loop: true,
	        dots: false
	    }, _defineProperty(_sync2$owlCarousel, 'loop', true), _defineProperty(_sync2$owlCarousel, 'margin', 10), _sync2$owlCarousel));

	    sync2.on('initialized.owl.carousel', function () {
	        sync2.find(".owl-item").eq(0).addClass("current");
	    }).owlCarousel({
	        items: slidesPerPage,
	        dots: true,
	        nav: true,
	        smartSpeed: 200,
	        slideSpeed: 500,
	        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
	        responsiveRefreshRate: 100
	    }).on('changed.owl.carousel', syncPosition2);

	    function syncPosition(el) {
	        //if you set loop to false, you have to restore this next line
	        //var current = el.item.index;

	        //if you disable loop you have to comment this block
	        var count = el.item.count - 1;
	        var current = Math.round(el.item.index - el.item.count / 2 - .5);

	        if (current < 0) {
	            current = count;
	        }
	        if (current > count) {
	            current = 0;
	        }

	        //end block

	        sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
	        var onscreen = sync2.find('.owl-item.active').length - 1;
	        var start = sync2.find('.owl-item.active').first().index();
	        var end = sync2.find('.owl-item.active').last().index();

	        if (current > end) {
	            sync2.data('owl.carousel').to(current, 100, true);
	        }
	        if (current < start) {
	            sync2.data('owl.carousel').to(current - onscreen, 100, true);
	        }
	    }

	    function syncPosition2(el) {
	        if (syncedSecondary) {
	            var number = el.item.index;
	            sync1.data('owl.carousel').to(number, 100, true);
	        }
	    }

	    sync2.on("click", ".owl-item", function (e) {
	        e.preventDefault();
	        var number = $(this).index();
	        sync1.data('owl.carousel').to(number, 300, true);
	    });

	    // Возвращаем объект (публичные методы)
	    return {
	        init: init
	    };
	}();

	// Вызов модуля
	myModale.init();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2MWY2ZjEzOTE1Y2RhMmRiZDMzNyIsIndlYnBhY2s6Ly8vYXBwL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9hcHAvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjFmNmYxMzkxNWNkYTJkYmQzMzciLCIvLyDQntCx0YrRj9Cy0LvQtdC90LjQtSDQvNC+0LTRg9C70Y9cclxudmFyIG15TW9kYWxlID0gKCgpID0+IHtcclxuXHJcbiAgICAvLyDQmNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdGCINC90LDRiCDQvNC+0LTRg9C70YxcclxuICAgIGxldCBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIF9zZXRVcExpc3RuZXJzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBfc2V0VXBMaXN0bmVycyA9ICgpID0+IHtcclxuICAgICAgICAkKCcjbG9hZF9fcG9wVXAnKS5vbignY2xpY2snLCBfc2hvd01vZGFsKTsgLy/QvtGC0LrRgNC40YLRi9C1INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwXHJcbiAgICAgICAgJCgnI2Nsb3NlX19wb3B1cCcpLm9uKCdjbGljaycsIF9jbG9zZU1vZGFsKTsgLy/Qt9Cw0LrRgNGL0YLQuNC1INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvL9GA0LDQsdC+0YLQsNC10YIg0YEg0LzQvtC00LDQu9GM0L3Ri9C8INC+0LrQvdC+0LxcclxuICAgIGxldCBfc2hvd01vZGFsID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9C+0YLQutGA0YvRgtC40LUg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LAnKTtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkKCcuYmxvY2tfX21vZGFsJykudG9nZ2xlQ2xhc3MoJ2ZsZXgnKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIC8vINC30LDQutGA0YvRgtC40LUg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LBcclxuICAgIGxldCBfY2xvc2VNb2RhbCA9IGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQl9Cw0LrRgNGL0YLQuNC1INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwJyk7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgJCgnLmJsb2NrX19tb2RhbCcpLnJlbW92ZUNsYXNzKCdmbGV4Jyk7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gT1dMINGB0LrRgNC40YLQv9GCINC00LvRjyDRgNCw0LHQvtGC0Ysg0YHQviDRgdC70LDQudC00LXRgNC+0LxcclxuICAgIC8vPT09PT09PT09PT09PT09IFxyXG4gICAgbGV0IHN5bmMxID0gJCgnI3N5bmMxJyk7XHJcbiAgICBsZXQgc3luYzIgPSAkKCcjc3luYzInKTtcclxuICAgIGxldCBzbGlkZXNQZXJQYWdlID0gNDsgLy9nbG9iYWx5IGRlZmluZSBudW1iZXIgb2YgZWxlbWVudHMgcGVyIHBhZ2VcclxuICAgIGxldCBzeW5jZWRTZWNvbmRhcnkgPSB0cnVlO1xyXG5cclxuICAgIHN5bmMxLm93bENhcm91c2VsKHtcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlU3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBtYXJnaW46IDEwLFxyXG4gICAgfSlcclxuXHJcbiAgICBzeW5jMi5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICB9KVxyXG5cclxuICAgIHN5bmMyXHJcbiAgICAgICAgLm9uKCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN5bmMyLmZpbmQoXCIub3dsLWl0ZW1cIikuZXEoMCkuYWRkQ2xhc3MoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbXM6IHNsaWRlc1BlclBhZ2UsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgICAgc21hcnRTcGVlZDogMjAwLFxyXG4gICAgICAgICAgICBzbGlkZVNwZWVkOiA1MDAsXHJcbiAgICAgICAgICAgIHNsaWRlQnk6IHNsaWRlc1BlclBhZ2UsIC8vYWx0ZXJuYXRpdmVseSB5b3UgY2FuIHNsaWRlIGJ5IDEsIHRoaXMgd2F5IHRoZSBhY3RpdmUgc2xpZGUgd2lsbCBzdGljayB0byB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgc2Vjb25kIGNhcm91c2VsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmVSZWZyZXNoUmF0ZTogMTAwXHJcbiAgICAgICAgfSkub24oJ2NoYW5nZWQub3dsLmNhcm91c2VsJywgc3luY1Bvc2l0aW9uMik7XHJcblxyXG4gICAgZnVuY3Rpb24gc3luY1Bvc2l0aW9uKGVsKSB7XHJcbiAgICAgICAgLy9pZiB5b3Ugc2V0IGxvb3AgdG8gZmFsc2UsIHlvdSBoYXZlIHRvIHJlc3RvcmUgdGhpcyBuZXh0IGxpbmVcclxuICAgICAgICAvL3ZhciBjdXJyZW50ID0gZWwuaXRlbS5pbmRleDtcclxuXHJcbiAgICAgICAgLy9pZiB5b3UgZGlzYWJsZSBsb29wIHlvdSBoYXZlIHRvIGNvbW1lbnQgdGhpcyBibG9ja1xyXG4gICAgICAgIHZhciBjb3VudCA9IGVsLml0ZW0uY291bnQgLSAxO1xyXG4gICAgICAgIHZhciBjdXJyZW50ID0gTWF0aC5yb3VuZChlbC5pdGVtLmluZGV4IC0gKGVsLml0ZW0uY291bnQgLyAyKSAtIC41KTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnQgPiBjb3VudCnCoCB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9lbmQgYmxvY2tcclxuXHJcbiAgICAgICAgc3luYzJcclxuICAgICAgICAgICAgLmZpbmQoXCIub3dsLWl0ZW1cIilcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiY3VycmVudFwiKVxyXG4gICAgICAgICAgICAuZXEoY3VycmVudClcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwiY3VycmVudFwiKTtcclxuICAgICAgICB2YXIgb25zY3JlZW4gPSBzeW5jMi5maW5kKCcub3dsLWl0ZW0uYWN0aXZlJykubGVuZ3RoIC0gMTtcclxuICAgICAgICB2YXIgc3RhcnQgPSBzeW5jMi5maW5kKCcub3dsLWl0ZW0uYWN0aXZlJykuZmlyc3QoKS5pbmRleCgpO1xyXG4gICAgICAgIHZhciBlbmQgPSBzeW5jMi5maW5kKCcub3dsLWl0ZW0uYWN0aXZlJykubGFzdCgpLmluZGV4KCk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50ID4gZW5kKSB7XHJcbiAgICAgICAgICAgIHN5bmMyLmRhdGEoJ293bC5jYXJvdXNlbCcpLnRvKGN1cnJlbnQsIDEwMCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50IDwgc3RhcnQpIHtcclxuICAgICAgICAgICAgc3luYzIuZGF0YSgnb3dsLmNhcm91c2VsJykudG8oY3VycmVudCAtIG9uc2NyZWVuLCAxMDAsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzeW5jUG9zaXRpb24yKGVsKSB7XHJcbiAgICAgICAgaWYgKHN5bmNlZFNlY29uZGFyeSkge1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyID0gZWwuaXRlbS5pbmRleDtcclxuICAgICAgICAgICAgc3luYzEuZGF0YSgnb3dsLmNhcm91c2VsJykudG8obnVtYmVyLCAxMDAsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzeW5jMi5vbihcImNsaWNrXCIsIFwiLm93bC1pdGVtXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBudW1iZXIgPSAkKHRoaXMpLmluZGV4KCk7XHJcbiAgICAgICAgc3luYzEuZGF0YSgnb3dsLmNhcm91c2VsJykudG8obnVtYmVyLCAzMDAsIHRydWUpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyDQktC+0LfQstGA0LDRidCw0LXQvCDQvtCx0YrQtdC60YIgKNC/0YPQsdC70LjRh9C90YvQtSDQvNC10YLQvtC00YspXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGluaXRcclxuICAgIH07XHJcblxyXG59KSgpO1xyXG5cclxuLy8g0JLRi9C30L7QsiDQvNC+0LTRg9C70Y9cclxubXlNb2RhbGUuaW5pdCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvanMvbWFpbi5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9
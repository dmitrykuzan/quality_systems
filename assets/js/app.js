$('.header__menu-wrap')


//плавный скролл по сайту

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("#header__menu-click").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("#calculation").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});


//Табы 
$('.stage__content').eq(0).attr('style','');

$('.stage__tabs-item').on('click', function(e) {
    e.preventDefault();
    if(!$(this).hasClass('active')){
        $('.stage__tabs-item').removeClass('active');
        $(this).addClass('active');
        let index = $(this).index();
        $('.stage__content').hide();
        $('.stage__content').eq(index).fadeIn();
    } 
});
//Табы

//Слайдер с доками

const workSlider = new Swiper('.work__slider', {
    slidesPerView: 1,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: ".work__arrow-next",
        prevEl: ".work__arrow-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});


//Слайдер с клиентами

const helpSlider = new Swiper('.help__slider', {
    slidesPerView: 1,
    navigation: {
        nextEl: ".help__button-next",
        prevEl: ".help__button-prev",
      },
      pagination: {
        el: ".help__pagination",
        clickable: true,
      },
});


//модалка обратный звонок

    $('.call-back').on('click',function(e){
        e.preventDefault();
        $('.call').fadeIn();
    });
    $('.call__close').on('click',function(){
        $('.call').fadeOut();
    });

//модалка получить консультацию

$('.consult-open').on('click',function(e){
    e.preventDefault();
    $('.call-consult').fadeIn();
});
$('.call__close').on('click',function(){
    $('.call-consult').fadeOut();
});

//Клики по айтемам в форме
$('.calc__social-item').on('click',function(e){
    e.preventDefault();
    $('.calc__social-item').removeClass('active');
    $(this).addClass('active');
});

$('.count__end-item').on('click',function(e){
    e.preventDefault();
    $('.count__end-item').removeClass('active');
    $(this).addClass('active');
});

//модалка получить брошюру

$('.get__item').on('click',function(e){
    e.preventDefault();
    $('.get__item').removeClass('active');
    $(this).addClass('active');
});

$('.get-open').on('click',function(e){
    e.preventDefault();
    $('.get').fadeIn();
});
$('.get__close').on('click',function(){
    $('.get').fadeOut();
});

//Модалка получить кейс
$('.case-open').on('click',function(e){
    e.preventDefault();
    $('.get__case').fadeIn();
});
$('.get__close').on('click',function(){
    $('.get__case').fadeOut();
});

//Модалка получить консультацию эксперта

$('.expert-modal').on('click',function(e){
    e.preventDefault();
    $('.expert').fadeIn();
});
$('.expert__close').on('click',function(){
    $('.expert').fadeOut();
});

//Модалка сравнить результаты

$('.result-open').on('click',function(e){
    e.preventDefault();
    $('.result').fadeIn();
});
$('.result__close').on('click',function(){
    $('.result').fadeOut();
});

//Политика конфидециальности

$('.read-open').on('click',function(e){
    e.preventDefault();
    $('.read').fadeIn();
});
$('.read__close').on('click',function(){
    $('.read').fadeOut();
});

//Читать дальше Слайдер
$('.more-open').on('click',function(e){
    e.preventDefault();
    $('.more').fadeIn();
});
$('.more__close').on('click',function(){
    $('.more').fadeOut();
});

//accordeon

    $(".benefit__info-js").hide().prev().click(function() {
        if($(window).width() <= 934) {
            $(this).parents(".benefit__item-js").find(".benefit__info-js").not(this).slideUp().prev().removeClass("active");
            $(this).next().not(":visible").slideDown().prev().addClass("active");
        } 
    });




//Menu

$('.header__burger').click(function(e) {
    e.preventDefault();
    $('.header__menu-wrap').toggleClass('active');
});

//Увеличение картинок

const lightbox = GLightbox({
    touchNavigation: true
});




//Lazy

/*! Lazy Load XT v1.1.0 2016-01-12
 * http://ressio.github.io/lazy-load-xt
 * (C) 2016 RESS.io
 * Licensed under MIT */

(function ($, window, document, undefined) {
    // options
    var lazyLoadXT = 'lazyLoadXT',
        dataLazied = 'lazied',
        load_error = 'load error',
        classLazyHidden = 'lazy-hidden',
        docElement = document.documentElement || document.body,
    //  force load all images in Opera Mini and some mobile browsers without scroll event or getBoundingClientRect()
        forceLoad = (window.onscroll === undefined || !!window.operamini || !docElement.getBoundingClientRect),
        options = {
            autoInit: true, // auto initialize in $.ready
            selector: 'img[data-src]', // selector for lazyloading elements
            blankImage: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            throttle: 99, // interval (ms) for changes check
            forceLoad: forceLoad, // force auto load all images

            loadEvent: 'pageshow', // check AJAX-loaded content in jQueryMobile
            updateEvent: 'load orientationchange resize scroll touchmove focus', // page-modified events
            forceEvent: 'lazyloadall', // force loading of all elements

            //onstart: null,
            oninit: {removeClass: 'lazy'}, // init handler
            onshow: {addClass: classLazyHidden}, // start loading handler
            onload: {removeClass: classLazyHidden, addClass: 'lazy-loaded'}, // load success handler
            onerror: {removeClass: classLazyHidden}, // error handler
            //oncomplete: null, // complete handler

            //scrollContainer: undefined,
            checkDuplicates: true
        },
        elementOptions = {
            srcAttr: 'data-src',
            edgeX: 0,
            edgeY: 0,
            visibleOnly: true
        },
        $window = $(window),
        $isFunction = $.isFunction,
        $extend = $.extend,
        $data = $.data || function (el, name) {
            return $(el).data(name);
        },
        elements = [],
        topLazy = 0,
    /*
     waitingMode=0 : no setTimeout
     waitingMode=1 : setTimeout, no deferred events
     waitingMode=2 : setTimeout, deferred events
     */
        waitingMode = 0;

    $[lazyLoadXT] = $extend(options, elementOptions, $[lazyLoadXT]);

    /**
     * Return options.prop if obj.prop is undefined, otherwise return obj.prop
     * @param {*} obj
     * @param {*} prop
     * @returns *
     */
    function getOrDef(obj, prop) {
        return obj[prop] === undefined ? options[prop] : obj[prop];
    }

    /**
     * @returns {number}
     */
    function scrollTop() {
        var scroll = window.pageYOffset;
        return (scroll === undefined) ? docElement.scrollTop : scroll;
    }

    /**
     * Add new elements to lazy-load list:
     * $(elements).lazyLoadXT() or $(window).lazyLoadXT()
     *
     * @param {object} [overrides] override global options
     */
    $.fn[lazyLoadXT] = function (overrides) {
        overrides = overrides || {};

        var blankImage = getOrDef(overrides, 'blankImage'),
            checkDuplicates = getOrDef(overrides, 'checkDuplicates'),
            scrollContainer = getOrDef(overrides, 'scrollContainer'),
            forceShow = getOrDef(overrides, 'show'),
            elementOptionsOverrides = {},
            prop;

        // empty overrides.scrollContainer is supported by both jQuery and Zepto
        $(scrollContainer).on('scroll', queueCheckLazyElements);

        for (prop in elementOptions) {
            elementOptionsOverrides[prop] = getOrDef(overrides, prop);
        }

        return this.each(function (index, el) {
            if (el === window) {
                $(options.selector).lazyLoadXT(overrides);
            } else {
                var duplicate = checkDuplicates && $data(el, dataLazied),
                    $el = $(el).data(dataLazied, forceShow ? -1 : 1);

                // prevent duplicates
                if (duplicate) {
                    queueCheckLazyElements();
                    return;
                }

                if (blankImage && el.tagName === 'IMG' && !el.src) {
                    el.src = blankImage;
                }

                // clone elementOptionsOverrides object
                $el[lazyLoadXT] = $extend({}, elementOptionsOverrides);

                triggerEvent('init', $el);

                elements.push($el);
                queueCheckLazyElements();
            }
        });
    };


    /**
     * Process function/object event handler
     * @param {string} event suffix
     * @param {jQuery} $el
     */
    function triggerEvent(event, $el) {
        var handler = options['on' + event];
        if (handler) {
            if ($isFunction(handler)) {
                handler.call($el[0]);
            } else {
                if (handler.addClass) {
                    $el.addClass(handler.addClass);
                }
                if (handler.removeClass) {
                    $el.removeClass(handler.removeClass);
                }
            }
        }

        $el.trigger('lazy' + event, [$el]);

        // queue next check as images may be resized after loading of actual file
        queueCheckLazyElements();
    }


    /**
     * Trigger onload/onerror handler
     * @param {Event} e
     */
    function triggerLoadOrError(e) {
        triggerEvent(e.type, $(this).off(load_error, triggerLoadOrError));
    }


    /**
     * Load visible elements
     * @param {bool} [force] loading of all elements
     */
    function checkLazyElements(force) {
        if (!elements.length) {
            return;
        }

        force = force || options.forceLoad;

        topLazy = Infinity;

        var viewportTop = scrollTop(),
            viewportHeight = window.innerHeight || docElement.clientHeight,
            viewportWidth = window.innerWidth || docElement.clientWidth,
            i,
            length;

        for (i = 0, length = elements.length; i < length; i++) {
            var $el = elements[i],
                el = $el[0],
                objData = $el[lazyLoadXT],
                removeNode = false,
                visible = force || $data(el, dataLazied) < 0,
                topEdge;

            // remove items that are not in DOM
            if (!$.contains(docElement, el)) {
                removeNode = true;
            } else if (force || !objData.visibleOnly || el.offsetWidth || el.offsetHeight) {

                if (!visible) {
                    var elPos = el.getBoundingClientRect(),
                        edgeX = objData.edgeX,
                        edgeY = objData.edgeY;

                    topEdge = (elPos.top + viewportTop - edgeY) - viewportHeight;

                    visible = (topEdge <= viewportTop && elPos.bottom > -edgeY &&
                        elPos.left <= viewportWidth + edgeX && elPos.right > -edgeX);
                }

                if (visible) {
                    $el.on(load_error, triggerLoadOrError);

                    triggerEvent('show', $el);

                    var srcAttr = objData.srcAttr,
                        src = $isFunction(srcAttr) ? srcAttr($el) : el.getAttribute(srcAttr);

                    if (src) {
                        el.src = src;
                    }

                    removeNode = true;
                } else {
                    if (topEdge < topLazy) {
                        topLazy = topEdge;
                    }
                }
            }

            if (removeNode) {
                $data(el, dataLazied, 0);
                elements.splice(i--, 1);
                length--;
            }
        }

        if (!length) {
            triggerEvent('complete', $(docElement));
        }
    }


    /**
     * Run check of lazy elements after timeout
     */
    function timeoutLazyElements() {
        if (waitingMode > 1) {
            waitingMode = 1;
            checkLazyElements();
            setTimeout(timeoutLazyElements, options.throttle);
        } else {
            waitingMode = 0;
        }
    }


    /**
     * Queue check of lazy elements because of event e
     * @param {Event} [e]
     */
    function queueCheckLazyElements(e) {
        if (!elements.length) {
            return;
        }

        // fast check for scroll event without new visible elements
        if (e && e.type === 'scroll' && e.currentTarget === window) {
            if (topLazy >= scrollTop()) {
                return;
            }
        }

        if (!waitingMode) {
            setTimeout(timeoutLazyElements, 0);
        }
        waitingMode = 2;
    }


    /**
     * Initialize list of hidden elements
     */
    function initLazyElements() {
        $window.lazyLoadXT();
    }


    /**
     * Loading of all elements
     */
    function forceLoadAll() {
        checkLazyElements(true);
    }


    /**
     * Initialization
     */
    $(document).ready(function () {
        triggerEvent('start', $window);

        $window
            .on(options.updateEvent, queueCheckLazyElements)
            .on(options.forceEvent, forceLoadAll);

        $(document).on(options.updateEvent, queueCheckLazyElements);

        if (options.autoInit) {
            $window.on(options.loadEvent, initLazyElements);
            initLazyElements(); // standard initialization
        }
    });

})(window.jQuery || window.Zepto || window.$, window, document);
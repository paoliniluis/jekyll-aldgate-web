function include(url) {
    document.write('<script src="' + url + '"></script>');
    return false;
}

/* cookie.JS
 ========================================================*/
include('assets/js/jquery.cookie.js');


/* DEVICE.JS
 ========================================================*/
include('assets/js/device.min.js');

/* Stick up menu
 ========================================================*/
include('assets/js/tmstickup.js');
$(window).load(function () {
    if ($('html').hasClass('desktop')) {
        $('#stuck_container').TMStickUp({
        })
    }
});


/* Stellar.js
 ========================================================*/
include('assets/js/stellar/jquery.stellar.js');
$(document).ready(function() {
    if ($('html').hasClass('desktop')) {
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 20
        });
    }
});

/* Easing library
 ========================================================*/
include('assets/js/jquery.easing.1.3.js');

/* ToTop
 ========================================================*/
include('assets/js/jquery.ui.totop.js');
$(function () {
    $().UItoTop({ easingType: 'easeOutQuart' });
});


/* DEVICE.JS AND SMOOTH SCROLLIG
 ========================================================*/
include('assets/js/jquery.mousewheel.min.js');
include('assets/js/jquery.simplr.smoothscroll.min.js');
$(function () {
    if ($('html').hasClass('desktop')) {
        $.srSmoothscroll({
            step: 150,
            speed: 800
        });
    }
});

/* Copyright Year
 ========================================================*/
var currentYear = (new Date).getFullYear();
$(document).ready(function () {
    $("#copyright-year").text((new Date).getFullYear());
});


/* Superfish menu
 ========================================================*/
include('assets/js/superfish.js');
include('assets/js/jquery.mobilemenu.js');

/* Unveil
 ========================================================*/
include('assets/js/jquery.unveil.js');
$(document).ready(function () {
    $('img').unveil(0, function () {
        $(this).load(function () {
            $(this).addClass("js-unveil");
        });
    });
});

/* Orientation tablet fix
 ========================================================*/
$(function () {
// IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menu li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">')

$(document).ready(function () {
    var obj;
    if ((obj = $('#owl')).length > 0) {
        obj.owlCarousel({
            navigation: false,
            autoPlay: true,
            slideSpeed: 300,
            pagination: true,
            stopOnHover: true,
            paginationSpeed: 400,
            singleItem: true,
            navigationText: ["", ""]
        })
    }

    if ((obj = $('#owl2')).length > 0) {
        obj.owlCarousel({
            navigation: true,
            autoPlay: true,
            slideSpeed: 300,
            pagination: false,
            stopOnHover: true,
            paginationSpeed: 400,
            singleItem: true,
            navigationText: ["", ""]
        })
    }

    if ((obj = $('#camera')).length > 0) {
        obj.camera({
            height: '49.25%',
            minHeight: '200px',
            pagination: false,
            thumbnails: false,
            playPause: false,
            hover: false,
            loader: 'none',
            navigation: true,
            navigationHover: false,
            mobileNavHover: false,
            fx: 'simpleFade'
        })
    }

    if ((obj = $('#accordion')).length > 0) {
        obj.accordion({
            heightStyle: "content"
        });
    }

    if ((obj = $('a[data-type="videobox"]')).length > 0) {
        obj.fancybox()
            .attr('rel', 'media-gallery')
            .fancybox({
                openEffect: 'none',
                closeEffect: 'none',
                prevEffect: 'none',
                nextEffect: 'none',

                arrows: false,
                helpers: {
                    media: {},
                    buttons: {}
                }
            });
    }

    if ((obj = $('a[data-type="lightbox"]')).length > 0) {
        obj.touchTouch();
    }
});

$(function () {
    'use strict';
    var windo = $(window);

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500, 'easeInOutCubic');
                return false;
            }
        }
    });

    // this is for back to top and sticky menu js
    var bc2top = $('.back-top-btn');
    bc2top.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 1000);
    });

    windo.on('scroll', function () {
        var scrollPos = windo.scrollTop();
        var scrolling = $(this).scrollTop();
        if (scrollPos > 150) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(1000);
        }

        if (scrolling >= 100) {
            $('.sticky-top').addClass('navcss');
        } else {
            $('.sticky-top').removeClass('navcss');
        }
    });


    windo.on('load', function () {
        $('.preloader').delay(2000).fadeOut();
    });

    // Browse all js
    $(".images-item").slice(0, 4).show();
    $(".browse-all").on('click', function (e) {
        e.preventDefault();
        $(".images-item:hidden").slice(0, 4).slideDown(500);
        if ($(".images-item:hidden").length == 0) {
            $(".browse-all").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top - 85
        }, 1500);
    });

    // Countdown Timer js
    var targetDate = new Date("2017/12/25 00:00:00");
    var days;
    var hrs;
    var min;
    var sec;


    timeToLaunch();
    numberTransition('#days .number', days, 1000, 'easeOutQuad');
    numberTransition('#hours .number', hrs, 1000, 'easeOutQuad');
    numberTransition('#minutes .number', min, 1000, 'easeOutQuad');
    numberTransition('#seconds .number', sec, 1000, 'easeOutQuad');
    setTimeout(countDownTimer, 1001);

    function timeToLaunch() {
        var currentDate = new Date();
        var diff = (currentDate - targetDate) / 1000;
        var diff = Math.abs(Math.floor(diff));

        days = Math.floor(diff / (24 * 60 * 60));
        sec = diff - days * 24 * 60 * 60;
        hrs = Math.floor(sec / (60 * 60));
        sec = sec - hrs * 60 * 60;
        min = Math.floor(sec / (60));
        sec = sec - min * 60;
    }

    function countDownTimer() {
        timeToLaunch();
        $("#days .number").text(days);
        $("#hours .number").text(hrs);
        $("#minutes .number").text(min);
        $("#seconds .number").text(sec);
        setTimeout(countDownTimer, 1000);
    }

    function numberTransition(id, endPoint, transitionDuration, transitionEase) {
        $({
            numberCount: $(id).text()
        }).animate({
            numberCount: endPoint
        }, {
            duration: transitionDuration,
            easing: transitionEase,
            step: function () {
                $(id).text(Math.floor(this.numberCount));
            },
            complete: function () {
                $(id).text(this.numberCount);
            }
        });
    };

});
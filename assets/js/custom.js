/*==========

Template Name: Restaurant

==========*/

/*====================
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.WOW Js 
3.Header Sticky Js
4.ScrollToTop Js
5.Toogle Menu Mobile Js
6.Typed Script
7.custom cursor Script
8.Pagescroll Script
====================*/



jQuery(document).ready(function($) {
    // Whole Script Strict Mode Syntax
    "use strict";
    var window_size = jQuery(window).width();

    // WOW Js Start
    new WOW().init();
    // WOW Js End

    // Header Sticky Start
    jQuery(window).on('scroll', function() {
        var height = jQuery(window).scrollTop();
        if (height > 100) {
            jQuery(".site-header").addClass("sticky-header");
        } else {
            jQuery(".site-header").removeClass("sticky-header");
        }
    });
    // Header Sticky End


    // ScrollToTop Start
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#scrollToTop').fadeIn();
        } else {
            jQuery('#scrollToTop').fadeOut();
        }
    });

    jQuery('#scrollToTop').on('click', function() {
        jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    // SscrollToTop End

    // Toogle Menu Mobile JS Start
    $(".menu-toggle").on('click', function() {
        $(".main-navigation").toggleClass("toggled");
    })

    if (window_size <= 991) {
        jQuery('#menu_call').on('click', function() {
            jQuery('#site-navigation').removeClass('toggled');
        });

        jQuery('#menu_quote').on('click', function() {
            jQuery('#site-navigation').removeClass('toggled');
        });
    }
    // Toogle Menu Mobile JS End
});

// Typed Js
var typed = new Typed(".type", {
    strings: ["modern Restaurant", "modern Staff"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: !0
});

// custom cursor Script
var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: !0,
    cursorEnlarged: !1,
    $dot: document.querySelector(".cursor-dot"),
    $outline: document.querySelector(".cursor-dot-outline"),
    init: function() {
        this.dotSize = this.$dot.offsetWidth, this.outlineSize = this.$outline.offsetWidth, this.setupEventListeners(), this.animateDotOutline()
    },
    setupEventListeners: function() {
        var e = this;
        document.querySelectorAll("a").forEach(function(t) {
            t.addEventListener("mouseover", function() {
                e.cursorEnlarged = !0, e.toggleCursorSize()
            }), t.addEventListener("mouseout", function() {
                e.cursorEnlarged = !1, e.toggleCursorSize()
            })
        }), document.addEventListener("mousedown", function() {
            e.cursorEnlarged = !0, e.toggleCursorSize()
        }), document.addEventListener("mouseup", function() {
            e.cursorEnlarged = !1, e.toggleCursorSize()
        }), document.addEventListener("mousemove", function(t) {
            e.cursorVisible = !0, e.toggleCursorVisibility(), e.endX = t.pageX, e.endY = t.pageY, e.$dot.style.top = e.endY + "px", e.$dot.style.left = e.endX + "px"
        }), document.addEventListener("mouseenter", function(t) {
            e.cursorVisible = !0, e.toggleCursorVisibility(), e.$dot.style.opacity = 1, e.$outline.style.opacity = 1
        }), document.addEventListener("mouseleave", function(t) {
            e.cursorVisible = !0, e.toggleCursorVisibility(), e.$dot.style.opacity = 0, e.$outline.style.opacity = 0
        })
    },
    animateDotOutline: function() {
        var e = this;
        e._x += (e.endX - e._x) / e.delay, e._y += (e.endY - e._y) / e.delay, e.$outline.style.top = e._y + "px", e.$outline.style.left = e._x + "px", requestAnimationFrame(this.animateDotOutline.bind(e))
    },
    toggleCursorSize: function() {
        var e = this;
        e.cursorEnlarged ? (e.$dot.style.transform = "translate(-50%, -50%) scale(1)", e.$outline.style.transform = "translate(-50%, -50%) scale(0)") : (e.$dot.style.transform = "translate(-50%, -50%) scale(1)", e.$outline.style.transform = "translate(-50%, -50%) scale(1)")
    },
    toggleCursorVisibility: function() {
        var e = this;
        e.cursorVisible ? (e.$dot.style.opacity = 1, e.$outline.style.opacity = 1) : (e.$dot.style.opacity = 0, e.$outline.style.opacity = 0)
    }
};
cursor.init();

// pagescroll
jQuery(".menu-menu-1-container li a").click(function() {
    jQuery(".main-navigation").removeClass("toggled");
});

$(".menu.nav-menu li a").on('click', function(e) {
    e.preventDefault();
    var position = $($(this).attr("href")).offset().top - 120;
    $("body, html").animate({
        scrollTop: position
    }, 1000);
});
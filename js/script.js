
$(function(){

    var $container = $('.grid');

    $container.imagesLoaded( function(){
        $container.masonry({
            itemSelector : 'li'
        });
    });

    //open up to a specific project using a hash value with the project name:
    if (window.location.hash && $('a.project[href$="'+window.location.hash.slice(1)+'"]').length > -1){
        var $link = $('a.project[href$="'+window.location.hash.slice(1)+'"]');
        var href = $link.attr('href');
        $('a[href="#portfolio"]').trigger('click');
        $('a[href="'+href+'"]').fancybox().trigger('click');
    }

    $(".modal").fancybox({
        maxWidth	  : '95%',
        maxHeight  : '95%',
        fitToView	: true,
        width		  : '95%',
        height		  : '95%',
        autoSize	  : false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect: 'none'
    });



// niceScroll
    $("html").niceScroll();


// Stick menu
    $(".menu").sticky({topSpacing: 0});

// Menu Scroll to content and Active menu
    var lastId,
        topMenu = $("#menu"),
        topMenuHeight = topMenu.outerHeight() + 145,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    $('a[href*=#]').bind('click', function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        var scrollTo = $(target).offset().top + 20;
        console.log(scrollTo);
        $('html, body').stop().animate({scrollTop: scrollTo}, 200, function () {
        });

        return false;
    });

    $(window).scroll(function () {
        var fromTop = $(this).scrollTop() + topMenuHeight;
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });

        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active")
                .end().filter("[href=#" + id + "]").parent().addClass("active");
        }
    });


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        $(".footer").css("position", "relative");
        $(".contact").css("marginBottom", "0");

    }


//Menu mobile click
    $(".icon").click(function () {
        $(" ul.menu-click").slideToggle("slow", function () {
            // Animation complete.
        });
    });


    $(window).load(function () {

        $(".preloader").fadeOut("fast");

        if ($('.parallax-background').length) {
            $(".parallax-background").parallax();
        }

        if ($('.parallax-background-partners').length) {
            $(".parallax-background-partners").parallax();
        }

    });


});

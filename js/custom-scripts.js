$(document).ready(function () {

    $('.see-more span').click(function () {
        $(this).parent().find('span').toggleClass('active');
        $(this).parent().toggleClass('opened');
        if($(this).hasClass('to-open')){
            $(this).parents('.programs').find('.openable').slideDown(600);
         } else {
            $(this).parents('.programs').find('.openable').slideUp(0);
         }
    });

    /** sliders **/

    $('.slider').slick({

        appendArrows: '.slider-control',
        prevArrow: '.left-control',
        nextArrow: '.right-control',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]

    });

    $('.reviews-slider').slick({

        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000

    });

    /** end of sliders **/

    if ($(window).width() < '1024'){
        $('.parallax-block').detach();
    }

    $(window).resize(function(){
        if ($(window).width() < '1024'){
            $('.parallax-block').detach();
        }
    });

});

$(document).ready(function () {

    /** sliders **/

    $('.slider').slick({

        appendArrows: '.slider-control',
        prevArrow: '.left-control',
        nextArrow: '.right-control'

    });

    $('.reviews-slider').slick({

        arrows: false

    });

    /** end of sliders **/

    $('.see-more span').click(function () {
        $(this).parent().find('span').toggleClass('active');
        $(this).parents('.programs').find('.openable').slideToggle();
        $(this).parent().toggleClass('opened');
    });

});

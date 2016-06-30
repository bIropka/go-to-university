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

    $(function($) {
        $('#inline-form').validatr({
            showall: true,
            valid: submitInlineForm
        });
    });

    function submitInlineForm() {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        var scriptFile;
        if (formID == 'inline-form') scriptFile = 'mail-1.php';
        if (formID == 'callback-form') scriptFile = 'mail-2.php';
        $.ajax({
            type: "POST",
            url: scriptFile,
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                if (formID == 'inline-form') {
                    $('.inline-success-block').fadeIn();
                } else if (formID == 'callback-form') {
                    $('.callback-success-block').fadeIn();
                }
            },
            error: function (jqXHR, text, error) {}
        });
        return false;
    }

    $(function($) {
        $('#callback-form').validatr({
            showall: true,
            valid: submitCallbackForm
        });
    });

    function submitCallbackForm() {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        var scriptFile;
        if (formID == 'inline-form') scriptFile = 'mail-1.php';
        if (formID == 'callback-form') scriptFile = 'mail-2.php';
        $.ajax({
            type: "POST",
            url: scriptFile,
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                if (formID == 'inline-form') {
                    $('.inline-success-block').fadeIn();
                } else if (formID == 'callback-form') {
                    $('.callback-success-block').fadeIn();
                }
            },
            error: function (jqXHR, text, error) {}
        });
        return false;
    }

    $(function($){
        $('.user-phone').mask("+7(999) 999-99-99");
    });

    /** sliders **/

    $('.slider').slick({

        autoplay: true,
        autoplaySpeed: 3000,
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

    $('.closer').click(function() {
        $('.success-block').fadeOut();
    });

    $('.get-callback').click(function () {
        $('.window-callback').fadeIn();
    });

    $('.window-callback').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-callback')).length) $('.window-callback').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-callback').fadeOut();
    });

});

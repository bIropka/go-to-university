$(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        var scriptFile;
        if (formID == 'inline-form') scriptFile = 'mail-1.php';
        if (formID == 'form-2') scriptFile = 'mail-2.php';
        $.ajax({
            type: "POST",
            url: scriptFile,
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                if (formID == 'inline-form') {
                    $('.success-block').fadeIn();
                }
            },
            error: function (jqXHR, text, error) {}
        });
        return false;
    });
});
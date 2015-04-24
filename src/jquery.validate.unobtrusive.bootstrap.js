(function($) {
    var defaultOptions = {
        errorClass: 'has-error',
        validClass: 'has-success',

        highlight: function (element, errorClass, validClass) {
            var $formGroup = $(element).closest('.form-group');
            $formGroup.addClass(errorClass).removeClass(validClass);

            if ($formGroup.hasClass('has-feedback')) {
                $formGroup.find('.glyphicon').removeClass('glyphicon-ok').addClass('glyphicon-remove');
            }
        },
        unhighlight: function (element, errorClass, validClass) {
            var $formGroup = $(element).closest('.form-group');
            $formGroup.removeClass(errorClass).addClass(validClass);

            if ($formGroup.hasClass('has-feedback')) {
                $formGroup.find('.glyphicon').removeClass('glyphicon-remove').addClass('glyphicon-ok');
            }
        }
    };

    $.validator.setDefaults(defaultOptions);

    $.validator.unobtrusive.options = {
        errorClass: defaultOptions.errorClass,
        validClass: defaultOptions.validClass
    };

    $.validator.unobtrusive.reparse = $.validator.unobtrusive.reparse || function(formSelector) {
        var $form = $(formSelector).removeData('validator').removeData('unobtrusiveValidation');
        $.validator.unobtrusive.parse($form);
    };
}(window.jQuery));

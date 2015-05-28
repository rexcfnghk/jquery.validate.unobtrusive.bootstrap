(function($) {
    var defaultOptions = {
        errorClass: 'text-danger',
        validClass: 'text-success',
        
        highlight: function (element) {
            var $formGroup = $(element).closest('.form-group');
            $formGroup.addClass('has-error').removeClass('has-success');

            if ($formGroup.hasClass('has-feedback')) {
                $formGroup.find('.glyphicon').removeClass('glyphicon-ok').addClass('glyphicon-remove');
            }
        },
        unhighlight: function (element) {
            var $formGroup = $(element).closest('.form-group');
            $formGroup.addClass('has-success').removeClass('has-error');

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

define(['domReady', 'jquery', 'plugins/jquery.validate'], function(domReady, jQuery, validate) {


    domReady(function(){       
        $(".form-block--message").validate({
            submitHandler: function(form) {
                form.submit();
            }
        });
    });

});
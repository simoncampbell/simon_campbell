define(['domReady', 'jquery', 'plugins/jquery.validate'], function(domReady, jQuery, validate) {


    domReady(function(){       
        console.log('stuff');
        $(".form-block--message").validate({
            submitHandler: function(form) {
                form.submit();
            }
        });
    });

});
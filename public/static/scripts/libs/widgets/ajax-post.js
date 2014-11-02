define(['domReady', 'jquery', 'plugins/jquery.validate'], function(domReady, jQuery, validate) {


	domReady(function(){
		$('.js-ajax-post').submit(function(e) {
			e.preventDefault();
			// if ($('.form-block--message').valid()) {
				var data = $(this).serialize();
				$.post('/', data, function(response) {
					console.log(response);
					// if (response.success) {
					// 	$('.contact-form-thanks').fadeIn();
					// } else {
					// 	alert('An error occurred. Please try again.');
					// }
				});
				return false;
			// }
		});
	});

});
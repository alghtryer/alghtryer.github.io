$('#usr1').typeIt({
    strings: "Hi, I'm",
    typeSpeed: 100,
    autoStart: false,
    callback: function() {

        $('#usr1').find('.ti-cursor').addClass('is-hidden'); 
        $('#usr2').typeIt({
            strings: 'Alghtryer :)',
            typeSpeed: 100,
            autoStart: false,
            callback: function() {

                $('#usr2').find('.ti-cursor').addClass('is-hidden');
                $('#usr3').typeIt({
                    strings: 'A CODER',
                    typeSpeed: 100,
                    autoStart: false,
                    callback: function() {
                        $('.intro-social').show();
						notifyBar();
                    }
                });
            }
        });
    }
});

function copy(that){
	var inp =document.createElement('input');
	document.body.appendChild(inp);
	inp.value =that.textContent;
	inp.select();
	document.execCommand('copy',false);
	inp.remove();
}
function notifyBar() {
	if(! $('.alert-box').length) {
		$('<div class="alert-box success" ><i class="fa fa-info-circle"></i> Click on mail to copy!</div>').prependTo('#intro').delay(5000).fadeOut(1000, function() {
    				$('.alert-box').remove();
    				});
	}
}

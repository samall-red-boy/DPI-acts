$(document).ready(princ);

var contador = 1;
 

function princ(){
	$('.menubar').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});


	$('submenu').click(function(){
		$(this).children('.children').slideToggle;
	})

};

var main = function(){

	$('#nav-goals').click(function(){
		//e.preventDefault();
    	$('html,body').stop().animate({scrollTop:$('#goals').offset().top-50}, "slow");
		//alert("asdasda");
	});

	$('#nav-portfolio').click(function(){
		//e.preventDefault();
		$('html,body').stop().animate({scrollTop:$('#portfolio').offset().top-50}, "slow");
		//alert("asdasda");
	});
	
	$('#nav-parceiros').click(function(){
		//e.preventDefault();
		$('html,body').stop().animate({scrollTop:$('#parceiros').offset().top-50}, "slow");
		//alert("asdasda");
	});

	$('#nav-contact').click(function(){
		//e.preventDefault();
		$('html,body').stop().animate({scrollTop:$('#contact').offset().top-50}, "slow");
		//alert("asdasda");
	});
	

	$('a.scrollto').click(function(e){
		$('html,body').scrollTo(this.hash, this.hash, {gap:{y:-80},animation:  {easing: 'easeInOutCubic', duration: 1600}});
		e.preventDefault();

		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});
};

$(document).ready(main);
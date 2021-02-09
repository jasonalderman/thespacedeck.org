$(document).ready(function(){
	if (!$('html').hasClass('noflip')) {
		$('.card').each(function(){ 
			var $card = $(this);
			$card.find('a').eq(0).addClass('flippable');
			$card.append('<a class="permalink" href="'+$card.find('a.flippable').attr('href')+'"></a>');
		});
		$("body").on("click", "a.flippable", function(e){
			e.preventDefault;
			$(this).toggleClass("flip");
			return false;
		});	
	}
});
$(document).ready(function(){
	
	// advance with arrow key presses
	$(document).on("keydown", function(e){
		switch(e.which) {
			case 37: // left arrow
				var destination = $("#prevcard").attr('href');
				if (destination) window.location.href = destination;
				break;
			case 39: // right arrow
				var destination = $("#nextcard").attr('href');
				if (destination) window.location.href = destination;
				break;
		}
		return true;
	});
	
	// flip card
/*
	$("body").on("click", ".card>section", function(e){
		e.preventDefault;
		$(this).toggleClass("flip");
		return false;
	});
*/
})
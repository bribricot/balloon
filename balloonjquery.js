$(document).ready(function(){
	let element = $('#cercle');

	function size() {
		return parseInt(element.css("height"));
	}

	element.click(function(){
	// ou const size = size();
	// Colors changes : R -> B -> G -> R (rouge bleu vert)
		// console.log(element.css("background-color"))
		if (element.hasClass("redballoon")) {
		element.removeClass("redballoon").addClass("blueballoon");
		}
		else if (element.hasClass("blueballoon")) {
		element.removeClass("blueballoon").addClass("greenballoon");
		}
		else if (element.hasClass("greenballoon")) {
		element.removeClass("greenballoon").addClass("redballoon");
		}
	// Le ballon grandit de 10 pixels jusqu'à atteindre 420 pixels puis le ballon explose et revient à sa taille initiale
		if (size() < 420) {
			element.css("width", size() + 10);
			element.css("height", size() + 10);
		}
		else {
			element.css("width", "200px");
			element.css("height", "200px");
		} 
		if (size() == 425) {
			element.css("height", "200px");		
			element.css("width", "200px");		
		}
	});

	element.mouseleave(function(){
	// Reverse colors : G -> B -> R -> G (vert bleu rouge)
		if (element.hasClass("greenballoon")) {
		element.removeClass("greenballoon").addClass("blueballoon");
		}
		else if (element.hasClass("blueballoon")) {
		element.removeClass("blueballoon").addClass("redballoon");
		}
		else if (element.hasClass("redballoon")) {
		element.removeClass("redballoon").addClass("greenballoon");
		}
	// Le ballon diminue de 5px puis stagne à 200px puis reste immobilisé à 200px
		if (size() > 200) {
			element.css("width", size() - 5);
			element.css("height", size() - 5);
		}
		else {
			element.css("height", "200px");	
			element.css("width", "200px");
		}
	});
});
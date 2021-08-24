$(document).ready(function(){
	function size() {
		return parseInt($("#cercle").css("height"));
	}

	$("#cercle").click(function(){
	// Colors changes : R -> B -> G -> R (rouge bleu vert)
		if ($("#cercle").css("background-color") == "red")
			$("#cercle").css("background-color", "blue");
		else if ($("#cercle").css("background-color") == "blue")
			$("#cercle").css("background-color", "green");
		else
			$("#cercle").css("background-color", "red");
	// Le ballon grandit de 10 pixels jusqu'à atteindre 420 pixels puis le ballon explose et revient à sa taille initiale
		if (size() < 420) {
			$("#cercle").css("width", size() + 10);
			$("#cercle").css("height", size() + 10);
		}
		else {
			$("#cercle").css("width", "200px");
			$("#cercle").css("height", "200px");
		} 
		if (size() == 425) {
			$("#cercle").css("height", "200px");		
			$("#cercle").css("width", "200px");		
		}
	});

	$("#cercle").mouseleave(function(){
	// Reverse colors : G -> B -> R -> G (vert bleu rouge)
		if ($("#cercle").css("background-color") == "green")
			$("#cercle").css("background-color", "blue");
		else if ($("#cercle").css("background-color") == "blue")
			$("#cercle").css("background-color", "red");
		else
			$("#cercle").css("background-color", "green")
	// Le ballon diminue de 5px puis stagne à 200px puis reste immobilisé à 200px
		if (size() > 200) {
			$("#cercle").css("width", size() - 5);
			$("#cercle").css("height", size() - 5);
		}
		else {
			$("#cercle").css("height", "200px");	
			$("#cercle").css("width", "200px");
		}
	});
});
function Size() {
	return parseInt(document.getElementById("cercle").style.height);
}

function ChangeWithClick() {
	let element = document.getElementById("cercle");
// Colors changes : R -> B -> G -> R (rouge bleu vert)
	if (element.style.backgroundColor == "red")
		element.style.backgroundColor = "blue";
	else if (element.style.backgroundColor == "blue")
		element.style.backgroundColor = "green";
	else
		element.style.backgroundColor = "red";
// Le ballon grandit de 10 pixels jusqu'à atteindre 420 pixels puis le ballon explose et revient à sa taille initiale
	if (Size() < 420) {
		element.style.height = Size() + 10;
		element.style.width = Size() + 10;
	}
	else {
		element.style.height = "200px";
		element.style.width = "200px";
	}
	if (Size() == 425) {
		element.style.height = "200px";
		element.style.width = "200px";
	}
}

function mouseLeave() {
	let element = document.getElementById("cercle"); 
// Reverse colors : G -> B -> R -> G (vert bleu rouge)
	if (element.style.backgroundColor == "green")
		element.style.backgroundColor = "blue";
	else if (element.style.backgroundColor == "blue")
		element.style.backgroundColor = "red";
	else
		element.style.backgroundColor = "green";
// Le ballon diminue de 5px puis stagne à 200px puis reste immobilisé à 200px
	if (Size() > 200) {
		element.style.height = Size() - 5;
		element.style.width = Size() - 5;
	}
	else {
		element.style.height = "200px";
		element.style.width = "200px";
	}

}
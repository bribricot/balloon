function Height() {
	return parseInt(document.getElementById("cercle").style.height);
}
function Width() {
	return parseInt(document.getElementById("cercle").style.width);
}

function ChangeWithClick() {
	let element = document.getElementById("cercle");
// Colors changes : R -> B -> G -> R (rouge bleu vert)
	if (element.style.backgroundColor == "red")
		element.style.backgroundColor = "blue";
	else if (element.style.backgroundColor == "blue")
		element.style.backgroundColor = "green";
	else if (element.style.backgroundColor = "green")
		element.style.backgroundColor = "red";
// Le ballon grandit de 10 pixels jusqu'à atteindre 420 pixels puis le ballon explose et revient à sa taille initiale
	if (Height() < 420) 
		element.style.height = Height() + 10;
	else 
		element.style.height = "200px";
	if (Width() < 420)
		element.style.width = Width() + 10;
	else 
		element.style.width = "200px";
	if (Height() == 425)
		element.style.height = "200px";
	if (Width() == 425)
		element.style.width = "200px";
}

function mouseLeave() {
	let element = document.getElementById("cercle"); 
// Reverse colors : G -> B -> R -> G (vert bleu rouge)
	if (element.style.backgroundColor == "green")
		element.style.backgroundColor = "blue";
	else if (element.style.backgroundColor == "blue")
		element.style.backgroundColor = "red";
	else if (element.style.backgroundColor = "red")
		element.style.backgroundColor = "green";
// Le ballon diminue de 5px puis stagne à 200px puis reste immobilisé à 200px
	if (Height() > 200)
		element.style.height = Height() - 5;
	else 
		element.style.height = "200px";
	if (Width() > 200)
		element.style.width = Width() - 5;
	else 
		element.style.height = "200px";

}
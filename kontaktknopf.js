let buttonClick = event => {
	var x = document.getElementsByClassName("button");
	x[0].addEventListener("click", displayMessage());
	x[1].addEventListener("click", displayMessage());	// 3 verschiedene Button, die dasselbe machen
	x[2].addEventListener("click", displayMessage());

	function displayMessage() {
		document.getElementById("nachricht").innerHTML = "Vielen Dank, dass Sie mit mir Kontakt aufnehmen möchten.";
	}
}
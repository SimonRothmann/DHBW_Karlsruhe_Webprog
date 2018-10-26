
let pruefenFormular = event => {
    // Variablen für Ergebnis
    let form = event.target;
    let okay = true;
    let anzeige = "";
	
    if (form.vorname.value == "") {
        okay = false;
        anzeige += "Bitte geben Sie Ihren Vornamen ein. <br />";
    }

    if (form.nachname.value == "") {
        okay = false;
        anzeige += "Bitte geben Sie Ihren Nachnamen ein. <br />";
    }
	
    // regular expression zum prüfen der E-Mail --> dass ein @ und .de o.ä. drin ist
	function pruefenEmail(check) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(check).toLowerCase());
	}
    if (pruefenEmail(form.email.value)==false) {
        okay = false;
        anzeige += "Bitte prüfen Sie ob Sie eine gültige E-Mailadresse eingegeben haben. <br />";
    }

    if (form.nachricht.value == "") {
        okay = false;
        anzeige += "Bitte geben Sie eine Nachricht ein. <br />";
    }

    let ergebnisElement = document.getElementById("ergebnis");

    if (okay) {
        anzeige = "Vielen Dank, dass Sie mit uns Kontakt aufgenommen haben! <br /> Wir werden Ihre Nachricht sobald wie möglich bearbeiten.";
        ergebnisElement.classList.add("okay");
    } else {
        ergebnisElement.classList.remove("okay");
    }

    ergebnisElement.innerHTML = anzeige;

    // Formular wird nicht abschicken
    event.preventDefault();
}
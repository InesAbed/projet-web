
function setActiveHeader() {
	const location = window.location.pathname;

	switch (location) {
		case '/aVousDeJouer.html':
			document.getElementById('headerAVousDeJouer').className = "active";
			break;
		case '/enSavoirPlus.html':
			document.getElementById('headerEnSavoirPlus').className = "active";
			break;
		default:
			document.getElementById('headerHome').className = "active";

	}

}

function expend() {
	let header = document.getElementById("header");

	if (header.className === "header") {
		header.className += " responsive";
	} else {
		header.className = "header";
	}
}
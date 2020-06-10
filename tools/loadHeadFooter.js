

function loadHeader(path) {
	return new Promise(async (resolve, reject) => {
		let res = await fetch(path);
		let html = await res.text();
		let div = document.getElementById("header");

		if (!div)
			throw new Error(`no div with id 'header'`);
		if (!html)
			throw new Error(`header file wasnt loaded`);

		div.innerHTML = html;
		resolve();
	});
}

function loadFooter(path) {
	return new Promise(async (resolve, reject) => {
		let res = await fetch(path);
		let html = await res.text();
		let div = document.getElementById("footer");

		if (!div)
			throw new Error(`no div with id 'footer'`);
		if (!html)
			throw new Error(`footer file wasnt loaded`);

		div.innerHTML = html;
		resolve();
	});
}
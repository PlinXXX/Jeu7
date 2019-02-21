function pyramide() {
	let stage = Number(prompt("Combien d'etage veux tu afficher ?"));
	
	for ( let n = stage; n > 0; n--) {
		let space;
		let diez;
		for (var i = 1; i < n; i++) {
			space += " ";
		}
		for (var j = n; j <= stage; j++) {
			diez += "#";
		}
		console.log(space + diez);
	}
}
pyramide();
function factoriel() {
	let n = Number(prompt("Puts An Integer : "));
	fact = 1;
	while (n > 0) {
		fact *= n;
		n--;
	}
	return fact
}
// console.log(factoriel());
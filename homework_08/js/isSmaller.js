function isBigger(a, b) {
	return a > b;
}

function isSmaller(a, b){
	return !isBigger(a, b);
}

console.log(isSmaller(2, 3));


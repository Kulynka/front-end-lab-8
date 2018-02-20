function getTransformedArray(array, getTransformedfunc) {
	let array2 = [];
	 forEach(array, function(elem) {
		array2.push(getTransformedfunc (elem))
		});
		return array2;
}

console.log(getTransformedArray(list, function(elem){return elem+2}))

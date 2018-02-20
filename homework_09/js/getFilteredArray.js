function getFilteredArray(list, getFilteredfunc) {
	let array3 = [];
	forEach(list, function (elem) {
		if (getFilteredfunc(elem)) {
			array3.push(elem);
		}
	});
	return array3;
}

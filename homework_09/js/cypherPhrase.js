function cypherPhrase(map, value) {
	let list2 = getTransformedArray(value, function (elem) {
		if (map[elem]) {
			return map[elem];
		} else {
			return elem;
		}
	});
	return list2.join("");
}

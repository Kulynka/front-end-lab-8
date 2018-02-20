function collectIds(movies) {
	let filter = getFilteredArray(movies, function (element) {
		return element.rating > 3.0;
	});
	let filterId = getTransformedArray(filter, function (element) {
		return element.id;
	});
	return filterId;
}

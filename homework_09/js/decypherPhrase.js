function decypherPhrase(map, value) {
	let key = {};
	for (element in map) {
		key[map[element]] = element;
	}
	let formatKey = cypherPhrase(key, value);
	return formatKey;
}

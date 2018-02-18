function getClosestToZero() {
	var num = Math.abs(arguments[0]);
	for (var i = 0; i < arguments.length; i++) {
		if (Math.abs(arguments[i]) < num) num = arguments[i];
	}
	return num;
}


/*console.log(getClosestToZero(2, 5, 8, 10, 4, -0.5)); //-0.5*/

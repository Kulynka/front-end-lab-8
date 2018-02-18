function reverseNumber(a) {
	var num = a.toString().split("").reverse().join("");
	if (a < 0) return (parseInt(num) * -1);
	return parseInt(num);
}

/*console.log(reverseNumber(234)); //432*/

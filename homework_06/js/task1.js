var a = Number(prompt('First side of the triangle'));
var b = Number(prompt('Second side of the triangle'));
var c = Number(prompt('Third side of the triangle'));
var s = 0.25 * Math.sqrt((a + b + c) * (b + c - a) * (a + c - b) * (a + b - c));



if (a > 0 & b > 0 & c > 0) {

	if (a + b < c || b + c < a || c + a < b) {
		console.log("Incorrect data");
	}

	if (c * c == b * b + a * a || b * b == a * a - c * c || a * a == c * c - b * b) {
		console.log("Type of triangle is right triangle. " + "Square = " + s.toFixed(2));
	} else if (a == b && b == c && c == a) {
		console.log("Type of triangle is Equilateral. " + "Square = " + s.toFixed(2));
	} else if (a == b || b == c || c == a) {
		console.log("Type of triangle is Isosceles. " + "Square = " + s.toFixed(2));
	} else if (a !== b && b !== c && c !== a) {
		console.log("Type of triangle is Scalene. " + "Square = " + s.toFixed(2));
	}

} else {
	console.log("Incorrect data");
}

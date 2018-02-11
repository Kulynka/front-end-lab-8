var dollar = parseFloat(prompt('Dollar'));
var euro = parseFloat(prompt('Euro'));

if( dollar <= 0 || euro <= 0){
	console.log("Incorrect data");
} else {
	var kurs1 = 27.0000;
	var kurs2 = 32.6825;
	var result1 = dollar * kurs1;
	var result2 = euro * kurs2;
	var result3 = kurs1/kurs2;
	console.log(euro + " euro are equal " + result1.toFixed(2) + " UAH, " + dollar + " dollars are equal " + result2.toFixed(2) + " UAH, " + "one euro is equal " + result3.toFixed(2) + " dollars.");
}

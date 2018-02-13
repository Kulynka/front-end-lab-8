var n = Number(prompt("Enter natural number:"));
var i = 0;
var space = " ";
var star = " ";

if (n<=0 || n>20 || isNaN(n)){
	console.error('Incorrect!');
}
while (i < n) {
	space = " ";
	star = " ";
	for (j = 0; j < n - i; j++) space += "   ";
	for (j = 0; j < 2 * i + 1; j++) star += "[~]";
	console.log(space+star);
	i++;
}

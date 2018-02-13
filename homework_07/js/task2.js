var main = confirm("Do you want to play a game?");

while (main) {
	var randomNumber = Math.floor(Math.random() * range);
	var range = 6;
	var attemptsLeft = 3;
	var prize = 10;
	var remuneration = 10;
	var Cash = 0;
	var tryAgain = 0;
	var raund = 0;
	var nextAttempt = true;

	while (tryAgain < 3 && nextAttempt) {
		var userNumber = Number(prompt("Enter a number from 0 to " + (range - 1) + "\n" +
			"Attempts left: " + attemptsLeft + "\n" +
			"Total prize: " + Cash + " $" + "\n" +
			"Possible prize on current attempt: " + remuneration + " $"));

		if (userNumber === randomNumber) {
			Cash += remuneration;
			tryAgain = 0;
			attemptsLeft = 3;
			range = range * 2 - 1;
			prize *= 3;
			remuneration = prize;
			randomNumber = Math.floor(Math.random() * range);
			nextAttempt = confirm("Do you want to continue a game?");
		} else {
			attemptsLeft--;
			tryAgain++;
			remuneration = Math.floor(prize / (tryAgain * 2));
		}
	}
	console.log("Thank you for a game. Your prize is " + Cash + " $");
	main = confirm("Do you want to try again?");
	raund++;
}

if (!raund) {
	console.log("You did not become a millionaire");
}

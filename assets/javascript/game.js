

var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var leftGuesses = 10;
var guessesMade = [];
var userGuess = null;
var letterGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " leftGuesses: " + leftGuesses + " Guesses Made: " + guessesMade + " Computer picked: " + letterGuess);

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	if (guessesMade.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
		guessesMade[guessesMade.length]=userGuess;
		leftGuesses--;
	}
	if (letterGuess == userGuess) {
		wins++;
		console.log("You are a winner!");
		leftGuesses = 10;
		guessesMade = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " leftGuesses: " + leftGuesses + " Guesses Made: " + guessesMade + " Computer picked: " + letterGuess);
	}

	if (leftGuesses == 0) {
		losses++;
		console.log("Oh, so sorry. You lost!");
		leftGuesses = 10;
		guessesMade = [];
		letterGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " leftGuesses: " + leftGuesses + " Guesses Made: " + guessesMade + " Computer picked: " + letterGuess);
	}


	var html = "<p><h4>Guess what letter the kitty is thinking of: </h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Left Guesses: " + leftGuesses + "</h4></p>" + "<p><h4>Guesses made: " + guessesMade + "</h4></p>";
	document.querySelector("#game").innerHTML = html;

}
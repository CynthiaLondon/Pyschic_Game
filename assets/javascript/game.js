var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var leftGuesses = 10;
var guessesMade = [];
var userGuess = null;
var letterGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " leftGuesses: " + leftGuesses + " Guesses Made: " + guessesMade + " Computer picked: " + letterGuess);

document.onkeyup = fuction (event){ 
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	if (guessesMade.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
		guessesMade[guessesMade.length]= "UserGuess";
		leftGuesses--; 
	} 
	if letterGuess == (userGuess) {
		wins++;
		console.log("You won!");
		leftGuesses = 10;
		guessesMade = [];
		letterGuess = alaphabetLetters[Math.floor(Math.random() * alaphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " leftGuesses: " + leftGuesses + "Guesses Made: " + guessesMade + " Computer picked: " + letterGuess);
}
	if (leftGuesses == 0) {
		losses = ++;
		console.log("You lost!");
		leftGuesses = 10;
		guessesMade = [];
		letterGuess = alaphabetLetters[Math.floor(Math.random() * alpahbetLetters.length];
		console.log("Wins: " + wins + " Losses: " + losses + " leftGuesses: " + leftGuesses + "Guesses Made: ") + guessesMade + " Computer picked: " + letterGuess);

	}
	
	var html = "<p><h2>The Psychic Kitty Game</h2></p>" + "<p><h4>Guess what letter the kitty is thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Left Guesses: " + leftGuesses + "</h4></p>" + "<p><h4>Guesses made so far: " + guessesMade + "</h4></p>";
	document.querySelector("#game").innerHTML = html;
}
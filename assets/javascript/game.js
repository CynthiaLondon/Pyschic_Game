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
	if letterGuess == UserGuess) {
		wins++;
		console.log("You won!");
		leftGuesses = 10;
		guessesMade = [];
		letterGuess = alaphabetLetters[Math.floor(Math.random() * alaphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " leftGuesses: " + leftGuesses + "Guesses Made: " + guessesMade + " Computer picked: " + letterGuess);
}
	
}
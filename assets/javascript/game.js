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
	if (GuessesMade.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
		
	} 
}
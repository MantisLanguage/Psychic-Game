var letters = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let wins = 0;
let losses = 0;
let livesRemaing = 9;
let guesses = [];
let userGuess = document.onkeyup;
let compGuess = letters[Math.floor(Math.random()*letters.length)]
// not sure floor is necessary?// 



// using primary function from Question Game //
document.onkeyup = function (event) {


userGuess = event.key;
guesses.push(userGuess);

// win//
if (userGuess == compGuess) {

    wins++;
    livesRemaing = 9;
    guesses = [];
}
// live lost//
if (userGuess != compGuess)
livesRemaing--;

}
// total loss// 
if (livesRemaing == 0) {
    losses++;
    livesRemaing = 9;
    guesses = [];
}



// //
// Not sure I understand this
// function generateAlphabet() {
// 	var alphabet = [];
// 	for (var i = 97; i < 123; i++) {
// 		alphabet.push(String.fromCharCode(i));
//    }
// 	return alphabet;
// }
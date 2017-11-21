//Letter choices available
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9; //body parts total
var guessesLeft = 9; // shows what body parts//1//
var guessedLetters = [];
var newKey = "";

var wordBank = ["superheroes" , "spiderman" , "ironman", "superman", "wolverine"];

var hangmanWord = wordBank[Math.floor(Math.random() * wordBank.length)];

var hangmanArray = hangmanWord.split("");

var hangmanBlanks = hangmanArray.length;

// var hangmanResults = compare guessedLetters to letters in hangman array and return result in hangmanBlanks;


$.each(letters, function(key, value) {
    var lettersBtn = $("<button class='letter-button letter letter-button-color'>" + value + "</div>");
    lettersBtn.attr("data-letter", letters[value])
    $("#computerGuess").append(lettersBtn);
  }); 

// $(".letter_buttons").click(function) {
//     this.letterBtn.hide();

// }

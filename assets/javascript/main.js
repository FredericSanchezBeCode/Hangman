let dictionnary = [ 
	"javascript",
	"thor",
	"chaise",
	"ordinateur",
	"telephone",
	"email",
	"pasunmotdonctumeurs",
	"pecheur",
	"cinema",
	"jupiter",
	"hades",
	"mythologie",
	"zeus",
    "pluto",
    "gauffre",    
]
function letterButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `<button class="btn btn-lg btn-dark m-2" id='`+ letter +`' onClick="handleGuess('`+ letter +`')"> ` + letter + `</button>`).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function randomWord() {
    answer = dictionnary[Math.floor(Math.random() * dictionnary.length)];
}

//This file contains every principal functions needed for the game

//A bunch of variables to begin softly
let answer = '';
let lives = 7;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

//Main function, it will handle all functions to know where the gamer is.
function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updatePicture();
  }
}

//For every mistake made, the function will take a updated picture of the hangman from the images folder.
function updatePicture() {
  document.getElementById('hangman').src = './assets/images/' + mistakes + '.png';
}

//The following checkers will secure that the game is won or lost.
function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You win but wanna play again?';
    document.getElementById('hangman').src = './assets/images/win.png';
  }
}

function checkIfGameLost() {
  if (mistakes === lives) {
    document.getElementById('wordSpotlight').innerHTML = 'The correct word was: ' + answer;
    document.getElementById('keyboard').innerHTML = "You are like a cat there is still more lives to live";
    document.getElementById('hangman').src = './assets/images/loser.png';

  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

//Coupled to a button, if the game is lost or the player is a coward, it will reset the game
function reset() {  
  mistakes = 0;
  guessed = [];
  document.getElementById('hangman').src = './assets/images/0.png';

  randomWord();
  guessedWord();
  updateMistakes();
  letterButtons();
}

document.getElementById('maxMistakes').innerHTML = lives;

//Functions called from the 'initiate.js' file.
randomWord();
letterButtons();

guessedWord();

// window.onload = function () {
//     let words;
//     let guessButtonsLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z;
//     let wordToGuess = [];
//     let guessed = [];
//     let tryLeft;
//     let counter;
//     let spaces = 0;
//     let finished = false;
//     let tmpWord;



//     function makeRequest (method, url, done) {
//         var xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = function () {
//           done(null, xhr.response);
//         };
//         xhr.onerror = function () {
//           done(xhr.response);
//         };
//         xhr.send();
//     }
      
//     makeRequest('GET', '/hangman/assets/resources/list.txt', function (err, datums) {
//         if (err) { throw err; }
//         words = datums.split('\n');
//         play();
//     });
    
    
//     let guessButtons = function(){
//         html_guessButtons = document.getElementById("guessButtons");
//         dom_guessLetters = document.createElement('ul');
//         dom_guessLetters.id = "guessLetters";

//         guessButtonsLabels.forEach((label)=>{
//             li = document.createElement('li');
//             li.setAttribute('class', 'guessLetter');
//             li.innerHTML = label;
//             check(li);

//             dom_guessLetters.appendChild(li);
//             html_guessButtons.appendChild(dom_guessLetters);
//         });
//     }

//     let guessedArea = function(){
//         html_guessed = document.getElementById("guessed");
//         dom_found = document.createElement('ul');
//         dom_found.id = "found";

//         wordToGuess.forEach((letter)=>{
//             li = document.createElement('li');
//             li.setAttribute('class', 'guessLetter');
//             if(letter == '-' || letter == ' '){li.innerHTML = letter; spaces++;}
//             else{li.innerHTML = '_'}
//             guessed.push(li);
//             dom_found.appendChild(li);
//             html_guessed.appendChild(dom_found);
//         });
//     }

//     let html_tryLeft = document.getElementById('tryLeft');

//     let returnText = function(){
//         html_tryLeft.innerHTML = (tryLeft > 1)?"You still have "+tryLeft+" tries left.":"You still have "+tryLeft+" try left.";
//         if(tryLeft < 1){
//             html_tryLeft.innerHTML="Loose";
//             finished = true;
//         }
//         if(counter+spaces == guessed.length){
//             html_tryLeft.innerHTML="Win!";
//             finished = true;
//         }
//     }

//     let check = function (list) {
//         list.onclick = function(){
//             if(!finished){
//                 let guessLetter = this.innerHTML;
//                 this.setAttribute("class", "actived");
//                 this.onclick = null;
//                 wordToGuess.forEach((letter,i)=>{
//                     if(letter == guessLetter){guessed[i].innerHTML = guessLetter;counter++;}
//                 });
//                 if(wordToGuess.indexOf(guessLetter) == -1){
//                     tryLeft--;
//                     returnText();
//                     drawTrigger();
//                 }else{returnText();}
//             }
//         }
//     }

//     let canvas =  function(){
//         hangman = document.getElementById("hangman");
//         context = hangman.getContext('2d');
//         context.strokeStyle = "black";
//         context.fillStyle = "#fff";
//         context.lineWidth = 3;
//         context.beginPath();
//     };

//     draw = function(x, y, length, height, color = "#fff") {
//         context.beginPath();
//         context.moveTo(x, y);
//         context.lineTo(length, height);
//         context.strokeStyle = color;
//         context.stroke();
//     }

//     basement = function() {
//         draw(0, 150, 150, 150, 'black');
//     };
    
//     pole = function() {
//         draw (10, 5, 10, 600, 'black');
//     };
    
//     transverse = function() {
//         draw (10, 5, 65, 5, 'black');
//     };

//     rope = function() {
//         draw (60, 5, 60, 45, 'black');
//         context.beginPath();
//         context.arc(60, 50, 5, 0, Math.PI*2, true);
//         context.stroke();
//     };

//     head = function(){
//         context.beginPath();
//         context.arc(60, 30, 15, 0, Math.PI*2, true);
//         context.strokeStyle = '#fff';
//         context.fill();
//         context.stroke();
//         context.beginPath();
//         context.arc(60, 50, 5, 0, Math.PI*2, true);
//         context.strokeStyle = 'black';
//         context.stroke();
//       }

//     torso = function() {
//         draw (60, 43, 60, 70);
//     };

//     rightArm = function() {
//         draw (60, 50, 80, 60);
//     };

//     leftArm = function() {
//         draw (60, 50, 40, 60);
//     };

//     rightLeg = function() {
//         draw (60, 70, 80, 110);
//     };

//     leftLeg = function() {
//         draw (60, 70, 40, 110);
//     };

//     drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, rope, transverse, pole, basement];

//     var drawTrigger = function () {
//         if(tryLeft>=0)drawArray[tryLeft]();
//     }
    
//     let play = function(){
//         guessed = [];
//         tryLeft = 10;
//         counter = 0;
//         spaces = 0;
//         tmpWord = words[Math.floor(Math.random()*words.length)];
//         tmpWord = tmpWord.toLowerCase();
//         wordToGuess = tmpWord.split('');
        
//         canvas();
//         guessButtons();
//         guessedArea();
//         returnText();
//     }

//     document.getElementById('reset').onclick = function() {
//         dom_found.parentNode.removeChild(dom_found);
//         dom_guessLetters.parentNode.removeChild(dom_guessLetters);
//         context.clearRect(0, 0, 400, 400);
//         finished = false;
//         play();
//       }
// }
/*{ <style> 
form{
    position: absolute;
    width: 50%;
    top: 45%;
    left: 25%;    
}
button{
    width: 60px;
    height: 60px;
    background-color: #123456;
    color: aliceblue;
    font-size: 2em;
    font-variant: small-caps;
	
    }
	button:disabled{
		color: gray;
	}
h1{
    text-align: center;
    font-size: 5em;
}
#main{
    font-size: 2em;
    text-align: center; 
    margin-bottom: 0.2em;
    }    
.img{
    width: 250px;
    height: 400px;
    display: block;      
    margin: auto;  
    margin-bottom: 1em;            
}
 h1.titre{
    color:darkred;
    font-family:cursive; 
}    
</style> */
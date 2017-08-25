
// Vars
var wordArray = [];
var words = ["pink", "hotpink", "mediumvioletred","salmon","red","firebrick",
	"tomato","coral","peachpuff","moccasin","olive","forestgreen","cyan","cadetblue",
	"indigo","maroon","slategray"];
var wins = 0;
var guesses = 10;
var wordIndex = Math.floor(Math.random() * 17);
var correct = 0;
var guessed = [];
var flag = 0;
var word = words[wordIndex];

// Functions
function reset() {
	correct=0;
	guesses=10;
	wordIndex = Math.floor(Math.random() * 17);
	word = words[wordIndex];
	wordArray=[];
	for(i=0;i<words[wordIndex].length;i++){
		wordArray.push('_');
	}
	guessed=[];
}

function isLetter(str) {
 	return str.length === 1 && str.match(/[a-z]/i);
}

//Main
for(i=0;i<words[wordIndex].length;i++){
	wordArray.push('_');
}

document.onkeydown = function(event) {
	document.querySelector("#wins").innerHTML = "Wins: " + wins;
	document.querySelector("#word").innerHTML = wordArray.toString();
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();

	for(i=0;i<guessed.length;i++){
		if(userInput==guessed[i] || !isLetter(userInput)){
			flag = 1;
		}
	}

	if(flag != 1){
		guessed.push(userInput);
		guesses--;
	}

	flag = 0;
	guessed.sort();


	for(i=0;i<word.length;i++){
		if(word.charAt(i) == userInput){
			wordArray[i] = userInput;
			correct++;
			document.querySelector("#word").innerHTML = wordArray.toString();
			guesses++;
		}
	}

	document.querySelector("#guesses").innerHTML = "Guesses: " + guesses;
	document.querySelector("#guessed").innerHTML = "Guessed: " + guessed;
	
	if(correct==words[wordIndex].length){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;

	}

	if(correct==words[wordIndex].length || guesses==0){
		reset();
	}
}
$(document).ready(function () {
	
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	var word;
	var score = 5;
	var wordClueList =new Array;
	var clue;

// creating alphabet squares

function createAlphabet (){
	$.each(alphabet.split(''), function(i, val) {
		$('#alphabet').append($('<span class="guess">' + val + '</span>'));
	});
}
createAlphabet();



//getting a random word and a clue from hangman.json
function getWord(){
	$.getJSON('hangman.json', function(data) { 

		for(i=0;i<data.wordlist.length;i++){ 
			wordClueList[i]=new Array;
			wordClueList[i][0]=data.wordlist[i].word;
			wordClueList[i][1]=data.wordlist[i].clue;
		}

	random = Math.floor(Math.random()*wordClueList.length);
	word = wordClueList[random][0];
	clue = wordClueList[random][1];

console.log(word);
console.log(clue);
	})

}	

// on click events: 
// (1)showing two buttons: displaying a hint and reloading the game; 
// (2)showing the number of chances;
// (3)generating <span> list, each with val()= 1 letter from random word


function startGame() {

	getWord();
		
	$('#startButton').on('click', function() {
		
		$('#startButton').fadeOut();
		// $('#game_wrapper').append($("<button id='startAgainButton'>START AGAIN</button>"));
		$('#hint').append($("<button id='hint'>HINT</button>"));
		$('#score').html('Number of chances: ' + score);	
		$.each(word.split(""), function(i, val) {
		  $('#word').append($('<span class="letter" value="' + val + '"> _ </span>'));		 
		});
		
		showingClue();
		checkLetter();
		// reloadGame();
	})//e: click on start button
	
}
startGame();


//displaying a hint
function showingClue(){
	$('#hint').on('click', function() {
		$('#hint').hide();
			$('#clue').append($('<span>' + clue + '</span>'));
	})
	
}

//checking letter, click on alphabet square

function checkLetter() {
	$('.guess').click(function() {
			
	let count = $('#word [value=' + $(this).text() + ']').each(function() {
	$(this).text($(this).attr('value'));}).length;
let h = $('#word [value=' + $(this).text() + ']');
let a = $(this).text($(this).attr('value')).textContent;
console.log($('#word'));



		if(count > 0) {
			$(this).css('color', 'green').unbind('click');

		}
		else if(count === 0) {
			$(this).css('color', 'red').unbind('click');
			--score;
			$('#score').html('Number of chances: ' + score);
			if (score === 0) {
			$('.guess').unbind('click');
			$('#alphabet').empty();
			createAlphabet();
			$('#hint').empty();
			$('#startAgainButton').fadeOut();
			startGame();
	
		
			}
		}


	});
}

});//doc ready
document.addEventListener("DOMContentLoaded", function(event) {
	console.log("DOM fully loaded and parsed");

	let player = 'X';
	const victoryScenarios = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[6, 4, 2]
	];	
	let choicesO =[];
	let choicesX =[];

// drawing a board (i.e. a table) 9 X 9, assigning class to each element
function init() {
	
	var board = document.createElement('table');
	board.setAttribute('class', 'table');
	const size = 3

	for (var i = 0; i < size; i++) {
		var row = document.createElement('tr');
		board.appendChild(row);
		for (var j = 0; j < size; j++) {
			var cell = document.createElement('td');
			row.appendChild(cell);
			cell.setAttribute('class', 'cell');
			// console.log(cell);
		}
	}
	document.getElementById('game').appendChild(board);
	play();
}
init();

//creating 'indexes' of the cells: assigning id, adding click event
function play() {
	
	const cells = document.querySelectorAll('.cell');
	// console.log(cells);

		for(var i = 0; i < cells.length; i++) {
			cells[i].setAttribute('id', i);			
			cells[i].addEventListener('click', turnPlayer, false);
		}	
}



function turnPlayer() {
	this.innerText = player;
	
	let info = document.getElementById('info');

// Switching the players, showing info who's going to make the next move
		if ( player === 'O') {	
			player = 'X';
			info.innerText = ( player + "! It's your move." );
			this.style.background = "pink";
			//collecting id of clicked elements
			choicesO += this.id;
			// console.log(choicesO);
		    check(victoryScenarios, choicesO);

			} else  {	
			player = 'O';
			info.innerText = ( player + "! It's your move."  );
			this.style.background = "grey";
			//collecting id of clicked elements
			choicesX += this.id;
			// console.log(choicesX);
			check(victoryScenarios, choicesX);
			}
}

// checking arrays with collected id, comparing them to victoryScenarios
function check (a,b) {

	//finding the same numbers in array with collected id and those in victoryScenarios
	if (b.length >= 3) {
		var filteredCombinations = a.filter((combination) =>
		combination.filter(x => 
		b.includes(x)).length === 3);	  
	//   console.log(filteredCombinations);

			//showing the winner
	  		if (filteredCombinations.length = 3 && filteredCombinations.some(isNaN)) {
				  b = [];
				  if ( player === 'O') {	
					player = 'X';
				  } else  {	
					player = 'O';
				  }
				  let winner = document.getElementById('winner');
				  winner.innerHTML = ("The winner is " + player + '!');
				  winner.setAttribute('class', 'winner_info');
			  }
			
			// in case od draw, displaying info
	  		if (b.length > 4) {
				  document.getElementById('winner').innerHTML = ("There's no winner.")
	  		}		
	}
}




// clearing the board after clicking on play again button

const startbtn = document.querySelector('#startBtn');
startbtn.addEventListener('click', function() {
	choicesO = [];
	choicesX = [];
	info.innerText = ('X is going to play.');
	player = 'X';
	document.getElementById('winner').classList.remove('winner_info');
	document.getElementById('winner').innerHTML = ("And the winner is ...")
 	document.getElementById('game').removeChild(game.firstChild);
	init();
})

});
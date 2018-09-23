$(document).ready(function () {



		const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
			  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
			  't', 'u', 'v', 'w', 'x', 'y', 'z'];
		
		let $word ; // Selected word
		let $hint; // Hint on demand
		let $guess ; // Geuss
		let $wordHolder = [ ]; // Stored geusses
		let $chances = 5; // Chances
		let $counter ; // Count guessed letter
	  
	  
		// creating alphabet
		let createAlphabet = function () {
		  const $alphabetButtons = $('<ul></ul>');
	  
		  for (let i = 0; i < alphabet.length; i++) {
				$letter = $('<li></li>');
				$letter.append(alphabet[i]);	
				$('#alphabet').append($alphabetButtons);
				$alphabetButtons.append($letter);

				//checking if clicked letter is correct
				check();
		  }
		}
		  
		
	  
		// creating space for random word
		 const showSpaceForRandomWord = function () {
		  let $randomWord = $('<ul></ul>');
	  
		  for (let i = 0; i < $word.length; i++) {
				$randomWord.addClass('rndWord');
				$randomWordletter = $('<li>_</li>');
				$randomWordletter.addClass('guess');
	  
				$wordHolder.push($randomWordletter);
				$('#hold').append($randomWord);
				$randomWord.append($randomWordletter);
			}

	
		}
		
		// showing player's chances, displaying hangman picture, info: you win / you lost
		 const trackPlayersMoves = function () {
		  $("#chances").text("Chances: " + $chances);

		  $('#picture_wrapper').children().hide();

		  		if ($chances == 4) {
					$('#picture_wrapper img:nth-child(1)').fadeIn();
		  		}
		  		if ($chances == 3) {
					$('#picture_wrapper img:nth-child(2)').fadeIn();
				}
				if ($chances == 2) {
					$('#picture_wrapper img:nth-child(3)').fadeIn();
				}
				if ($chances == 1) {
					$('#picture_wrapper img:nth-child(4)').fadeIn();
				}
				if ($chances == 0) {
					$('#picture_wrapper img:nth-child(5)').fadeIn();
				}
		 
		 if ($chances < 1) {
				$("#chances").text("Game Over");
				$('#alphabet').empty();
				$('#hold').text($word);
		  }
		  for (let i = 0; i < 	$wordHolder.length; i++) {
				if ($counter === $wordHolder.length) {
				  $("#chances").text("You Win!");
				}
		  }
		}
	  
	  
		

	  
		// checking if clicked letter is correct one
		 const check = function (){
		  $letter.click (function (){
				let $geuss = (this.innerHTML);
				this.setAttribute("class", "active");
				for (let i = 0; i < $word.length; i++) {
				  if ($word[i] === $geuss) {
						$wordHolder[i].text($geuss);
						$counter += 1;
				  } 
				}
				let j = ($word.indexOf($geuss));
				if (j === -1) {
				  $chances -= 1;
					trackPlayersMoves();
				} else {
				  trackPlayersMoves();
				}
		  })
		}
		
		  
		// Play
const play = function () {

createAlphabet();

//list of words and hints			
const words = ["pie", "border", "kangaroo", "valley", "gif", "winter", "straw", "law", "bicycle", "rain", "laptop", "javascript", "mountain"];
const hints = [
	"a baked dish of fruit, or meat and vegetables, typically with a top and base of pastry", 
	"a line separating two countries, administrative divisions, or other areas", 
	"a large plant-eating marsupial with a long powerful tail and strongly developed hindlimbs that enable it to travel by leaping, found only in Australia and New Guinea", 
	"a low area of land between hills or mountains, typically with a river or stream flowing through it", 
	"a lossless format for image files that supports both animated and static images", 
	"the coldest season of the year", 
	"dried stalks of grain, used especially as fodder or as material for thatching, packing, or weaving",
	"the system of rules which a particular country or community recognizes as regulating the actions of its members and which it may enforce by the imposition of penalties",
	"a vehicle consisting of two wheels held in a frame one behind the other, propelled by pedals and steered with handlebars attached to the front whee",
	"the condensed moisture of the atmosphere falling visibly in separate drops",
	"a computer that is portable and suitable for use while travelling",
	"an object-oriented computer programming language commonly used to create interactive effects within web browsers",
	"a large natural elevation of the earth's surface rising abruptly from the surrounding level; a large steep hill"
];
			
// capturing random word

		  $word = words[Math.floor(Math.random() * words.length)];
		  console.log($word);

// assigning hint to random word
			$hintIndex = words.indexOf($word);
			$hintText = hints[$hintIndex];
			console.log($hintText);
		
			
// showing the hint	  
			$('#hint').on ('click',function() {	
				$("#clue").text("Hint: " +  ($hintText));				
			});
	  
		  $wordHolder = [ ];
		  $counter = 0;
		  showSpaceForRandomWord();
		  trackPlayersMoves();
		}
	  
play();
		
	
	  
		
// StartAgain button
		$('#reset').click(function(){
			$("#clue").text("");
			$wordHolder = [ ];
			$('#hold').empty();
			$chances = 5;
			$('#alphabet').empty();

			play();
		});
	  
	  
	

});//doc ready
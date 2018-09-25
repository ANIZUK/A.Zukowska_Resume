document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


// array with pictures
const cardsArray = [{
  'img': 'https://i.postimg.cc/k5dQrttx/image1.png',
  'number': '1'
},
{
  'img': 'https://i.postimg.cc/SN3LrPS1/image2.png',
  'number': '2'
},
{
  'img': 'https://i.postimg.cc/2SWQXx3k/image3.png',
  'number': '3'
},
{
  'img': 'https://i.postimg.cc/NGNkyMWc/image4.png',
  'number': '4'
},
{
  'img': 'https://i.postimg.cc/NFP6ZJ1M/image5.png',
  'number': '5'
},
{
  'img': 'https://i.postimg.cc/1tBcr5XD/image6.png',
  'number': '6'
},
{
  'img': 'https://i.postimg.cc/SRKLTFY3/image7.png',
  'number': '7'
},
{
  'img': 'https://i.postimg.cc/ydsyRS1V/image8.png',
  'number': '8'
},
{
  'img': 'https://i.postimg.cc/vmWvDvdq/image9.png',
  'number': '9'
},
{
  'img': "https://i.postimg.cc/8PjBLGSr/image10.png",
  'number': '10'
},
];

//creating duplicates of images and shuffling them
const gameGrid = cardsArray
.concat(cardsArray)
.sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let delay = 1200;
// let matchedPictues = 0;


//creating grid
const game = document.getElementById('game');
const grid = document.createElement('div');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

//function that makes selected pictures, that are the same, have 'match'class i.e. the cards will disappear
const match = () => {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
    // matchedPictues++;

  });
}

//function that resets guess
const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
    card.style.backgroundImage = `none`;
  });
};


//core of the game: getting randomly sorted pictures, add click event


gameGrid.forEach(item => {
    const { number, img } = item;
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.number = number;
    card.style.border =  `1px solid black`;

    grid.appendChild(card);

card.addEventListener('click', function (event) {
 
//only 2 moves are posssible
  if (count < 2) {
    count++;
    if (count === 1) {
      // assigning first guess, displaying the picture
      firstGuess = this.dataset.number;
      this.classList.add('selected');
      this.style.backgroundImage =  `url(${item.img})`;
      // console.log(firstGuess);
    
    }
    else {
      // assigning second guess
      secondGuess = this.dataset.number;
      this.classList.add('selected');
      this.style.backgroundImage =  `url(${item.img})`;
      // console.log(secondGuess);

            if (firstGuess === secondGuess) {
              // console.log('pasuja');
              // match();
              // resetGuesses();
              
              setTimeout(match, delay);
              setTimeout(resetGuesses, delay);
            } else {
          
              // console.log('nie pasują');
              // resetGuesses();
              setTimeout(resetGuesses, delay);
              }    
    }   
  }


});

});

});





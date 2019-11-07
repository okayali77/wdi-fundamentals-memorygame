var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'heart',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];
var cardsInPlay = [];
var cardID;

function createBoard(){
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

function flipCard (){
 cardID = this.getAttribute('data-id');	
 console.log("User flipped " + cards[cardID].rank);
 cardsInPlay.push(cards[cardID].rank);
 console.log(cards[cardID].suit);
 console.log(cards[cardID].cardImage);
 this.setAttribute('src', cards[cardID].cardImage);
 checkForMatch();

}

function checkForMatch(){
	
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
  			alert("You found a match!");
  		} else {
  			alert("Sorry, try again.");
 		}
 	}
}

createBoard();


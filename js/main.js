let cardOne = 3;
let cardTwo = 10;
let sum = cardOne + cardTwo;
let cards = [cardOne, cardTwo];
let message = "";

let play = document.getElementById("play");
let hand = document.getElementById("hand");
let total = document.getElementById("total");


function renderGame() {
  hand.textContent = cardOne + " " + cardTwo;
  total.textContent = sum;

  if (sum < 21) {
    message = "Hit?";
  } else if (sum === 21) {
    message = "BLACKJACK! CONGRATS";
  } else {
    message = "GAME OVER";
  }
  play.textContent = message;
}

function startGame() {
  renderGame();
}

function hit() {
  let card = 4;
  cards.push(card);
  sum += card;
  renderGame();
  hand.textContent = cards;
  total.textContent = sum;
}
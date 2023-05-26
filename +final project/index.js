const images = [
  "2425.jpg",
  "2425.jpg",
  "characters.jpg",
  "characters.jpg",
  "chocolate.gif",
  "chocolate.gif",
  "imagination.jpg",
  "imagination.jpg",
  "mermaidman.jpg",
  "mermaidman.jpg",
  "spongebobpatrick.jpg",
  "spongebobpatrick.jpg",
  "squidward.jpg",
  "squidward.jpg",
  "uglybarnacle.jpg",
  "uglybarnacle.jpg",
];

//TODO: Create flag para que las cartas no se puedan mover a menos que el boton tenga el status de stop game

class AudioController {
  constructor() {
    this.music = new Audio("audio/ending.mp3");
    this.finishSound = new Audio("audio/living-in-the-sunlight.mp3");
    this.highScoreSound = new Audio("audio/victoryscreech.mp3");
    this.flipSound = new Audio("audio/shoe-sound.mp3");
    this.startSound = new Audio("audio/spongebob-fail.mp3");
    this.matchSound = new Audio("audio/woohoo.mp3");

    this.music.volume = 0.1;
    this.highScoreSound.volume = 0.3;
    this.finishSound.volume = 0.3;
    this.startSound.volume = 0.3;
    this.flipSound.volume = 0.3;
    this.matchSound.volume = 0.3;

    this.music.loop = true;
  }
  startMusic() {
    this.music.play();
  }
  stopMusic() {
    this.music.pause();
    this.music.currentTime = 0;
  }

  startGame() {
    this.startSound.play();
  }

  highScore() {
    this.stopMusic();
    this.highScoreSound.play();
  }

  finish() {
    this.stopMusic();
    this.finishSound.play();
  }

  flip() {
    this.flipSound.play();
  }
  match() {
    this.matchSound.play();
  }
}

class MixOrMatch {
  constructor() {
    this.cardsArray = images;
    this.timePassed = 0;
    this.highScore = 0;
    this.timer = document.getElementById("elapsed-time");
    this.pairs = document.getElementById("pairs-found");
    this.audioController = new AudioController();
  }

  startGame() {
    this.cardToCheck = null;
    this.matchedPairs = 0;
    this.timePassed = 0;
    this.matchedCards = [];
    this.busy = true;

    setTimeout(() => {
      this.audioController.startMusic();
      this.shuffleCards();
      this.showCards();
      this.counter = this.startcounter();
      this.busy = false;
    }, 500);
    setTimeout(() => {
      this.hideCards();
    }, 2000);

    this.timer.innerText = this.timePassed;
    this.pairs.innerText = 0;
    document.getElementById("start-stop").innerText = "Stop Game";
  }

  hideCards() {
    let cards = Array.from(document.getElementsByClassName("flip-container"));

    cards.forEach((card) => {
      card.classList.remove("visible");
    });
  }

  showCards() {
    let cards = Array.from(document.getElementsByClassName("flip-container"));

    cards.forEach((card) => {
      card.classList.add("visible");
    });
  }

  flipCard(card) {
    if (this.canFlipCard(card)) {
      this.audioController.flip();

      card.classList.add("visible");

      if (this.cardToCheck) {
        this.checkForCardMatch(card);
      } else {
        this.cardToCheck = card;
      }
    }
  }

  checkForCardMatch(card) {
    if (this.getCardType(card) === this.getCardType(this.cardToCheck)) {
      this.cardMatch(card, this.cardToCheck);
    } else {
      this.cardMismatch(card, this.cardToCheck);
    }

    this.cardToCheck = null; //after card is checked, we have to go back to initial status
  }

  cardMatch(card1, card2) {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
    this.audioController.match();
    this.matchedPairs++;
    this.pairs.innerHTML = this.matchedPairs;
    if (this.matchedCards.length == this.cardsArray.length) {
      this.gameOver();
    }
  }

  cardMismatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
      //settimeout to visualize position of letters
      card1.classList.remove("visible");
      card2.classList.remove("visible");
      this.busy = false;
    }, 1000);
  }

  getCardType(card) {
    return card.querySelectorAll(".flip-container .flipper .back img")[0].src;
  }

  restartGame() {
    clearInterval(this.counter);
    document.getElementById("start-stop").innerText = "Start Game";
    this.audioController.stopMusic();
    this.cardToCheck = null;
    this.matchedPairs = 0;
    this.timePassed = 0;
    this.matchedCards = [];
    this.busy = true;
    this.timer.innerText = this.timePassed;
    this.pairs.innerText = 0;
    this.hideCards();
  }

  gameOver() {
    clearInterval(this.counter);
    if (this.highScore <= this.timePassed && this.highScore > 0) {
      this.audioController.finish();
      document.getElementById("info-msg").innerText =
        "You found all pairs! Click on 'Play again' to keep on playing";
    } else {
      this.audioController.highScore();
      document.getElementById("info-msg").innerText =
        "You beat the highscore!  Click on 'Play again' to keep on playing";
      this.highScore = this.timePassed;
      document.getElementById("high-score").innerText = this.timePassed;
    }
    document.getElementById("start-stop").innerText = "Play Again";
  }

  startcounter() {
    return setInterval(() => {
      this.timePassed++;
      this.timer.innerText = this.timePassed;
    }, 1000);
  }

  shuffleCards() {
    let imgs = shuffle(this.cardsArray);
    assignShuffledImages(imgs);
  }

  canFlipCard(card) {
    return (
      !this.busy &&
      !this.matchedCards.includes(card) &&
      card !== this.cardToCheck
    );
  }
}

//randomize image order
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function assignShuffledImages(shuffledImgs) {
  let cards = document.querySelectorAll(".flip-container .flipper .back img");

  for (let i = 0; i < cards.length; i++) {
    cards[i].setAttribute("src", "img/" + shuffledImgs[i]);
  }
}

function renderImages(images) {
  let imgArray = shuffle(images);

  for (let i = 0; i < imgArray.length; i++) {
    let img = document.createElement("img");
    img.classList.add("card-img");
    img.setAttribute("src", "img/" + imgArray[i]);

    let imgFront = document.createElement("img");
    imgFront.classList.add("card-img");
    imgFront.setAttribute("src", "img/frontcards.jpg");

    let front = document.createElement("div");
    front.classList.add("front");
    front.appendChild(imgFront);

    let back = document.createElement("div");
    back.classList.add("back");
    back.appendChild(img);

    let flipper = document.createElement("div");
    flipper.classList.add("flipper");
    flipper.appendChild(front);
    flipper.appendChild(back);

    let flipContainer = document.createElement("div");
    flipContainer.classList.add("flip-container");
    flipContainer.setAttribute(
      "ontouchstart",
      'this.classList.toogle("hover")'
    );
    flipContainer.appendChild(flipper);

    document.getElementById("cards").appendChild(flipContainer);
  }

  return images;
}

window.onload = function () {
  ready();
};

function ready() {
  renderImages(images);
  let game = new MixOrMatch();
  game.busy = true;
  this.highScore = 0;

  let cards = Array.from(document.getElementsByClassName("flip-container"));
  let button = document.getElementById("start-stop");

  button.addEventListener("click", () => {
    if (document.getElementById("start-stop").innerText == "Stop Game") {
      game.restartGame();
      document.getElementById("info-msg").innerText =
        'Click on "Start game" to play';
    } else {
      game.startGame();
      document.getElementById("info-msg").innerText =
        "Find all the pairs as fast as you can!";
    }
  });

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      game.flipCard(card);
    });
  });
}

const cards = document.getElementsByClassName("card");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
let isRunning = false;
let currentIndex = 0;
let direction = 1;
let interval;
const audio = new Audio("/assests/audios/kitt_scanner_sound.mp3");

const colors = ["#ff0000", "#ff1a1a", "#ff4d4d", "#ff8080", "#ffffff"];

function resetCards() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = "white";
  }
}

function animate() {
  if (direction === 1) {
    for (let i = 0; i < colors.length; i++) {
      const cardIndex = currentIndex - i;
      if (cardIndex >= 0) {
        cards[cardIndex].style.backgroundColor = colors[i];
      }
    }

    currentIndex++;
    if (currentIndex >= cards.length) {
      direction = -1;
      currentIndex = cards.length - 1;
    }
  } else {
    for (let i = 0; i < colors.length; i++) {
      const cardIndex = currentIndex + i;
      if (cardIndex < cards.length) {
        cards[cardIndex].style.backgroundColor = colors[i];
      }
    }

    currentIndex--;
    if (currentIndex < 0) {
      direction = 1;
      currentIndex = 0;
    }
  }
}

startBtn.onclick = function () {
  if (!isRunning) {
    isRunning = true;

    audio.play();
    audio.loop = true;

    interval = setInterval(animate, 150);

    startBtn.style.backgroundColor = "#ff4d4d";
    stopBtn.style.backgroundColor = "white";
  }
};

stopBtn.onclick = function () {
  if (isRunning) {
    isRunning = false;
    clearInterval(interval);
    audio.pause();
    audio.currentTime = 0;

    currentIndex = 0;
    direction = 1;
    stopBtn.style.backgroundColor = "#ff4d4d";
    startBtn.style.backgroundColor = "white";
  }
};

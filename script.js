let heartsCollected = 0;
let gameRunning = false;

const question = document.getElementById("question");
const image = document.getElementById("sceneImage");
const playBtn = document.getElementById("playBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const scoreBox = document.getElementById("score");
const countSpan = document.getElementById("count");

/* 😈 NO button runs away */
function moveNoButton() {
  noBtn.style.left = Math.random() * 260 + "px";
  noBtn.style.top = Math.random() * 140 + "px";
}
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

/* ❤️ Floating background hearts */
function createBgHeart() {
  const heart = document.createElement("div");
  heart.className = "bg-heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createBgHeart, 700);

/* 🎮 Start mini-game */
playBtn.addEventListener("click", () => {
  heartsCollected = 0;
  countSpan.innerText = heartsCollected;
  scoreBox.classList.remove("hidden");
  playBtn.classList.add("hidden");
  question.innerHTML =
    "Before you answer…<br>Can you catch Annu’s heart? ❤️";
  image.src = "images/game.png";
  gameRunning = true;

  const gameInterval = setInterval(() => {
    if (!gameRunning) {
      clearInterval(gameInterval);
      return;
    }
    createGameHeart();
  }, 600);
});

/* ❤️ Falling hearts logic */
function createGameHeart() {
  const heart = document.createElement("div");
  heart.className = "game-heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 90 + "vw";

  heart.addEventListener("click", () => {
    heart.remove();
    heartsCollected++;
    countSpan.innerText = heartsCollected;

    if (heartsCollected >= 5) {
      endGame();
    }
  });

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}

/* 💕 End game & unlock YES */
function endGame() {
  gameRunning = false;
  scoreBox.classList.add("hidden");
  question.innerHTML =
    "You already have my heart 💖<br>Will you be Annu’s Valentine (Year 2)?";
  image.src = "images/intro.png";
  yesBtn.classList.remove("hidden");
}

/* 🎆 Fireworks */
function fireworks() {
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.backgroundColor =
      ["#ff4d6d", "#ffd166", "#06d6a0", "#4d96ff"][
        Math.floor(Math.random() * 4)
      ];
    c.style.setProperty("--x", (Math.random() - 0.5) * 300 + "px");
    c.style.setProperty("--y", (Math.random() - 0.5) * 300 + "px");
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 1200);
  }
}

/* 💖 Final YES */
yesBtn.addEventListener("click", () => {
  question.innerHTML =
    "YAYYYY!!! 💖<br>Appu chose Annu again!<br>2 years down, forever to go 💍";
  image.src = "images/yes.png";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  fireworks();
});

/* 😭 NO double-click ending */
noBtn.addEventListener("dblclick", () => {
  question.innerHTML =
    "Oh nooo 😭<br>Annu will still love you forever 💖";
  image.src = "images/no.png";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

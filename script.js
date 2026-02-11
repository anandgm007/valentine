let level = 1;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const image = document.getElementById("sceneImage");

/* 😈 Move NO button */
function moveNoButton() {
  const x = Math.random() * 260;
  const y = Math.random() * 140;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

/* ❤️ Floating hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 600);

/* 🎆 Fireworks */
function fireworks() {
  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.backgroundColor =
      ["#ff4d6d", "#ffd166", "#06d6a0", "#4d96ff"][
        Math.floor(Math.random() * 4)
      ];

    confetti.style.setProperty(
      "--x",
      `${(Math.random() - 0.5) * 300}px`
    );
    confetti.style.setProperty(
      "--y",
      `${(Math.random() - 0.5) * 300}px`
    );

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 1200);
  }
}

/* 💕 YES button logic */
yesBtn.addEventListener("click", () => {
  if (level === 1) {
    level = 2;
    question.innerHTML =
      "Are you REALLY sure you won’t be Annu’s Valentine this year? 😏";
    image.src = "images/level2.png";
    noBtn.innerText = "STILL NO 😈";
    yesBtn.innerText = "YES 🥰";
  } else {
    question.innerHTML =
      "YAYYYY!!! 💖<br>Appu chose Annu again!<br>2 years down, forever to go 💍";
    image.src = "images/yes.png";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
    fireworks();
  }
});

/* 😭 Double-click NO = funny ending */
noBtn.addEventListener("dblclick", () => {
  question.innerHTML =
    "Oh nooo 😭<br>Annu will still love you forever 💖";
  image.src = "images/no.png";
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
});

let exp = 0;
let level = 1;

function updateUI() {
  document.getElementById("exp").innerText = exp;
  document.getElementById("level").innerText = level;
  document.getElementById("expBar").value = exp;
}

function studyQuest() {
  exp += 20;
  levelUp();
}

function exerciseQuest() {
  exp += 5;
  levelUp();
}

function levelUp() {
  if (exp >= 100) {
    exp = exp - 100;
    level++;
    alert("LEVEL UP! 🔥 You reached Level " + level);
  }
  updateUI();
}

function funJoke() {
  const jokes = [
    "Confidence is temporary, NCERT is permanent 📘",
    "I planned full syllabus… then thermodynamics happened 😭",
    "JEE taught me time travel – syllabus goes back every day ⏳",
    "April attempt = redemption arc 🔥"
  ];
  const random = Math.floor(Math.random() * jokes.length);
  document.getElementById("joke").innerText = jokes[random];
}

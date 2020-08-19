var mainMenu = document.querySelector(".menu-area");
var gameArea = document.querySelector(".game-area");
var levelArea = document.querySelector(".level-area");
var aboutArea = document.querySelector(".about-area");
var inputArea = document.querySelector("#input");
var setWord = document.querySelector("#word");
var setScore = document.querySelector("#score");
var setTime = document.querySelector("#time");
var gameover = document.querySelector(".game-over");
var finalScore = document.querySelector("#finalscore");
var toast = document.querySelector("#toast");

function startGame() {
  mainMenu.style.display = "none";
  gameArea.style.display = "block";
  inputArea.focus();
  getWord();
  timeInterval = setInterval(timeUpdate, 1000);
  toast.className = "show";
  toast.innerHTML = "Level One";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
function startLevel() {
  mainMenu.style.display = "none";
  levelArea.style.display = "block";
}
function startAbout() {
  mainMenu.style.display = "none";
  aboutArea.style.display = "block";
}
function backButton() {
  mainMenu.style.display = "block";
  if (aboutArea.style.display == "block" || gameArea.style.display == "block") {
    mainMenu.style.display = "block";
    gameArea.style.display = "none";
    aboutArea.style.display = "none";
  }
}
function resetButton() {
  time = 15;
  getWord();
  score = 0;
  setScore.innerHTML = score;
  inputArea.value = "";
  inputArea.focus();
  toast.className = "show";
  toast.innerHTML = "Game Restarted";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
function tryAgain() {
  gameover.style.display = "none";
  gameArea.style.display = "block";
  startGame();
  time = 15;
  score = 0;
  setScore.innerHTML = score;
  inputArea.value = "";
}
var words = [
  "solo",
  "learn",
  "sololearn",
  "knock",
  "big",
  "java",
  "python",
  "hook",
  "corona",
  "vaccine",
  "hand",
  "wash",
  "safe",
  "home",
  "two",
  "who",
  "none",
  "not",
  "you",
  "love",
  "hate",
  "normal",
  "really",
  "samsung",
  "nokia",
  "arafat",
  "facebook",
  "google",
  "twitter",
  "tiger",
  "lion",
  "secret",
  "noob",
  "micro",
  "hello",
  "world",
  "super",
  "golang",
  "html",
  "script",
  "learnsolo",
  "bye",
  "inter",
  "awesome",
  "never",
  "css",
  "hard",
  "gocorona",
  "elonmusk",
  "nomercy",
];

var randomWord;
var score = 0;
var time = 15;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
function getWord() {
  randomWord = getRandomWord();
  setWord.innerHTML = randomWord;
}
function scoreUpdate() {
  score += 5;
  setScore.innerHTML = score;
}
function timeUpdate() {
  time--;
  setTime.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}
var timeInterval;
function gameOver() {
  gameover.style.display = "block";
  gameArea.style.display = "none";
  finalScore.innerHTML = `${score}`;
}

inputArea.addEventListener("input", (e) => {
 var textInsert=e.target.value.toLowerCase();  ;
  if (textInsert === randomWord) {
    getWord();
    scoreUpdate();
    e.target.value = "";

  
    time += 3;
    timeUpdate();
  }
});

function levelTwo() {
  toast.className = "show";
  toast.innerHTML = "No level right now";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
(function () {
  var myVar= setTimeout(showPage, 3000);
function showPage(){
    document.getElementById("load").style.display = "none";
    document.getElementById("main").style.visibility = "visible";
    alert("Coded By - C-Walk Sanju.. \nCredits - Joshwa \nDont Forget To Comment Your Score");
}
}) ();
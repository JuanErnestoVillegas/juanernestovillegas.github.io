//Almacenar en variables los elementos del juego
let buttons = document.getElementsByClassName('simon-button'),
  strict = document.getElementById('link-strict'),
  strictIcon = document.getElementById('strict'),
  reset = document.getElementById('link-reset'),
  steps = document.getElementById('score'),
  play = document.getElementById('play'),
  isStrict = false,
  audio = [],
  round,
  game;

 
audio[0] = new Audio("./assets/audio/simonSound1.mp3");
audio[1] = new Audio("./assets/audio/simonSound2.mp3");
audio[2] = new Audio("./assets/audio/simonSound3.mp3");
audio[3] = new Audio("./assets/audio/simonSound4.mp3");
audio[4] = new Audio("./assets/audio/Simon-error.mp3");

//Cambia la opacidad de los 4 botones
for (let button = 0; button < buttons.length; button++) {
  buttons[button].style.opacity = 0.2;
}

//
function Game() {
  this.playerTurn = false;
  this.pattern = []; //Array de patrones
  this.steps = 1;  //Primera ronda
}

//Juego Nuevo
function newGame() {
  game = new Game();
  steps.innerHTML = "01";   //N° de ronda
  setTimeout(fadeIntro, 250);  //Intro
  setTimeout(newRound, 2500);   //Nueva Ronda
}

//Ronda
function Round() {
  game.pattern.push(Math.floor(Math.random() * 4));
  this.patternLength = game.steps;
  this.pattern = game.pattern;
  this.playerPattern = [];
  this.counter = 0;
  this.speed = 1200 - this.patternLength * 20;
}

function newRound() {
  round = new Round();
  showPattern();
  console.log(round.pattern); // HINT
}

//Muestra el patron a seguir
function showPattern() {
  game.playerTurn = false;
  play.innerHTML = '<i class="far fa-circle"></i>';
  for (var x = 0; x < round.patternLength; x++) {
    setTimeout(buttonGlow.bind(null, round.pattern[x],500), round.speed * x);  //Resplandor o brillo en botón
  }
  setTimeout(function() {
    game.playerTurn = true;
    play.innerHTML = '<i class="far fa-circle"></i>';
  }, round.speed * round.patternLength);
}

//Registra el botón pulsado y verifica la concordancia con el patrón 
function buttonClick(button) {
  if (game.playerTurn) {
    var buttonIndex = button.target.id;
    round.playerPattern.push(parseInt(buttonIndex));
    buttonGlow(button);
    check();
  }
}

//Verificar la concordancia con el patrón según la ronda
function check() {
  if (round.playerPattern[round.counter] === round.pattern[round.counter]) {
    round.counter++;
    if (round.counter === round.patternLength) {
      game.playerTurn = false;
      game.steps++;
      if (game.steps === 21) {  //21 rondas
        steps.innerHTML = '<i class="fas fa-trophy"></i>';  //Trofeo Winner
        setTimeout(newGame, 4000);
      } else {
        steps.innerHTML = game.steps < 10 ? "0" + game.steps : game.steps;
        setTimeout(newRound, 1500);
      }
    }
  } else if (isStrict) {
    steps.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
    audio[4].play(); //Error
    setTimeout(newGame, 2000);
  } else {
    game.playerTurn = false;
    round.counter = 0;
    round.playerPattern = [];
    steps.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    setTimeout(function() {
      steps.innerHTML = game.steps < 10 ? "0" + game.steps : game.steps;
      showPattern();
    }, 1500);
  }
}

//Función para resplandor o brillo en botón
function buttonGlow(button, delay, fadeSpeed) {
  var pressed = button.target === undefined ? button : button.target.id;
  buttons[pressed].style.opacity = 1;
  audio[pressed].play();
  setTimeout(
    fade.bind(null, pressed, fadeSpeed !== undefined ? fadeSpeed : 100),
    delay !== undefined ? delay : 100
  );
}

//Desactiva modo Estricto
function toggleStrict() {
  isStrict = !isStrict;
  strictIcon.innerHTML = isStrict ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times"></i>';
}

//Desvanecerse
function fade(buttonIndex, fadeSpeed) {
  buttons[buttonIndex].style.opacity -= 0.1;
  if (buttons[buttonIndex].style.opacity > 0.2) {
    setTimeout(fade.bind(null, buttonIndex), fadeSpeed);
  }
}

//Presentación o Intro antes de comenzar el juego
function fadeIntro() {
  for (var button = 0; button < buttons.length; button++) {
    setTimeout(buttonGlow.bind(null, button), 400 * button);
  }
}


(function() {
  newGame();
  reset.onclick = newGame;
  strict.onclick = toggleStrict;
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onmousedown = buttonClick;
  }
})();


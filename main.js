let min = 1,
  max = 10,
  winningNum = getRandomNumber(min,max),
  guessessLeft = 3;

// UI ELEMENTS
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// ASSIGN UI MIN AND MAX

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});
//LISTEN FOR GUESS

guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter a number between ${min} and  ${max}`, "red");
  }


  // CHECK IF WON
  else if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    guessessLeft -= 1;
    if (guessessLeft === 0) {
      gameOver(false, `Game Over, You lost. The correct number was ${winningNum}`);
    } else {
      guessInput.style.borderColor = "red";
      setMessage(`${guess} is not correct, ${guessessLeft} guesses left`, "red");
      guessInput.value = "";
    }
  }


});

// ERROR MESSAGE
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}



function getRandomNumber(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}

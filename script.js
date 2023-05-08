  var score = 0;
  var round = 0;
  var maxRounds = 20;
  var currentRandomDate;
  var date;
  
  function randomDate() {
    var year = Math.floor(Math.random() * 400) + 1600;
    var month = Math.floor(Math.random() * 12) + 1;
    var day = Math.floor(Math.random() * 28) + 1;
    return new Date(year, month - 1, day);
  }
	
function checkAnswer(button) {
  var dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
  if (button.textContent === dayOfWeek) {
    button.classList.add('btn-correct');
    score++;
  } else {
    button.classList.add('btn-incorrect');
    var correctButton = document.querySelector('.btn-answer:nth-of-type(' + (['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(dayOfWeek) + 1) + ')');
    correctButton.classList.add('btn-correct');
  }
  var buttons = document.querySelectorAll('.btn-answer');
  buttons.forEach(function(button) {
    button.disabled = true;
  });
  setTimeout(function() {
    resetButtons();
    newRound();
  }, 1000);
}

  function resetButtons() {
    var buttons = document.querySelectorAll('.btn-answer');
    buttons.forEach(function(button) {
      button.classList.remove('btn-correct', 'btn-incorrect');
      button.disabled = false;
    });
    document.getElementById('answer').textContent = "";
  }

function newRound() {
  resetButtons();
  round++;
  document.getElementById('round').textContent = round;
  if (round > maxRounds) {
    alert("Game over! You scored " + score + " points.");
    score = 0;
    round = 1; // reset the round to 1
    document.getElementById('score').textContent = score;
    document.getElementById('round').textContent = round;
  } else {
    document.getElementById('score').textContent = score;
	date = randomDate();
    document.getElementById('date').textContent = date.toLocaleDateString();
  }
}



  function newGame() {
    resetButtons();
    score = 0;
    round = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('round').textContent = round;
    newRound();
  }

  newRound(); // call newRound function to generate the first date






function applyYearRange() {
  var minYearInput = document.getElementById("min-year");
  var maxYearInput = document.getElementById("max-year");
  var minYear = parseInt(minYearInput.value);
  var maxYear = parseInt(maxYearInput.value);

  // Validate input values
  if (isNaN(minYear) || isNaN(maxYear) || minYear < 100 || maxYear > 9999 || minYear > maxYear) {
    alert("Please enter a valid year range");
    return;
  }

  // Update randomDate function to use selected year range
  randomDate = function() {
    var year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
    var month = Math.floor(Math.random() * 12) + 1;
    var day = Math.floor(Math.random() * 28) + 1;
    return new Date(year, month - 1, day);
  };

  // Start new game with selected year range
  newGame();
}




const donateButton = document.getElementById("donate-button");
donateButton.addEventListener("click", function() {
  // Replace this with your donation link or form
  window.location.href = "https://www.paypal.com/donate/?hosted_button_id=WAYSUFGVA95MC";
});

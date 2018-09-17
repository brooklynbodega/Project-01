// Test for JS

console.log("this is the level one page");

/* Create a game where a user clicks on colored cells to stop their changing background colors. Once all background colors match, user wins the game. */

// Declare all cells for animation manipulation later.
const cell0 = $('#cell0');
const cell1 = $('#cell1');
const cell2 = $('#cell2');
const cell3 = $('#cell3');
const cell4 = $('#cell4');
const cell5 = $('#cell5');
const cells = $('.cell-1');
const grid = $('.grid-1');
let colors = [];
let countdown = 16;
let countdownTimer;
const startButton = $('#start-game-btn');
// Event listener to begin the game.
startButton.click(startGame);

// Function for gameplay.
function startGame() {
  countdown = 15;
  console.log("start button clicked!");
  // Hide start game button once begun
  startButton.hide();
  // Add CSS color change effect
  cells.addClass('color-level-1');

  // Begin the countdown timer.
  countdownTimer = setInterval(function startCountdown() {
    countdown--;
    console.log(countdown);
    if (countdown >= 0) {
      $('.countdown').html(`Time Left: ${countdown} Seconds`);
    } else if (countdown === -1) {
      alert("You ran out of time! ⌛️");
      resetGame();
    }
  }, 1000);

  /* Create a click event that pauses the animation of the cells being clicked on.
  Help from Rachel & Celeste <3 */
  cells.click(function (event) {
    // console.log(event);
    $(this).off('click');
    event.target.style.webkitAnimationPlayState = "paused";
    console.log($(event.target).css('background-color'));
    colors.push($(event.target).css('background-color'));

    // Check for a match between all the cells.
    function checkColors() {
      if (colors.length === 6) {
        clearInterval(countdownTimer);
        if ((colors[0] === colors[1]) && (colors[0] === colors[2]) && (colors[0] === colors[3]) && (colors[0] === colors[4]) && (colors[0] === colors[5])) {
          // If all 6 cells match, user wins and game is reset.
          alert("You won! 🏆");
          resetGame();
          $('#next-level-btn').show();
        } else {
          alert("Awww, you lost 😭");
          resetGame();
        }
      }
    };
    checkColors();
  })
}

// Retry level page
function retryLevel() {
  location.reload();
}

// Reset Cells
function resetGame() {
  $('#retry-btn').show();
  colors = [];
  countdown = 16;
  $('.countdown').html(`Time Left: 15 Seconds`);
  cells.removeClass('color-level-1');
  clearInterval(countdownTimer);
}


////////////////////////////////////////

$(document).ready(function () {
  $(document).keyup(handleKeyPress);
});
// create a function for the key press
function handleKeyPress (e) {
  if (e.which == 81) {
    movePlayer(1);
  }

  if (e.which == 80) {
    movePlayer(2);
  }
}
// create a function to make the player move

function movePlayer (playerInt) {
  var cell = $('.active' + playerInt);
  var nextCell = $(cell).next();

  checkForVictory(nextCell, playerInt);

  cell.removeClass();
  nextCell.addClass('active' + playerInt);
}
// checking for the winner function 
function checkForVictory (nextCell, playerInt) {
   if (!$(nextCell).is('td')) {
    alert('Player ' + playerInt + ' wins!');
    window.location.reload();
  }
}
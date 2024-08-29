function playGame(player1) {
  const choices = ['stone', 'paper', 'scissors'];
  const player2 = choices[Math.floor(Math.random() * choices.length)];

  let result;
  if (player1 === player2) {
    result = "It's a tie!";
  } else if (
    (player1 === 'stone' && player2 === 'scissors') ||
    (player1 === 'scissors' && player2 === 'paper') ||
    (player1 === 'paper' && player2 === 'stone')
  ) {
    result = 'You Win!';
  } else {
    result = 'You Lose!';
  }

  // result
  console.log(`player 2 choose ${player2}`);
  console.log(result);
}

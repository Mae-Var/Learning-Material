/*
const gameOptions = {
  Rock: 'rock',
  Paper: 'paper',
  Scissors: 'scissors',
};
*/
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    console.log(`You have selected ${userInput}.`);
  } else {
    console.log('You have chosen an invalid type. Please, try again.');
  }
  return userInput;
};

const getComputerChoice = () => {
  let comPick = Math.floor(Math.random()*3);
  switch (comPick) {
    case 0:
      return 'rock';
    case 1:
      return 'scissors';
    case 2:
      return 'paper';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You have won!';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'You have won!';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'You have won!';
  }
  return 'The computer won! ;(.';
};

const playGame = () => {
  let userChoice2 = getUserChoice('paper');
  let computerChoice2 = getComputerChoice();
  console.log(`The computer selected ${computerChoice2}.`);
  console.log(determineWinner(userChoice2, computerChoice2));
};

playGame();
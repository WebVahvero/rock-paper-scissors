let computersScore = 0
let playersScore = 0

const getComputerChoice = () => {
  let computerGuess = Math.floor(Math.random() * 3)
  switch(computerGuess) {
    case 0:
      return 'rock'
      break;
     case 1:
      return 'paper'
      break;
     case 2:
      return 'scissors'
      break;
     default:
      return 'error'
  }
}

const rpsGame = () => {
  const playerSelection = prompt('rock, paper or scissors?').toLowerCase();

  if (!playerSelection) {
    computersScore++
    return 'Need Input!'
  }

  const computerSelection = getComputerChoice()
  
  if (playerSelection != computerSelection) {
    if(playerSelection == 'rock' && computerSelection == 'paper') {
      computersScore++
      return `You LOSE! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
      computersScore++
      return `You LOSE! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
      computersScore++
      return `You LOSE! ${computerSelection} beats ${playerSelection}`
    }
    else {
      playersScore++
      return `You WIN! ${playerSelection} beats ${computerSelection}`
    }
  }
  else {
    return 'DRAW!'
  }
}

for (let i = 0; i < 5; i++) {
  console.log(rpsGame())
  console.log(`Computer score: ${computersScore}`)
  console.log(`Players score: ${playersScore}`)
  console.log('')
}

if (computersScore == playersScore) {
    console.log('The game ends in a draw')
}

console.log(computersScore < playersScore ? 'You won the game!' : 'The computer won the game!')
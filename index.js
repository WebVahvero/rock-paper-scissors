let computersScore = 0
let playersScore = 0

const defaultTxtColor = '#ffffff'
const hoverTxtColor = "#161F6D"

const container = document.getElementById('container')

const h1 = document.createElement('h1')
h1.innerHTML = '<span class="rock">Rock\u{1F91F}</span> <span class="paper">Paper\u{1FAF1}</span> <span class="scissors">Scissors\u{270C}</span>';
container.appendChild(h1)

const btnWrapper = document.createElement('div')
btnWrapper.classList.add('btn-wrapper')
container.appendChild(btnWrapper)

const rockBtn = document.createElement('button')
rockBtn.setAttribute('id', 'rock')
rockBtn.classList.add('btn')
rockBtn.textContent = '\u{1F91F}';

const paperBtn = document.createElement('button')
paperBtn.setAttribute('id', 'paper')
paperBtn.classList.add('btn')
paperBtn.textContent = '\u{1FAF1}'

const scissorsBtn = document.createElement('button')
scissorsBtn.setAttribute('id', 'scissors')
scissorsBtn.classList.add('btn')
scissorsBtn.textContent = '\u{270C}'

btnWrapper.appendChild(rockBtn)
btnWrapper.appendChild(paperBtn)
btnWrapper.appendChild(scissorsBtn)

const responseWrapper = document.createElement('div')
responseWrapper.classList.add('response-wrapper')
container.appendChild(responseWrapper)

const h2 = document.createElement('h2')
const p = document.createElement('p')

responseWrapper.appendChild(h2)
responseWrapper.appendChild(p)

const gameBtns = document.querySelectorAll(".btn")
const h1SpanR = document.querySelector(".rock")
const h1SpanP = document.querySelector(".paper")
const h1SpanS = document.querySelector(".scissors")

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

gameBtns.forEach((gamebtn) => {
  gamebtn.addEventListener('mouseover', (e) => {

    switch(e.target.id) {
      case "rock":
        h1SpanR.style.color = hoverTxtColor
      break
      case "paper":
        h1SpanP.style.color = hoverTxtColor
      break
      case "scissors":
        h1SpanS.style.color = hoverTxtColor
      break
    }

  });
});

gameBtns.forEach((gamebtn) => {
  gamebtn.addEventListener('mouseleave', (e) => {

    switch(e.target.id) {
      case "rock":
        h1SpanR.style.color = defaultTxtColor
      break
      case "paper":
        h1SpanP.style.color = defaultTxtColor
      break
      case "scissors":
        h1SpanS.style.color = defaultTxtColor
      break
    }

  });
});

gameBtns.forEach((gamebtn) => {
  gamebtn.addEventListener('click', (e) => {

    h2.innerHTML = ''
    p.innerHTML = ''
    
    const playerSelection = e.target.id

    const computerSelection = getComputerChoice()
  
    if (playerSelection != computerSelection) {
      if(playerSelection == 'rock' && computerSelection == 'paper') {
        computersScore++
        h2.innerHTML = `You <span class="highlight-lose">LOSE!</span><br>${computerSelection} beats ${playerSelection}`
        p.innerHTML = `Your score: ${playersScore}<br> Computers Score: ${computersScore}`
      }
      else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computersScore++
        h2.innerHTML = `You <span class="highlight-lose">LOSE!</span><br>${computerSelection} beats ${playerSelection}`
        p.innerHTML = `Your score: ${playersScore}<br> Computers Score: ${computersScore}`
      }
      else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computersScore++
        h2.innerHTML = `You <span class="highlight-lose">LOSE!</span><br>${computerSelection} beats ${playerSelection}`
        p.innerHTML = `Your score: ${playersScore}<br> Computers Score: ${computersScore}`
      }
      else {
        playersScore++
        h2.innerHTML = `You <span class="highlight-win">WIN!</span> <br>${playerSelection} beats ${computerSelection}`
        p.innerHTML = `Your score: ${playersScore}<br> Computers Score: ${computersScore}`
      }
    }
    else {
      h2.innerHTML = '<span class="highlight-draw">DRAW!</span>'
      p.innerHTML = `Your score: ${playersScore}<br> Computers Score: ${computersScore}`
    }

    if (computersScore >= 5 || playersScore >= 5){
      determineWinner()
    }

  });
});

function determineWinner() {

  if (computersScore == playersScore) {
    p.innerHTML = 'The game ends in a <span class="highlight-draw">DRAW!</span>';
    computersScore = 0
    playersScore = 0
  }
  
  p.innerHTML = `${computersScore < playersScore ? 'You <span class="highlight-win">won</span> the game!' : 'The computer won the game!'}`
  computersScore = 0
  playersScore = 0
}
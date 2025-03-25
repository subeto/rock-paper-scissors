let playerScore = 0;
let computerScore = 0;
let round = 0;

  function getComputerChoice() {
    let random = Math.random();
  
    let computerChoice;
    if(random < 1/3) {
      computerChoice = "rock";
    }
    else if(random < 2/3) {
      computerChoice = "paper";
    }
    else {
      computerChoice = "scissors"
    }
    return computerChoice;
  };
  
  function getPlayerChoice() {
    let playerChoice = prompt("Write your choice Rock/Paper/Scissors")
    return playerChoice;
  };
  
  
  function playRound() {

    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    
    console.clear();

    if(playerChoice == "rock") {
      if(computerChoice == "scissors") {
        console.log("You Won!, +1 point")
        playerScore++;
        round++;
      }
      else if(computerChoice == "paper") {
        console.log("Computer Won! +1 point");
        computerScore++;
        round++;
      }
      else {
        console.log("It's a draw! Both chose Rock");
        round++;
      };
    }
    else if(playerChoice == "paper") {
      if(computerChoice == "scissors") {
        console.log("Computer Won! +1 point")
        computerScore++;
        round++;
      }
      else if(computerChoice == "rock") {
        console.log("You Won!, +1 point");
        playerScore++;      
        round++;
      }
      else {
        console.log("It's a draw! Both chose Paper");
        round++;
      };
    }
    else if(playerChoice == "scissors") {
      if(computerChoice == "paper") {
        console.log("You Won!, +1 point")
        playerScore++;
        round++;
      }
      else if(computerChoice == "rock") {
        console.log("Computer Won! +1 point");
      computerScore++;      
      round++
      }
      else {
        console.log("It's a draw! Both chose Scissors");
        round++;
      };
    }
    
    else {
      console.log('Invalid Input')
    };
    console.log(round)
    console.log(`You: ${playerChoice}`)
    console.log(`Computer: ${computerChoice}`)
  };
  
  
  function playGame() {
    if(round < 6) {
      for(let i = 0; i < 6; i++) {
        playRound();
        console.log(`Your score: ${playerScore}`)
        console.log(`Computer score: ${computerScore}`)
      }
    }
    else {
      console.log("Game over")
    }
  };
  playGame();
  console.log(round)
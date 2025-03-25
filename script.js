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
}


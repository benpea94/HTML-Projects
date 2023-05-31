const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else {
      console.log("ERROR YER BASTARD");
    }
  };
  
  console.log(getUserChoice("poo"));
  
  function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0: 
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2: 
        return 'scissors';
        break;
    }
  };
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'It is a tie.'
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'the computer won!';
      } else {
        return 'You won!';
      }
    }
    }
     if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'the computer won!';
      } else {
        return 'You won!';
      }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
      return 'the computer won!';
    } else {
      return 'You won!';
    }
  };
  
  const playGame = () => {
     const userChoice = getUserChoice('scissors');
     const computerChoice = getComputerChoice();
     console.log('You threw: ' + userChoice);
     console.log('The computer threw: ' + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));
  };
   
  playGame();
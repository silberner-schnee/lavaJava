const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    console.log('Error'); 
  }
  }                                      //checkpoint
  const getComputerChoice = () => {
    comChoice = Math.floor(Math.random() * 3);
    switch (comChoice) {
      case 0:
        return 'rock';
      case 1: 
        return 'paper';
      case 2: 
        return 'scissors';
    }
  }                                          //checkpoint 
  const determineWinner = (userChoice, comChoice) => {
    if (userChoice === comChoice) {
      return 'The game was a tie.';
    }
   else if (userChoice === 'rock') {
      if (comChoice === 'paper') {
        return 'computer has won.';
      } else {
        return 'user has won.';
      }
  } else if (userChoice === 'paper') {
    if (comChoice === 'scissors') {
      return 'computer has won.';
    } else {
      return 'user has won.';                 //checkpoint
    }
  }else if (userChoice === 'scissors') {
    if (comChoice === 'rock') {
      return 'computer has won.';
    } else {
      return 'user has won.';
    }
  }else if (userChoice === 'bomb') {
    return 'user has won - bomb trumps all';
  }
  }
  function playGame() {
    //user's choice
    userChoice = getUserChoice('bomb');
    console.log(userChoice);
    //computer's choice
    computerChoice = getComputerChoice(); 
    console.log(computerChoice);
    //determine the winner
    console.log(determineWinner(userChoice, computerChoice));
  }
  playGame()
  



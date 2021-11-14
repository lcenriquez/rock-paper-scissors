function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function intValueOfPlay(play) {
	switch (play) {
		case "rock":
			return 3;
			break;
		case "scissors":
			return 2;
			break;
		case "paper":
			return 1;
			break;
		default:
			return null;
	}
}

function computerPlay() {
	let random = randomIntFromInterval(1,3);

	if (random===1) {
		return "rock";
	} else if (random===2) {
		return "paper";
	} else {
		return "scissors";
	}
}

function playRound(playerSelection, computerSelection) {
	let playerInt = intValueOfPlay(playerSelection.toLowerCase());
	let computerInt = intValueOfPlay(computerSelection);

	if (playerInt === null) {
		return "Invalid user input";
	}

	if (playerInt===1 && computerInt===3) {
		return {winner: 1,message: "You Win! Paper beats Rock"};
	} else if (playerInt===3 && computerInt==1) {
		return {winner: 2, message: "You Lose! Paper beats Rock"};
	} else {
		if (playerInt > computerInt) {
			return {winner: 1, message: `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`};
		} else if (playerInt < computerInt) {
			return {winner: 2, message: `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`};
		} else {
			return {winner: 0, message: `It's a tie! ${capitalizeFirstLetter(computerSelection)} equals ${capitalizeFirstLetter(playerSelection)}`};
		}
	}
}

 function game() {
 	let playerWins = 0;
 	let computerWins = 0;

 	for (let i=1;i<=5;i++) {
 		let userInput = prompt("Enter rock, paper or scissors");
		let result = playRound(userInput,computerPlay());
		result.winner === 1 ? playerWins += 1 : null;
		result.winner === 2 ? computerWins += 1 : null;
		console.log(result.message);
 	}

 	if (playerWins > computerWins) {
 		console.log("You win!");
 	} else if (playerWins < computerWins) {
 		console.log("You lose!");
 	} else {
 		console.log("It's a tie!");
 	}
 }

 game();
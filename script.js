function getComputerChoice() {
    let choices = Math.random();
    if (choices < 0.3) {
        return "rock";
    } else if (choices <= 0.6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    while (true) {
        let userChoice = prompt("Rock, Paper, Scissors... shoot!");
        if (userChoice.toLowerCase() === "rock" || userChoice.toLowerCase() === "paper" || userChoice.toLowerCase() === "scissors") {
            return userChoice;
        }
        else {
            alert("Invalid choice. Please try again.");
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            return "Paper beats rock. You lose!";
        } else if (humanChoice === computerChoice) {
            return "Rock on rock. It's a tie!";
        } else {
            humanScore++;
            return "Rock beats scissors. You win!";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            return "Scissors beats paper. You lose!";
        } else if (humanChoice === computerChoice) {
            return "Paper on paper. It's a tie!";
        } else {
            humanScore++;
            return "Paper beats rock. You win!";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            return "Rock beats scissors. You lose!";
        } else if (humanChoice === computerChoice) {
            return "Scissors on scissors. It's a tie!";
        } else {
            humanScore++;
            return "Scissors beats paper. You win!";
        }
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        console.log(result);
    }
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    if (humanScore < computerScore) {
        console.log("You lose the game.");
    } else if (humanScore === computerScore) {
        console.log("It's a tie. Refresh to try again.");
    } else {
        console.log("You win!");
    }
}

playGame();
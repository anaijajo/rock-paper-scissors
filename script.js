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

console.log(getHumanChoice());
function getComputerChoice() {
    let choices = Math.random();
    if (choices < 0.3) {
        return "rock";
    } else if (choices >= 0.3 && choices <= 0.6) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());
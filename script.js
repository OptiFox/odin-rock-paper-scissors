function getComputerChoice() {
    const random = Math.floor(Math.random() * 100);

    return (random <= 33) ? 'rock' : (random <= 66) ? 'paper' : 'scissors';
}

function getHumanChoice() {
    return prompt("Enter your choice (rock/paper/scissors): ");
}

let humanScore = 0;
let computerScore = 0; 

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log("It's a tie!");
        } else if (computerChoice === 'paper') {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if (computerChoice === 'scissors') {
            console.log("You won! Rock beats Scissors.");
            humanScore++;
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log("You won! Paper beats Rock.");
            humanScore++;
        } else if (computerChoice === 'paper') {
            console.log("It's a tie!");
        } else if (computerChoice === 'scissors') {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else if (computerChoice === 'paper') {
            console.log("You won! Scissors beats Paper.");
            humanScore++;
        } else if (computerChoice === 'scissors') {
            console.log("It's a tie!");
        }
    }
}

function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    const MAX_ROUND = 5;

    for (let rounds = 1; rounds <= MAX_ROUND; rounds++) {
        console.log(`\nRound #${rounds}\n`);
        playRound(humanSelection, computerSelection);

        console.log("\nHuman Score: " + humanScore);
        console.log("Computer Score: " + computerScore);

        if (rounds < 5) {
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
        }
    }
}

playGame();
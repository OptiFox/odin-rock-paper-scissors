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

    const capitalizeHuman = humanChoice[0].toUpperCase() + humanChoice.slice(1);
    const capitalizeComputer = computerChoice[0].toUpperCase() + computerChoice.slice(1);

    let outputTie = "It's a tie!";
    let outputWin = `You won! ${capitalizeHuman} beats ${capitalizeComputer}.`;
    let outputLose = `You lose! ${capitalizeComputer} beats ${capitalizeHuman}.`;

    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log(outputTie);
        } else if (computerChoice === 'paper') {
            console.log(outputWin);
            computerScore++;
        } else if (computerChoice === 'scissors') {
            console.log(outputLose);
            humanScore++;
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log(outputWin);
            humanScore++;
        } else if (computerChoice === 'paper') {
            console.log(outputTie);
        } else if (computerChoice === 'scissors') {
            console.log(outputLose);
            computerScore++;
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log(outputLose);
            computerScore++;
        } else if (computerChoice === 'paper') {
            console.log(outputWin);
            humanScore++;
        } else if (computerChoice === 'scissors') {
            console.log(outputTie);
        }
    }
}

function playGame() {
    const MAX_ROUND = 5;

    for (let rounds = 1; rounds <= MAX_ROUND; rounds++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        console.log(`\nRound #${rounds}\n`);
        playRound(humanSelection, computerSelection);

        console.log("\nHuman Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
}

playGame();
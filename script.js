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

    let outputTie = () => console.log("It's a tie!");
    let outputWin = () => {
        console.log(`You won! ${capitalizeHuman} beats ${capitalizeComputer}.`);
        humanScore++;
    };
    let outputLose = () => {
        console.log(`You lose! ${capitalizeComputer} beats ${capitalizeHuman}.`);
        computerScore++;
    };

    if (humanChoice === computerChoice) {
        outputTie();
    }

    if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            outputLose();
        } else if (computerChoice === 'scissors') {
            outputWin();
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            outputWin();
        } else if (computerChoice === 'scissors') {
            outputLose();
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            outputLose();
        } else if (computerChoice === 'paper') {
            outputWin();
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
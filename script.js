function getComputerChoice() {
    const random = Math.floor(Math.random() * 100);

    return (random <= 33) ? 'rock' : (random <= 66) ? 'paper' : 'scissors';
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const capitalizeHuman = humanChoice[0].toUpperCase() + humanChoice.slice(1);
    const capitalizeComputer = computerChoice[0].toUpperCase() + computerChoice.slice(1);

    let outputWin = () => {
        humanScore++;
        return `You won! ${capitalizeHuman} beats ${capitalizeComputer}.`;
    };
    let outputLose = () => {
        computerScore++;
        return `You lose! ${capitalizeComputer} beats ${capitalizeHuman}.`;
    };

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            return outputLose();
        } else if (computerChoice === 'scissors') {
            return outputWin();
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            return outputWin();
        } else if (computerChoice === 'scissors') {
            return outputLose();
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return outputLose();
        } else if (computerChoice === 'paper') {
            return outputWin();
        }
    }
}

const buttons = document.querySelectorAll(".btn button")
let humanSelection = "";

const displayScore = document.querySelector(".score");
const displayHuman = document.querySelector(".human");
const displayComputer = document.querySelector(".computer");

const displayResult = document.querySelector(".result");
const result = document.createElement("p");

displayHuman.textContent = "Human Score: " + humanScore;
displayComputer.textContent = "Computer Score: " + computerScore;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanSelection = button.textContent;
        let computerSelection = getComputerChoice();

        if (humanSelection !== "") {
            result.textContent = playRound(humanSelection, computerSelection);
        }

        displayHuman.textContent = "Human Score: " + humanScore;
        displayComputer.textContent = "Computer Score: " + computerScore;

        if (humanScore >= 5) {
            result.textContent = "Game ended! You won!";
            for (const button of buttons) button.disabled = true;
        } else if (computerScore >= 5) {
            result.textContent = "Game ended! Computer won!";
            for (const button of buttons) button.disabled = true;
        }
    });
})

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
    for (const button of buttons) button.disabled = false;
    humanScore = 0;
    computerScore = 0;

    displayHuman.textContent = "Human Score: " + humanScore;
    displayComputer.textContent = "Computer Score: " + computerScore;
})

displayScore.appendChild(displayHuman);
displayScore.appendChild(displayComputer);

displayResult.appendChild(result);
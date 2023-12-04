const selection = ["rock", "paper", "scissors"];
const playerButtons = document.querySelectorAll('.playButton');
const resetButton = document.querySelector('#resetButton');
const computerSelectionField = document.querySelector('#computerSelectionField');
const playerSelectionField = document.querySelector('#playerSelectionField');
const gameResultField = document.querySelector("#gameResultField");

let computerScore = 0;
let playerScore = 0;

// Return random selection of rock, paper, or scissors
function getComputerChoice()
{
    let computerSelection = Math.floor(Math.random() * 3);
    return selection[computerSelection];
}

function playRound(playerSelection, computerSelection)
{
    // States:
    // 0 - Draw
    // 1 - Player win
    // 2 - Computer win
    // Check for draw
    if(playerSelection === computerSelection)
    {
        return 0;
    }
    
    if(playerSelection === "rock")
    {
        if(computerSelection === "paper") return 2;
    }
    
    if(playerSelection === "paper")
    {
        if(computerSelection === "scissors") return 2;
    }
    
    if(playerSelection === "scissors")
    {
        if(computerSelection === "rock") return 2;
    }
    return 1;
}

function scoreRound(score, playerScore, computerScore)
{
    if(score === 0)
    {
        gameResultField.textContent = "Draw. Play again.";
    }
    if(score === 1)
    {
        gameResultField.textContent = "Player wins round. Player score " + playerScore + ". Computer score " + computerScore + ".";
    }
    if(score === 2)
    {
        gameResultField.textContent = "Computer wins round. Player score " + playerScore + ". Computer score " + computerScore + ".";
    }
}

function playGame(playerChoice)
{
    if(computerScore > 4 )
    {
        playerSelectionField.textContent = "";
        computerSelectionField.textContent = "";
        gameResultField.textContent = "Computer Wins! Press reset to play again.";
    }

    if(playerScore > 4 )
    {
        playerSelectionField.textContent = "";
        computerSelectionField.textContent = "";
        gameResultField.textContent = "Player Wins! Press reset to play again.";
    }

    if(playerScore <= 4 && computerScore <= 4)
    {
        computerChoice = getComputerChoice();

        playerSelectionField.textContent = "Player selected " + playerChoice;
        computerSelectionField.textContent = "Computer selected " + computerChoice;

        let score = playRound(playerChoice, computerChoice);

        if(score === 1 ) {
            playerScore++;
        }
        if(score === 2 ) {
            computerScore++;
        }
        scoreRound(score, playerScore, computerScore);
    }

}

playerButtons.forEach((playerButton) => {

    playerButton.addEventListener('click', () => {
        playGame(playerButton.id);
    });
    
});

resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    gameResultField.textContent = "Game reset.";
});
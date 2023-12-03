
const selection = ["rock", "paper", "scissors"]
// Return random selection of rock, paper, or scissors
function getComputerChoice()
{
    let computerSelection = Math.floor(Math.random() * 3);
    console.log("Computer entered " + selection[computerSelection]);
    return computerSelection;
}

// Get player selection
function getPlayerChoice()
{
    let playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase();
    
    return playerSelection;
}

function parsePlayerInput()
{
    let invalid_input = 1;

    while(invalid_input)
    {
        let playerSelection = getPlayerChoice();

        console.log("Player entered " + playerSelection);
        // Parse input
        for(let i = 0; i < selection.length; i++)
        {
            if(playerSelection === selection[i])
            {
                invalid_input = 0;
                return i;
            }
        }
    }
}

// Play round of rock, paper, scissors
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
    
    if(playerSelection === 0)
    {
        if(computerSelection === 1) return 2;
    }
    
    if(playerSelection === 1)
    {
        if(computerSelection === 2) return 2;
    }
    
    if(playerSelection === 2)
    {
        if(computerSelection === 0) return 2;
    }
    return 1;
}

function scoreGame(score, playerWins, computerWins)
{
    if(score === 0)
    {
        console.log("Draw. Play again.");
    }
    if(score === 1)
    {
        console.log("Player wins round. Player score " + playerWins + ". Computer score " + computerWins + ".");
    }
    if(score === 2)
    {
        console.log("Computer wins round. Player score " + playerWins + ". Computer score " + computerWins + ".");
    }
}

function game()
{
    let computerWins = 0;
    let playerWins = 0;

    while(computerWins < 3 && playerWins < 3)
    {
        let playerSelection = parsePlayerInput();
        let computerSelection = getComputerChoice();

        let score = playRound(playerSelection, computerSelection);
        if(score === 1)
        {
            playerWins++;
        }
        if(score === 2)
        {
            computerWins++;
        }
        scoreGame(score, playerWins, computerWins);
    }

    console.log("Game end.")

}

game();
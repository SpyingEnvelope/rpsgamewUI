let computerResult;
let playerResult;
let playerScore = 0;
let computerScore = 0;
let playerOverallGameScore = 0;
let cpuOverallGameScore = 0;
let playerClick = document.querySelectorAll('.far');
let playerScoreTracker = document.querySelector('#playerscore');
let computerScoreTracker = document.querySelector('#computerscore');
let showWinner = document.querySelector('#winner');
let playerOverallScore = document.querySelector('#overallplayer');
let computerOverallScore = document.querySelector('#overallcomputer');
playerOverallScore.textContent = playerOverallGameScore;
computerOverallScore.textContent = cpuOverallGameScore;

function computerPlay () {
    let computerArray = ["ROCK", "PAPER", "SCISSORS"];
    computerResult = computerArray[Math.floor(Math.random()*computerArray.length)];
}

for (let i = 0; i < playerClick.length; i++) {
    playerClick[i].addEventListener('click', player1)
};

function player1(e) {
    let choice = e.target.id;
    choice = choice.toUpperCase();
    playerPlay(choice);
};


function playerPlay (playerChoice) {
    playerResult = playerChoice;
    playRound();
}

function playRound () {
    computerPlay();

    if (playerResult === 'ROCK' && computerResult === 'ROCK') {
        showWinner.textContent = 'CPU played rock as well. It\'s a draw!';
    }
    else if (playerResult === 'ROCK' && computerResult === 'PAPER') {
        showWinner.textContent = 'CPU played paper. You lose!';
        computerScore = ++computerScore;
    }
    else if (playerResult === 'ROCK' && computerResult === 'SCISSORS') {
        showWinner.textContent = 'CPU played scissors. You win!';
        playerScore = ++playerScore;
    }
    else if (playerResult === 'PAPER' && computerResult === 'ROCK') {
        showWinner.textContent = 'CPU played rock. You win!';
        playerScore = ++playerScore;
    }
    else if (playerResult === 'PAPER' && computerResult === 'PAPER') {
        showWinner.textContent = 'CPU played paper as well. It\'s a draw!';
    }
    else if (playerResult === 'PAPER' && computerResult === 'SCISSORS') {
        showWinner.textContent = 'CPU played scissors. You lose!';
        computerScore = ++computerScore;
    }
    else if (playerResult === 'SCISSORS' && computerResult === 'ROCK') {
        showWinner.textContent = 'CPU played rock. You lose!';
        computerScore = ++computerScore;
    }
    else if (playerResult === 'SCISSORS' && computerResult === 'PAPER') {
        showWinner.textContent = 'CPU played paper. You win!';
        playerScore = ++playerScore;
    }
    else if (playerResult === 'SCISSORS' && computerResult === 'SCISSORS') {
        showWinner.textContent = 'CPU played scissors as well. It\'s a draw!';
    }

    playerScoreTracker.textContent = playerScore;
    computerScoreTracker.textContent = computerScore;
    declareWinner();

}

function declareWinner () {
    if (computerScore === 5) {
        alert(`CPU wins this time! CPU won ${computerScore} times and you won ${playerScore} times. Reseting score.`);
        computerScore = 0;
        playerScore = 0;
        cpuOverallGameScore = ++cpuOverallGameScore;
        computerOverallScore.textContent = cpuOverallGameScore;
        playerScoreTracker.textContent = playerScore;
        computerScoreTracker.textContent = computerScore;
    }
    else if (playerScore === 5) {
        alert(`You win this time! CPU won ${computerScore} times and you won ${playerScore} times. Reseting score.`);
        computerScore = 0;
        playerScore = 0;
        playerOverallGameScore = ++playerOverallGameScore;
        playerOverallScore.textContent = playerOverallGameScore;
        playerScoreTracker.textContent = playerScore;
        computerScoreTracker.textContent = computerScore;
    }
    
}
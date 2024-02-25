const choices = ["rock", "paper", "scissors"];
let ties = 0;
let playerScore = 0;
let computerScore = 0;

const resultDisplay = document.getElementById("result");

const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const tiesDisplay = document.getElementById("tiesDisplay");

function playGame(playerChoice) {
	const computerChoice = choices[Math.floor(Math.random() * 3)];
	let result = "";

	if (playerChoice === computerChoice) {
		result = "Its a tie";
		ties += 1;
	} else {
		switch (playerChoice) {
			case "rock":
				result =
					computerChoice === "scissors" ? "You Win!" : "You Lose!";
				break;
			case "paper":
				result = computerChoice === "rock" ? "You Win!" : "You Lose!";
				break;
			case "scissors":
				result = computerChoice === "paper" ? "You Win!" : "You Lose!";
				break;
		}
	}

	resultDisplay.textContent = result;
	playerChoiceDisplay.textContent = `Player Chose: ${playerChoice}`;
	computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;

	switch (result) {
		case "You Win!":
			playerScore += 1;
			break;
		case "You Lose!":
			computerScore += 1;
			break;
	}

	playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
	computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
	tiesDisplay.textContent = `Ties: ${ties}`;
}

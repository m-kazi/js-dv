// Rock, Paper, Scissors Interactive Game

let playGame = confirm("Shall we play?");

if (playGame) {
    // play
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (
            playerOne === "rock" ||
            playerOne === "paper" ||
            playerOne === "scissors"
        ) {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer =
                computerChoice === 1
                    ? "rock"
                    : computerChoice === 2
                    ? "paper"
                    : "scissors";
            // comparing & final result
            let result =
                playerOne === computer
                    ? "Tie"
                    : playerOne === "rock" && computer === "paper"
                    ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`
                    : playerOne === "paper" && computer === "scissors"
                    ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`
                    : playerOne === "scissors" && computer === "rock"
                    ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`
                    : "PlayerOne wins";
            alert(result);

            let playAgain = confirm("Play Again!");
            playAgain ? location.reload() : alert("OK, thanks for playing.");
        } else {
            alert("You didn't enter rock, paper, or scissors.");
        }
    } else {
        alert("I guess you changed your mind, may be next time!");
    }
} else {
    alert("Ok, maybe next time!");
}

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); // Accessing all the choices (rock, paper, and scissors)

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate a random choice for the computer
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

// Function to handle draw condition
const drawGame = () => {
    msg.innerText = "GAME WAS A DRAW. PLEASE TRY AGAIN!";
    msg.style.backgroundColor = "gray";
};

// Function to show the winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN!! YOUR ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE! ${compChoice} beats YOUR ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Function to play the game
const playGame = (userChoice) => {
    console.log("User choice:", userChoice);
    const compChoice = genComputerChoice();
    console.log("Computer choice:", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false;
        if (
            (userChoice === "rock" && compChoice === "scissor") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissor" && compChoice === "paper")
        ) {
            userWin = true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Event listener to get the user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

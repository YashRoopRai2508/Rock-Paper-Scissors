let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const drawGame = () => {
    //console.log("Game was Draw");
    msg.innerText = "Draw";
}

const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        //console.log("You Win!");
        userScorepara.innerText = userScore++;
        msg.innerText = `You Win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        //console.log("You Lose");
        compScorepara.innerText = compScore++;
        msg.innerText = `You Lose. ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    //console.log("User Choice = ", userchoice);
    //Generate Computer Choice
    const compChoice = genComputerChoice();
    //console.log("Comp Choice = ",compChoice)

    if (userchoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
}


const genComputerChoice = () => {
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});
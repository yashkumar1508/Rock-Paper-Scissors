let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const ganComChoice = ()=>{
    const options=["rock","paper","scissors"];

    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}



const drawGame=()=>{
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! , your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. , ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice)=>{
    console.log("user-choice = ",userChoice);

    const compChoice = ganComChoice();
    console.log("comp-choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;

        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
       const userChoice = choice.getAttribute("id"); 
       playGame(userChoice);
    });
});





//acess
let userScore =0;
let compScore =0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//generate comp ki choice
const genCompChoice =() => {
    const options = ["rock","paper","scissors"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
};

// draw game
const drawGame =()=> {
    msg.innerText = "Game was Draw . Play Again";
    msg.style.backgroundColor = "#71BBB2";
}

// show winner
const showWinner = (userWin, userchoice, compChoice)=> {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#497D74";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "#818C78";
    }
}

// choice
const playGame = (userchoice) =>{
  // generate comp choice
  const compChoice = genCompChoice();
   
  if (userchoice === compChoice){ 
    // draw game
    drawGame(); 
  } else {
    let userWin = true;
    if (userchoice === "rock"){
        //scissor, paper
        userWin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
    } else {
        // rock , paper
        userWin = compChoice === "rock" ? false : true ;
    }
    showWinner(userWin , userchoice, compChoice);
  }
}

//user ki choice
choice.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
     console.log("choice was clicked", userchoice);
     playGame(userchoice);
    });
});


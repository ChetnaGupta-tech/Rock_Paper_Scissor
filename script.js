let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3); 
    return options[ranIdx]; 
};

const DrawGame = () =>{
    console.log("Game was Drawn")
     msg.innerText="Game was Drawn, Play Again"
}
const showWinner=(userWin=>{
    if(userWin){
        console.log("You Win")
        msg.innerText="You Win"
    }
    else {
        console.log("You Loose")
        msg.innerText="You Loose"
    }
})
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice==compChoice){
        //Draw
        DrawGame()
    }
    else {
        let userWin=true
        if(userChoice == "rock"){
           userWin = compChoice == "paper"?false:true
        }
        else if(userChoice=="paper"){
            userWin = compChoice=="scissor"?false:true
        }
        else {
            userWin=compChoice=="rock"?false:true
        }
        showWinner(userWin)
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

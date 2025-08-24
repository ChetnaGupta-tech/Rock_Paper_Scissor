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
     msg.style.backgroundColor="blue"
}
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log("You Win")
        msg.innerText=`You Win! Your ${userChoice} beats Computer's ${compChoice}`
        msg.style.backgroundColor="green"
    }
    else {
        console.log("You Loose")
        msg.innerText=`You Loose Computer's ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor="red"
    }
}
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
        showWinner(userWin,userChoice,compChoice)
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

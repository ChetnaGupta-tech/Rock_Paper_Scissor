let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3); 
    return options[ranIdx]; 
};

const DrawGame = () =>{
    console.log("Game was Drawn")
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
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

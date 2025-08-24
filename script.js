let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");


const playGame = (userChoice) =>{
    console.log("user choice= ",userChoice)
    //Generate computer choice
}
choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id")
        // console.log("choice was clicked",userChoice)
        playGame(userChoice)
    });
});

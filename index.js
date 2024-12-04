let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_span = document.querySelector(".score-board");
const result_div = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
//caching the dom mean storing something for the future use
function getComputerChoice() {
    const choices = ["r","p","s"];
    const randomNumber =Math.floor(Math.random()*3)
    return choices[randomNumber];
}
function convertToWord(letter){
    if(letter=== "r")
        return "Rock";
    if(letter === "p")
        return "Paper";
    if(letter==="s")
        return "Scissor"
}
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    //result_div.innerHTML= convertToWord(userChoice) +" "+ "beats" +" "+convertToWord(computerChoice) +" "+ ".You win!";
    //template literal make string much easier to read 
    const smallUserWord = `<sub>user</sub>`
    const smallCompWord= `<sub>comp</sub>`
    result_div.innerHTML= `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}.You win!`
    //console.log(userScore);
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('green-glow');
    },5000)
}
function loss(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    //result_div.innerHTML= convertToWord(userChoice) + " " +"beats" +" "+ convertToWord(computerChoice)+ " "+".You win!";
    const smallUserWord = `<sub>user</sub>`
    const smallCompWord= `<sub>comp</sub>`
    result_div.innerHTML= `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}.You win!`
    document.getElementById(computerChoice).classList.add('red-glow')
    setTimeout(function(){document.getElementById(computerChoice).classList.remove('red-glow')},5000)
    //console.log("loss");
}
function draw(userChoice,computerChoice){
    console.log("draw");
    //result_div.innerHTML= convertToWord(userChoice) +"  "+ "beats"+" " + convertToWord(computerChoice) +" "+". DRAW !";
    const smallUserWord = `<sub>user</sub>`
    const smallCompWord= `<sub>comp</sub>`
    result_div.innerHTML= `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}.Draw!`
    document.getElementById(computerChoice).classList.add('gray-glow')
    setTimeout(function(){document.getElementById(computerChoice).classList.remove('gray-glow')},5000)
}
function game(userChoice){
    //console.log("user choice is"+ ":"+userChoice)
    const computerChoice = getComputerChoice()
    //console.log("computer choice"+":"+computerChoice)
    switch( userChoice + computerChoice){
     case"rs":case"pr":case"sp":
     console.log("USERS WIN !")
     win(userChoice,computerChoice);
     break;
     case"rp":case"ps":case"sr":
     console.log("COMPUTER WINS")
     loss(userChoice,computerChoice);
     break;
     case"rr":case"pp":case"ss":
     console.log("Draw")
     draw(userChoice,computerChoice);
     break;
    }
}
function main() {
  rock_div.addEventListener("click", function () {
    game("r")
    //console.log("you clicked on rock");
  });
  paper_div.addEventListener("click", function () {
    game("p");
    //console.log("you clicked on the paper");
  });
  scissor_div.addEventListener("click", function () {
    game("s");
    //console.log("you clicked on scissor");
  });
}
main();
/*
//inital RPS Enginee: Performing Malformed Fizzbuzz to pick rock, paper, or scissors!
function computer_play() {
    var computer_raw_choice = Math.floor(Math.random() * 101);
    if(computer_raw_choice % 5 == 0){
        return 1;
    }
    else if(computer_raw_choice % 3 == 0){
        return 2;
    }
    else{
        return 3;
    }
}
//Takes user input

function Player_play(){
var choice = prompt("Enter Rock, Paper, or Scissors!");
if(choice == "rock" || choice == "Rock" || choice == "ROCK"){
    return 1;
}
else if(choice == "paper" || choice == "Paper" || choice == "PAPER"){
    return 2;
}
else if(choice == "scissors" || choice == "Scissors" ||choice == "SCISSORS" ){
    return 3;
}
else{
    alert("Error! Please Enter Rock, Paper, or Scissors!");
    Player_play(); 
}
}

//Controls Game Flow!
function Play_round( user_choice, computer_choice){
if(user_choice == computer_choice){
    return 1;
    
}
else if(user_choice > computer_choice){
    return 2;
}
else{
    return 3;
}
}

function game_engine(){
for(let x = 0; x < 5; x++){
var round_decision = Play_round(Player_play(), computer_play());
if(round_decision == 1){
    document.write("TIE");
}
else if(round_decision == 2){
    document.write("USER WINS!");
}
else{
    document.write("COMPUTER WINS!");
}
}
}
game_engine()
*/
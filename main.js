//DONE: Add Player and computer images to middle. 
//DONE: Add Player and computer Counters. 
//DONE: Make function to display reset button if Rounds played hits 5. 
document.getElementById("end_game").style.display= "none";
function player_selection(){
const r = document.getElementById("rock");
const p = document.getElementById("paper");
const s = document.getElementById("scissors");
r.addEventListener('click', function(){ assignVal(1); });
p.addEventListener('click', function(){ assignVal(2); });
s.addEventListener('click', function(){ assignVal(3); });
}

function assignVal(num){
    var x = num;
    computer_selection(x);

}

function computer_selection(player_pick){
    const computer_pick = (Math.floor(Math.random() * 3) + 1);
    game_engine(player_pick, computer_pick);
}


function game_engine(player, computer){
    set_versus(player, computer);
    var winner_text = document.querySelector(".Winner");
    var rounds_played = document.querySelector(".round_counter");
    var player_counter = document.querySelector(".player_count");
    var computer_counter = document.querySelector(".computer_count");
    if(player == computer){         //TIE EVENT No increment on Players scores.
       winner_text.innerHTML = "It's a TIE!";
       rounds_played.innerHTML = parseInt(rounds_played.innerHTML)+1;
    }
    else if(player == 1 && computer == 3){  //ROCK V. Scissors  Player win Increment Player score
        winner_text.innerHTML = "Player Wins!";
        player_counter.innerHTML = parseInt(player_counter.innerHTML)+1;
        rounds_played.innerHTML = parseInt(rounds_played.innerHTML)+1;
    }
    else if(player == 3 && computer == 1){ // Scissors V. Rock
       winner_text.innerHTML = "Computer Wins!";
       computer_counter.innerHTML = parseInt(computer_counter.innerHTML)+1;
       rounds_played.innerHTML = parseInt(rounds_played.innerHTML)+1;
    }
    else if(player > computer ){        // Natural flow of Greater then
        winner_text.innerHTML = "Player Wins!";
        player_counter.innerHTML = parseInt(player_counter.innerHTML)+1;
        rounds_played.innerHTML = parseInt(rounds_played.innerHTML)+1;
    }
    else if(player < computer){         // Natural flow of Greater then
        winner_text.innerHTML = "Computer Wins!";
        computer_counter.innerHTML = parseInt(computer_counter.innerHTML)+1;
        rounds_played.innerHTML = parseInt(rounds_played.innerHTML)+1;
    }
    else{
        winner_text.innerHTML = "Error_02: No clear winner picked;";
    }
    var rounds_played = document.querySelector(".round_counter");
    var count = parseInt(rounds_played.innerHTML);
    var player_counter = document.querySelector(".player_count");
    var player_score = parseInt(player_counter.innerHTML);
    var computer_counter = document.querySelector(".computer_count");
    var computer_score = parseInt(computer_counter.innerHTML);

    if(count > 5){
        document.getElementById("Game_content").style.display = "none";
        var end_winner = document.querySelector(".End_Winner");
        if(computer_score > player_score){
            end_winner.innerHTML = "Computer Wins";
            document.getElementById("end_game").style.display= "block";
            const play_again = document.getElementById("button");
            play_again.addEventListener('click', function(){ replay(); });
        }
        else if(computer_score < player_score){
            end_winner.innerHTML = "Player Wins";
            document.getElementById("end_game").style.display= "block";
            const play_again = document.getElementById("button");
            play_again.addEventListener('click', function(){ replay(); });
        }
        else if(computer_score == player_score){
            end_winner.innerHTML = "It's a TIE!";
            document.getElementById("end_game").style.display= "block";
            const play_again = document.getElementById("button");
            play_again.addEventListener('click', function(){ replay(); });
        }
        else{
            end_winner.innerHTML = "ERROR_04: Unable to display Winner.";
            document.getElementById("end_game").style.display= "block";
            const play_again = document.getElementById("button");
            play_again.addEventListener('click', function(){ replay(); });
        }
    }
}


function set_versus(player_pick, computer_pick){
    if(player_pick == 1){
        document.getElementById("player_i").src="images/Rock.png";
    }
    else if(player_pick == 2){
        document.getElementById("player_i").src="images/Paper.png";
    }
    else if(player_pick == 3){
        document.getElementById("player_i").src="images/Scissors.png";
    }
    else{
        console.log("ERROR_03: Player_pick Uncertain");
    }

    if(computer_pick == 1){
        document.getElementById("computer_i").src="images/Rock.png";
    }
    else if(computer_pick == 2){
        document.getElementById("computer_i").src="images/Paper.png";
    }
    else if(computer_pick == 3){
        document.getElementById("computer_i").src="images/Scissors.png";
    }
    else{
        console.log("ERROR_03: Player_pick Uncertain");
    }

}

function replay(){
    location.reload();
}





player_selection();









//TODO: Add Player and computer images to middle. 
//TODO: Add Player and computer Counters. 
//TODO: Make function to display reset button if Rounds played hits 5. Then Reset all counters. 



function player_selection(){
if(count == 5){
//TODO: add computer and player counters. 
}
else{
const r = document.getElementById("rock");
const p = document.getElementById("paper");
const s = document.getElementById("scissors");
r.addEventListener('click', function(){ assignVal(1); });
p.addEventListener('click', function(){ assignVal(2); });
s.addEventListener('click', function(){ assignVal(3); });
}
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
    var winner_text = document.querySelector(".Winner");
   // var images = document.querySelector(".image_w_l");
    var rounds_played = document.querySelector(".round_counter");
  
    if(player == computer){         //TIE EVENt
       // document.write("TIE!");
       winner_text.innerHTML = "It's a TIE!";
       count += 1;
       rounds_played.innerHTML = "Rounds Played:" + count;
    }
    else if(player == 1 && computer == 3){  //ROCK V. Scissors
        //document.write("Player wins!");
        
        winner_text.innerHTML = "Player Wins!";
        count += 1;
        rounds_played.innerHTML = "Rounds Played:" + count;
    
    }
    else if(player == 3 && computer == 1){ // Scissors V. Rock
       // document.write("Computer wins!");
       winner_text.innerHTML = "Computer Wins!";
       count += 1;
       rounds_played.innerHTML = "Rounds Played:" + count;
    }
    else if(player > computer ){        // Natural flow of Greater then 
        //document.write("Player wins!");
        winner_text.innerHTML = "Player Wins!";
        count += 1;
        rounds_played.innerHTML = "Rounds Played:" + count;
    }
    else if(player < computer){         // Natural flow of Greater then
        //document.write("Computer wins");
        
        winner_text.innerHTML = "Computer Wins!";
        count += 1;
        rounds_played.innerHTML = "Rounds Played:" + count;
    }
    else{
        //document.write("NO CLEAR WINNER!");
        winner_text.innerHTML = "Error_02: No clear winner picked;";
    }
}


let count = 0;
player_selection();









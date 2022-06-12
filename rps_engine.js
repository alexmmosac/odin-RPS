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
    if(player == computer){         //TIE EVENt
        document.write("TIE!");
    }
    else if(player == 1 && computer == 3){  //ROCK V. Scissors
        document.write("Player wins!");
    }
    else if(player == 3 && computer == 1){ // Scissors V. Rock
        document.write("Computer wins!");
    }
    else if(player > computer ){        // Natural flow of Greater then 
        document.write("Player wins!");
    }
    else if(player < computer){         // Natural flow of Greater then
        document.write("Computer wins");
    }
    else{
        document.write("NO CLEAR WINNER!");
    }
}

player_selection();







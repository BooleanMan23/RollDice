var h1 = document.querySelector("h1");
var player1Dice = document.querySelector(".player1dice");
var player2Dice = document.querySelector(".player2dice");

  if (performance.navigation.type == 1) {
    roleDice();

  }

function roleDice(){
  
  var player1Score = Math.floor(Math.random() * 6) + 1;
  var player2Score = Math.floor(Math.random() * 6) + 1;
  changeDiceImage(player1Score, player2Score);
  changeResult(player1Score, player2Score);

}

function changeDiceImage(player1Score, player2Score){
  if(player1Score == 1){
    player1Dice.src = "images/oneDice.png";
  }
  else if(player1Score == 2){
    player1Dice.src = "images/twoDice.png";
  }
  else if(player1Score == 3){
    player1Dice.src = "images/threeDice.png";
  }
  else if(player1Score == 4){
    player1Dice.src = "images/fourDice.png";
  }
  else if(player1Score == 5){
    player1Dice.src = "images/fiveDice.png";
  }
  else if(player1Score == 6){
    player1Dice.src = "images/sixDice.png";
  }

  if(player2Score == 1){
    player2Dice.src = "images/oneDice.png";
  }
  else if(player2Score == 2){
    player2Dice.src = "images/twoDice.png";
  }
  else if(player2Score == 3){
    player2Dice.src = "images/threeDice.png";
  }
  else if(player2Score == 4){
    player2Dice.src = "images/fourDice.png";
  }
  else if(player2Score == 5){
    player2Dice.src = "images/fiveDice.png";
  }
  else if(player2Score == 6){
    player2Dice.src = "images/sixDice.png";
  }
}

function changeResult(player1Score, player2Score){
  if(player1Score > player2Score){
    h1.innerHTML = "Player 1 Win!";
  }
  else if(player2Score > player1Score){
      h1.innerHTML = "Player 2 Win!";
  }
  else if(player1Score == player2Score){
      h1.innerHTML = "Its A Draw";

  }
}

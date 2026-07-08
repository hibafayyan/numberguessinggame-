let levelSection = document.getElementById("levelSection");
let gameSection = document.getElementById("gameSection");
let guessInput = document.getElementById("guessInput");
let message = document.getElementById("message");
let hearts = document.getElementById("hearts");
let scoreText = document.getElementById("score");
let checkBtn = document.getElementById("checkBtn");
let restartBtn = document.getElementById("restartBtn");
let title = document.getElementById("title");
let winSound = document.getElementById("winSound");
let loseSound = document.getElementById("loseSound");


let score=0;
let randomNumber;
let maxRange;
let lives;


function startGame(range){

    levelSection.style.display = "none";

    gameSection.style.display = "block";

    maxRange = range;
    randomNumber = Math.floor(Math.random() * maxRange) + 1;
    console.log(randomNumber);
if (range === 10) {
    lives = 5;
}
else if (range === 50) {
    lives = 3;
}
else {
    lives = 1;
}

updateHearts();
title.innerText = `Choose a number between 1 and ${maxRange}`;

}
score = 0;
updateScore();


function updateHearts(){

    hearts.innerText = "❤️".repeat(lives);

}


function updateScore() {
    scoreText.innerText = `Score : ${score}`;
}


function checkEnter(event) {

    if (event.key === "Enter") {
        checkGuess();
    }



}

function checkGuess(){
        if (guessInput.value === ""){
      message.innerText = "Enter a valid Number";
      return
    }


    let guess=Number(guessInput.value);
 
    if (guess===randomNumber){

            score = lives * 10;
    updateScore();
        
               message.innerText = "🎉 Congratulations ! You Win! 🎉";
               winSound.play();
                 confetti();
            
           guessInput.disabled = true;  
          checkBtn.style.display = "none";
          restartBtn.style.display = "block";
          guessInput.value = "";
      
    } else if (guess > randomNumber){
         message.innerText = "Too High";
         lives--;
         updateHearts();
      guessInput.value = ""
    }else{
         message.innerText = "Too Low";
         lives--;
         updateHearts();
          guessInput.value = ""
    }
    if (lives === 0){
        loseSound.play();
    message.innerText = `💀 Game Over! 
    Better Luck Next Time 
    The correct number was ${randomNumber}`;
     guessInput.disabled = true;  
          checkBtn.style.display = "none";
          restartBtn.style.display = "block";
           
    }
}


function restartGame(){
    levelSection.style.display="block";
    gameSection.style.display="none"; 
    restartBtn.style.display="none"; 
    guessInput.disabled = false;
    checkBtn.style.display = "block";
    message.innerText = "";

}
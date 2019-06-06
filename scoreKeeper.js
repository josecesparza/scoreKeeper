var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");

var p1Display = document.getElementById("span1");
var p2Display = document.getElementById("span2");

var inputMaxScore = document.querySelector("input");
var displayMax = document.getElementById("spanMax");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            gameOver = true;
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
        }
        p1Display.textContent = p1Score;
    }
    

});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
            p2Display.classList.add("winner");
            p1Display.classList.add("loser");
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click",function(){
    resetGame();
});
function resetGame() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    gameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    p1Display.classList.remove("loser");
    p2Display.classList.remove("loser");
};

inputMaxScore.addEventListener("change", function(){
    displayMax.textContent = inputMaxScore.value;
    winningScore = Number(inputMaxScore.value);
    resetGame();
});
//We are just allowing the backspace, enter and number keys of our keyboard.
inputMaxScore.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8 || e.keyCode == 13)) {
        return false;
    }
}
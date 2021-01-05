/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer;
var isPlaying; //check for is game playing or not

function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    isPlaying = true;
    //don't show dice at start
    document.querySelector(".dice").style.display = "none";

    //set current scores and globle scores to '0';
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

init();

//callback function eg.
// btn();
// document.querySelector('.btn-roll').addEventListener("click",btn);


function nextplayer() {
    //change a player
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    //on player change set round score to 0;
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    //toggle will check is there a class present if yes then remove
    // and if not thrn add
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    //on changeplayer set img display none
    document.querySelector(".dice").style.display = "none";
}

function winnerAnimation(wrapperElement){
    party.element(wrapperElement, {
        count: 500,
        countVariation: 0.5,
        angleSpan: 80,
        yVelocity: -300,
        yVelocityVariation: 1,
        rotationVelocityLimit: 6,
        scaleVariation: 0.8
    });
}
//anonymous function
document.querySelector(".btn-roll").addEventListener("click", function () {

    if(isPlaying){
    //1.random number;
    dice = Math.floor(Math.random() * 6) + 1;

    //2. display the img result;
    var diceDom;
    diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";

    //3. update the round score if the rolled number was not a 1
    // if 1 comes then change to nextplayer

    if (dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        nextplayer();
    }
    }

});

document.querySelector(".btn-hold").addEventListener("click", function () {
    if(isPlaying){
        //add current score to globle score;
    scores[activePlayer] += roundScore;

    //update ui
    document.querySelector("#score-" + activePlayer).textContent =
        scores[activePlayer];

    //check if player is won or not
    if (scores[activePlayer] >= 20) {

        document.querySelector('#name-' + activePlayer).textContent = "Winner";
        document.querySelector('.dice').style.display = 'none';
        var winnerPlayer = document.querySelector('.player-' + activePlayer + '-panel');
        winnerPlayer.classList.add('winner');
        winnerPlayer.classList.remove('active');
        winnerAnimation(winnerPlayer);
        isPlaying = false;

    } else {

        //check if player won the game;
        //next player (change player)
        nextplayer();

    }    
    }
    
});

document.querySelector('.btn-new').addEventListener("click",init);
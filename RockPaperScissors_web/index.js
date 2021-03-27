//RockPaperScissors
/* 

Game is played by two players.
Each players decides whether to select either rock, paper or scissors and then both player show their selection at the same time.
If the players select the same option, the game is tied.
Otherwise the game will be win by the player if they selected option beats the their opponent's, based on the info below: 
Rock beats scissors
Scissors beat paper
Paper beats rock.

*/

/* Steps to solve 
Start Game
Print out instructions.
Show options available to the player 
Allow player to select an option 
Have the computer select one of the 3 options at random
Compare computer's selected option with the player's
Confirm game resolution (player's victory, defeat or draw)
Ask if player wants to play again.
Get player input on new game.
Close game
*/

let playerOptions = ['rock', 'paper', 'scissors'];
let winCombinations = {
    rock: ['scissors'],
    paper: ['rock'],
    scissors: ['paper'],
};
let scoreboard = {
    D: 0,
    W: 0,
    L: 0,
};
let shapes = document.querySelectorAll('.shapes > a[data-shape]');
shapes.forEach((shape) => {
    shape.addEventListener('click', shapeSelected);
});
function shapeSelected(shapeElement) {
    if (!shapeElement.target.attributes['data-shape']) return;
    startRound(shapeElement.target.attributes['data-shape'].value);
}

function startRound(shape) {
    let opponentOption = getComputerOption();
    animateSelection(shape);
    console.log(`You selected ${shape} and the AI selected ${opponentOption}`);
    storeRoundOutcome(getRoundOutcome(shape, opponentOption));
}

function getComputerOption() {
    return playerOptions[Math.floor(Math.random() * 3)];
}

function getRoundOutcome(player, opponent) {
    if (player === opponent) {
        return 'D';
    }
    return winCombinations[player].indexOf(opponent) < 0 ? 'L' : 'W';
}

function storeRoundOutcome(outcome) {
    scoreboard[outcome]++;
}

function showRoundResult(outcome) {
    switch (outcome) {
        case 'D':
            console.log('DRAW GAME -_-');
            break;
        case 'W':
            console.log('You won ^_^');
            break;
        case 'L':
            console.log('You lose TT_TT');
            break;
        default:
            console.error('Something went horribly wrong');
            break;
    }
}

function animateSelection(shape) {
    let selectedCard = document.querySelector(
        `.shapes > a[data-shape='${shape}']`
    );
    selectedCard.classList.add('selected');

    let nonSelectedCards = document.querySelectorAll(
        `.shapes > a:not([data-shape='${shape}'])`
    );
    nonSelectedCards.forEach((card) => {
        card.classList.remove('fadeIn');
        card.classList.add('fadeOut');
    });
}

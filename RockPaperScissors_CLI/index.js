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
const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let playerOptions = ['Rock', 'Paper', 'Scissors'];
let winCombinations = {
    0: [2],
    1: [0],
    2: [1],
};
let scoreboard = {
    D: 0,
    W: 0,
    L: 0,
};
function receivePlayerInput() {
    rl.question(printPlayerOptions(), function (option) {
        switch (parseInt(option)) {
            case 1:
            case 2:
            case 3:
                let opponentOption = getComputerOption();
                console.log(
                    `You selected ${
                        playerOptions[option - 1]
                    } and the AI selected ${playerOptions[opponentOption - 1]}`
                );
                storeGameOutcome(
                    getGameOutcome(option - 1, opponentOption - 1)
                );
                break;
            case 4:
                console.log('\nBYE BYE !!!');
                process.exit(0);
                break;
            default:
                console.log('Incorrect option');
                break;
        }
        showScoreBoard();
        receivePlayerInput();
    });
}

function storeGameOutcome(outcome) {
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
    scoreboard[outcome]++;
    console.log('');
}

function showScoreBoard() {
    console.log(
        `Won: ${scoreboard['W']} | Lost: ${scoreboard['L']} | Draw: ${scoreboard['D']} `
    );
    console.log('');
}
cd;
function getGameOutcome(player, opponent) {
    if (player === opponent) {
        return 'D';
    }
    return winCombinations[player].indexOf(opponent) < 0 ? 'L' : 'W';
}

function getComputerOption() {
    return Math.floor(Math.random() * 3) + 1;
}

function startGame() {
    printInstructions();
    receivePlayerInput();
}

function printInstructions() {
    console.log('Rock Paper Scissors');
    console.log('---------------------');
    console.log('Rock beats Scissors');
    console.log('Paper beats Rock');
    console.log('Scissors beat Paper');
    console.log('-------------------');
    console.log('');
}
function printPlayerOptions() {
    console.log('Select an option:');
    console.log('[1] Rock');
    console.log('[2] Paper');
    console.log('[3] Scissors');
    console.log('[4] Exit game');
    console.log('');
    return '';
}

startGame();

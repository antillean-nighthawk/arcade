// Original by: https://github.com/arasgungore/Tic-Tac-Toe
// dynamically generate game container
const gameContainer = document.querySelector('.game--container');
for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('data-cell-index', i);
    cell.classList.add('cell');
    gameContainer.appendChild(cell);
}

// show the current game state at the bottom of the page
const statusDisplay = document.querySelector('.game--status');
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// initalize game state
let gameActive = true;
let currentPlayer = "<span id='red'>X</span>";
let gameState = ["", "", "", "", "", "", "", "", ""];
statusDisplay.innerHTML = currentPlayerTurn();

// enumerate all possible winning conditions
const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

// marks cell clicked with current player's symbol
function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

// change player after every turn
function handlePlayerChange() {
    currentPlayer = currentPlayer === "<span id='red'>X</span>" ? "<span id='blue'>O</span>" : "<span id='red'>X</span>";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
    // check if win conditions are satisfied
    let roundWon = false;
    for(let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = gameState[winCondition[0]];
        const b = gameState[winCondition[1]];
        const c = gameState[winCondition[2]];
        if(a === '' || b === '' || c === '')
            continue;
        if(a === b && b === c) {
            roundWon = true;
            break
        }
    }

    // win
    if(roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    // draw
    const roundDraw = !gameState.includes("");
    if(roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    // next player
    handlePlayerChange();
}

// check for valid moves
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if(gameState[clickedCellIndex] !== "" || !gameActive)
        return;

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

// clear game state
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "<span id='red'>X</span>";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

// implement click events in html
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
document.querySelector('.change--player').addEventListener('click', handlePlayerChange);
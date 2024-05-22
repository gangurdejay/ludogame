document.addEventListener('DOMContentLoaded', () => {
    const boardSize = 15;
    const gameBoard = document.getElementById('gameBoard');
    const rollDiceButton = document.getElementById('rollDice');
    const diceResult = document.getElementById('diceResult');
    let playerPosition = 0;

    // Create the game board
    for (let i = 0; i < boardSize * boardSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gameBoard.appendChild(cell);
    }

    // Function to roll a dice
    function rollDice() {
        const result = Math.floor(Math.random() * 6) + 1;
        diceResult.textContent = `You rolled: ${result}`;
        movePlayer(result);
    }

    // Function to move the player
    function movePlayer(steps) {
        const cells = document.querySelectorAll('.cell');
        cells[playerPosition].classList.remove('player');

        playerPosition = (playerPosition + steps) % (boardSize * boardSize);
        cells[playerPosition].classList.add('player');
    }

    // Add event listener to roll dice button
    rollDiceButton.addEventListener('click', rollDice);

    // Initialize player position
    document.querySelectorAll('.cell')[playerPosition].classList.add('player');
});


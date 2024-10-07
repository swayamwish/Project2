document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById('board');
    const totalCells = 100; // 10x10 grid
    let playerPosition = 1; // Starting from top-left (1st cell)

    // Define snakes and ladders (key: start position, value: end position)
    const snakes = {
        16: 6,
        47: 26,
        49: 11,
        56: 53,
        62: 19,
        64: 60,
        87: 24,
        93: 73,
        95: 75,
        98: 78
    };

    const ladders = {
        1: 15,
        4: 14,
        9: 31,
        21: 42,
        28: 84,
        36: 44,
        51: 67,
        71: 91,
        80: 100,
        85: 97
    };

    // Create grid cells
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell-${i + 1}`;
        cell.setAttribute('data-number', i + 1); // Set data attribute for numbering
        board.appendChild(cell);
    }

    function updatePlayerPosition(newPosition) {
        const previousCell = document.getElementById(`cell-${playerPosition}`);
        if (previousCell) {
            previousCell.innerHTML = ''; // Clear previous position
        }

        playerPosition = newPosition;
        const currentCell = document.getElementById(`cell-${playerPosition}`);
        if (currentCell) {
            currentCell.innerHTML = `<div class="player-marker">P</div>`; // Add player marker
        }

        document.getElementById('player-position').innerText = `Player Position: ${playerPosition}`;

        // Check for win condition
        if (playerPosition === 100) {
            document.getElementById('dice-result').innerText = `You rolled a ${diceRoll}`;
            showModal();
        }
    }

    // Function to calculate the new player position based on dice roll
    function rollDice() {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        let newPosition = playerPosition + diceRoll;

        // Handle moving to a new position based on snakes and ladders
        if (newPosition in ladders) {
            newPosition = ladders[newPosition];
        } else if (newPosition in snakes) {
            newPosition = snakes[newPosition];
        }

        // Ensure the position doesn't exceed 100
        newPosition = Math.min(newPosition, totalCells);

        updatePlayerPosition(newPosition);
        document.getElementById('dice-result').innerText = `You rolled a ${diceRoll}`;
    }

    function showModal() {
        const modal = document.getElementById('game-over-modal');
        modal.style.display = 'block';
    }

    function hideModal() {
        const modal = document.getElementById('game-over-modal');
        modal.style.display = 'none';
    }

    function restartGame() {
        hideModal();
        playerPosition = 1; // Reset player position to 1
        updatePlayerPosition(playerPosition);
        document.getElementById('roll-dice').disabled = false; // Enable roll dice button
    }

    function cancelGame() {
        hideModal();
    }

    // Event listeners for modal buttons
    document.getElementById('new-match').addEventListener('click', () => {
        restartGame();
        // Optionally reload the page or redirect
        // location.reload(); // Uncomment if you prefer to reload the page
        // window.location.href = 'newgame.html'; // Uncomment if you prefer to redirect
    });

    document.getElementById('cancel').addEventListener('click', cancelGame);

    // Close modal when clicking on <span> (x)
    document.querySelector('.close').addEventListener('click', hideModal);

    // Click outside of modal to close
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('game-over-modal');
        if (event.target === modal) {
            hideModal();
        }
    });

    document.getElementById('roll-dice').addEventListener('click', rollDice);

    updatePlayerPosition(playerPosition); // Initialize player position
});

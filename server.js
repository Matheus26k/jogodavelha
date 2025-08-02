const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

let gameState = {
    drawnNumbers: [],
    currentNumber: null,
    timeLeft: 3,
    isGameActive: false
};

let gameInterval = null;
let countdownInterval = null;

function clearAllIntervals() {
    if (gameInterval) {
        clearInterval(gameInterval);
        gameInterval = null;
    }
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
}

function startGame() {
    clearAllIntervals();
    
    gameState.isGameActive = true;
    gameState.drawnNumbers = [];
    gameState.timeLeft = 3;
    
    drawNumber();
    
    gameInterval = setInterval(() => {
        drawNumber();
    }, 3000);
}

function drawNumber() {
    const availableNumbers = [];
    for (let i = 1; i <= 75; i++) {
        if (!gameState.drawnNumbers.includes(i)) {
            availableNumbers.push(i);
        }
    }
    
    if (availableNumbers.length === 0) {
        endGame();
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const drawnNumber = availableNumbers[randomIndex];
    
    gameState.drawnNumbers.push(drawnNumber);
    gameState.currentNumber = drawnNumber;
    gameState.timeLeft = 3;
    
    io.emit('numberDrawn', gameState);
    startCountdown();
}

function startCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
    
    countdownInterval = setInterval(() => {
        gameState.timeLeft--;
        io.emit('timeUpdate', gameState.timeLeft);
        
        if (gameState.timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
    }, 1000);
}

function endGame() {
    gameState.isGameActive = false;
    clearAllIntervals();
    io.emit('gameEnded');
}

function resetGame() {
    clearAllIntervals();
    gameState = {
        drawnNumbers: [],
        currentNumber: null,
        timeLeft: 3,
        isGameActive: false
    };
    io.emit('gameReset', gameState);
}

io.on('connection', (socket) => {
    socket.emit('gameState', gameState);
    
    socket.on('startGame', () => {
        if (!gameState.isGameActive) {
            startGame();
        }
    });
    
    socket.on('resetGame', () => {
        resetGame();
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT} - Sorteio a cada 3 segundos`);
});
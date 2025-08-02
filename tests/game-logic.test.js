describe('Game Logic Tests', () => {
    let gameState;

    beforeEach(() => {
        gameState = {
            drawnNumbers: [],
            currentNumber: null,
            timeLeft: 5,
            isGameActive: false
        };
    });

    test('should initialize game state correctly', () => {
        expect(gameState.drawnNumbers).toEqual([]);
        expect(gameState.currentNumber).toBeNull();
        expect(gameState.timeLeft).toBe(5);
        expect(gameState.isGameActive).toBe(false);
    });

    test('should generate numbers between 1 and 75', () => {
        const availableNumbers = [];
        for (let i = 1; i <= 75; i++) {
            if (!gameState.drawnNumbers.includes(i)) {
                availableNumbers.push(i);
            }
        }
        
        expect(availableNumbers.length).toBe(75);
        expect(availableNumbers[0]).toBe(1);
        expect(availableNumbers[74]).toBe(75);
    });

    test('should not repeat drawn numbers', () => {
        gameState.drawnNumbers = [1, 5, 10, 25];
        
        const availableNumbers = [];
        for (let i = 1; i <= 75; i++) {
            if (!gameState.drawnNumbers.includes(i)) {
                availableNumbers.push(i);
            }
        }
        
        expect(availableNumbers.length).toBe(71);
        expect(availableNumbers).not.toContain(1);
        expect(availableNumbers).not.toContain(5);
        expect(availableNumbers).not.toContain(10);
        expect(availableNumbers).not.toContain(25);
    });

    test('should handle game completion', () => {
        // Simular todos os números sorteados
        gameState.drawnNumbers = Array.from({length: 75}, (_, i) => i + 1);
        
        const availableNumbers = [];
        for (let i = 1; i <= 75; i++) {
            if (!gameState.drawnNumbers.includes(i)) {
                availableNumbers.push(i);
            }
        }
        
        expect(availableNumbers.length).toBe(0);
    });

    test('should reset game state correctly', () => {
        gameState.drawnNumbers = [1, 2, 3];
        gameState.currentNumber = 3;
        gameState.timeLeft = 2;
        gameState.isGameActive = true;

        // Reset
        gameState = {
            drawnNumbers: [],
            currentNumber: null,
            timeLeft: 5,
            isGameActive: false
        };

        expect(gameState.drawnNumbers).toEqual([]);
        expect(gameState.currentNumber).toBeNull();
        expect(gameState.timeLeft).toBe(5);
        expect(gameState.isGameActive).toBe(false);
    });

    test('should validate countdown timing', () => {
        expect(gameState.timeLeft).toBe(5);
        
        // Simular countdown
        gameState.timeLeft = 4;
        expect(gameState.timeLeft).toBe(4);
        
        gameState.timeLeft = 0;
        expect(gameState.timeLeft).toBe(0);
    });
});
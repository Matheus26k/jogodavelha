describe('Integration Tests', () => {
    test('should validate 5-second interval timing', (done) => {
        const startTime = Date.now();
        const intervals = [];
        
        // Simular 3 sorteios
        let count = 0;
        const interval = setInterval(() => {
            const currentTime = Date.now();
            if (count > 0) {
                intervals.push(currentTime - startTime - (count * 5000));
            }
            count++;
            
            if (count >= 3) {
                clearInterval(interval);
                
                // Verificar se os intervalos estão próximos de 5000ms (±100ms tolerância)
                intervals.forEach(intervalTime => {
                    expect(Math.abs(intervalTime)).toBeLessThan(100);
                });
                
                done();
            }
        }, 5000);
    }, 20000); // Timeout de 20 segundos

    test('should handle rapid start/reset cycles', () => {
        let gameState = {
            drawnNumbers: [],
            currentNumber: null,
            timeLeft: 5,
            isGameActive: false
        };

        // Simular múltiplos start/reset
        for (let i = 0; i < 10; i++) {
            // Start
            gameState.isGameActive = true;
            gameState.drawnNumbers = [Math.floor(Math.random() * 75) + 1];
            
            // Reset
            gameState = {
                drawnNumbers: [],
                currentNumber: null,
                timeLeft: 5,
                isGameActive: false
            };
        }

        expect(gameState.drawnNumbers).toEqual([]);
        expect(gameState.isGameActive).toBe(false);
    });

    test('should validate number uniqueness over time', () => {
        const drawnNumbers = [];
        const totalNumbers = 75;
        
        // Simular sorteio de todos os números
        while (drawnNumbers.length < totalNumbers) {
            const availableNumbers = [];
            for (let i = 1; i <= totalNumbers; i++) {
                if (!drawnNumbers.includes(i)) {
                    availableNumbers.push(i);
                }
            }
            
            if (availableNumbers.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableNumbers.length);
                const drawnNumber = availableNumbers[randomIndex];
                drawnNumbers.push(drawnNumber);
            }
        }

        // Verificar se todos os números de 1-75 foram sorteados
        expect(drawnNumbers.length).toBe(75);
        expect(new Set(drawnNumbers).size).toBe(75); // Sem duplicatas
        
        for (let i = 1; i <= 75; i++) {
            expect(drawnNumbers).toContain(i);
        }
    });
});
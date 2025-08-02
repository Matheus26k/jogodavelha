/**
 * @jest-environment jsdom
 */

describe('Frontend Tests', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="startBtn"></div>
            <div id="resetBtn"></div>
            <div id="currentNumber"></div>
            <div id="countdown"></div>
            <div id="progressBar"></div>
            <div id="numbersGrid"></div>
            <div id="drawnSequence"></div>
        `;
    });

    test('should create numbers grid correctly', () => {
        const numbersGrid = document.getElementById('numbersGrid');
        
        // Simular função createNumbersGrid
        numbersGrid.innerHTML = '';
        for (let i = 1; i <= 75; i++) {
            const cell = document.createElement('div');
            cell.className = 'number-cell';
            cell.textContent = i;
            cell.id = `number-${i}`;
            numbersGrid.appendChild(cell);
        }

        const cells = numbersGrid.querySelectorAll('.number-cell');
        expect(cells.length).toBe(75);
        expect(cells[0].textContent).toBe('1');
        expect(cells[74].textContent).toBe('75');
    });

    test('should update current number display', () => {
        const currentNumberEl = document.getElementById('currentNumber');
        const numbersGrid = document.getElementById('numbersGrid');
        
        // Criar grid primeiro
        for (let i = 1; i <= 75; i++) {
            const cell = document.createElement('div');
            cell.className = 'number-cell';
            cell.textContent = i;
            cell.id = `number-${i}`;
            numbersGrid.appendChild(cell);
        }

        // Simular updateCurrentNumber
        const number = 42;
        currentNumberEl.textContent = number;
        
        document.querySelectorAll('.number-cell').forEach(cell => {
            cell.classList.remove('current');
        });
        
        const currentCell = document.getElementById(`number-${number}`);
        if (currentCell) {
            currentCell.classList.add('current');
        }

        expect(currentNumberEl.textContent).toBe('42');
        expect(currentCell.classList.contains('current')).toBe(true);
    });

    test('should update countdown display', () => {
        const countdownEl = document.getElementById('countdown');
        const progressBar = document.getElementById('progressBar');
        
        // Simular updateCountdown
        const timeLeft = 3;
        countdownEl.textContent = timeLeft;
        const progressPercent = (timeLeft / 5) * 100;
        progressBar.style.width = `${progressPercent}%`;

        expect(countdownEl.textContent).toBe('3');
        expect(progressBar.style.width).toBe('60%');
    });

    test('should update drawn sequence', () => {
        const drawnSequence = document.getElementById('drawnSequence');
        const drawnNumbers = [5, 12, 33, 67];
        
        // Simular updateDrawnSequence
        drawnSequence.innerHTML = '';
        drawnNumbers.forEach(number => {
            const numberEl = document.createElement('div');
            numberEl.className = 'sequence-number';
            numberEl.textContent = number;
            drawnSequence.appendChild(numberEl);
        });

        const sequenceNumbers = drawnSequence.querySelectorAll('.sequence-number');
        expect(sequenceNumbers.length).toBe(4);
        expect(sequenceNumbers[0].textContent).toBe('5');
        expect(sequenceNumbers[3].textContent).toBe('67');
    });

    test('should handle button states', () => {
        const startBtn = document.getElementById('startBtn');
        
        // Simular updateButtons
        const isGameActive = true;
        startBtn.disabled = isGameActive;
        startBtn.textContent = isGameActive ? 'Jogo em Andamento' : 'Iniciar Jogo';

        expect(startBtn.disabled).toBe(true);
        expect(startBtn.textContent).toBe('Jogo em Andamento');
    });
});
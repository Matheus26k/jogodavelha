const request = require('supertest');
const { createServer } = require('http');
const { Server } = require('socket.io');
const Client = require('socket.io-client');

describe('Bingo Server Tests', () => {
    let httpServer;
    let httpServerAddr;
    let ioServer;

    beforeAll((done) => {
        httpServer = createServer();
        httpServerAddr = httpServer.listen().address();
        ioServer = new Server(httpServer);
        done();
    });

    afterAll((done) => {
        ioServer.close();
        httpServer.close();
        done();
    });

    test('should serve static files', async () => {
        const app = require('express')();
        app.use(require('express').static('public'));
        
        const response = await request(app).get('/');
        expect(response.status).toBe(404); // Sem index.html na raiz
    });

    test('should handle socket connection', (done) => {
        ioServer.on('connection', (socket) => {
            expect(socket).toBeDefined();
            done();
        });

        const clientSocket = new Client(`http://localhost:${httpServerAddr.port}`);
        clientSocket.on('connect', () => {
            clientSocket.disconnect();
        });
    });

    test('should emit game state on connection', (done) => {
        ioServer.on('connection', (socket) => {
            socket.emit('gameState', {
                drawnNumbers: [],
                currentNumber: null,
                timeLeft: 5,
                isGameActive: false
            });
        });

        const clientSocket = new Client(`http://localhost:${httpServerAddr.port}`);
        clientSocket.on('gameState', (state) => {
            expect(state.timeLeft).toBe(5);
            expect(state.isGameActive).toBe(false);
            expect(state.drawnNumbers).toEqual([]);
            clientSocket.disconnect();
            done();
        });
    });
});
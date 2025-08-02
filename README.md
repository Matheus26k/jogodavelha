# 🎯 Jogo de Bingo

Um jogo de bingo interativo com cronômetro e sorteio automático de números a cada 20 segundos.

## 🚀 Funcionalidades

- ⏰ Cronômetro de 5 segundos entre sorteios
- 🎲 Sorteio automático de números de 1 a 75
- 📊 Tabela visual dos números sorteados
- 🔄 Sistema de reset do jogo
- 📱 Interface responsiva
- 🌐 Multiplayer em tempo real via WebSocket

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express.js
- Socket.IO

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- Socket.IO Client

## 📦 Instalação

1. **Clone ou baixe o projeto**

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o servidor:**
   ```bash
   npm start
   ```
   
   Ou para desenvolvimento com auto-reload:
   ```bash
   npm run dev
   ```

4. **Acesse o jogo:**
   Abra seu navegador e vá para: `http://localhost:3000`

## 🎮 Como Jogar

1. Clique em **"Iniciar Jogo"** para começar
2. A cada 5 segundos um novo número será sorteado automaticamente
3. Os números sorteados aparecerão destacados na tabela
4. O número atual fica piscando em vermelho
5. A sequência de sorteio é mostrada na parte inferior
6. Use **"Resetar"** para reiniciar o jogo

## 📁 Estrutura do Projeto

```
AppAmazonQ/
├── server.js          # Servidor backend
├── package.json       # Dependências do projeto
├── README.md          # Este arquivo
└── public/            # Arquivos do frontend
    ├── index.html     # Página principal
    ├── style.css      # Estilos
    └── script.js      # Lógica do frontend
```

## 🔧 Configuração

- **Porta padrão:** 3000 (pode ser alterada via variável de ambiente PORT)
- **Intervalo de sorteio:** 5 segundos
- **Números disponíveis:** 1 a 75

## 📝 Scripts Disponíveis

- `npm start` - Inicia o servidor em modo produção
- `npm run dev` - Inicia o servidor em modo desenvolvimento (com nodemon)

## 🌐 Deploy

Para fazer deploy em plataformas como Heroku, Vercel, ou Railway:

1. Certifique-se de que a variável de ambiente `PORT` está configurada
2. O comando de start está definido no package.json
3. Todas as dependências estão listadas corretamente

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades!

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.
# 🎯 Bingo Animado

Um jogo de bingo interativo com animações modernas, cronômetro e sorteio automático de números a cada 3 segundos.

## ✨ Novas Funcionalidades

- 🎨 **Design Moderno:** Interface com gradientes e animações CSS avançadas
- ⚡ **Animações Fluidas:** Transições suaves e efeitos visuais
- 🎊 **Efeitos Especiais:** Confetes quando o jogo termina
- 📱 **Totalmente Responsivo:** Funciona perfeitamente em mobile
- 🔔 **Notificações:** Alertas visuais elegantes
- ⏰ **Tempo Otimizado:** Sorteio a cada 5 segundos para mais dinamismo

## 🚀 Funcionalidades

- ⏰ Cronômetro de 5 segundos entre sorteios
- 🎲 Sorteio automático de números de 1 a 75
- 📊 Tabela visual dos números sorteados com animações
- 🔄 Sistema de reset do jogo
- 📱 Interface responsiva com design moderno
- 🌐 Multiplayer em tempo real via WebSocket
- 🎨 Animações CSS avançadas
- 🎊 Efeitos visuais especiais

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express.js
- Socket.IO

### Frontend
- HTML5
- CSS3 com animações avançadas
- JavaScript (ES6+) com efeitos visuais
- Socket.IO Client
- Google Fonts (Fredoka One + Poppins)

## 📦 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Matheus26k/jogodavelha.git
   cd jogodavelha
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o servidor:**
   ```bash
   npm start
   ```

4. **Acesse o jogo:**
   Abra seu navegador e vá para: `http://localhost:3000`

## 🎮 Como Jogar

1. Clique em **"🚀 Iniciar Jogo"** para começar
2. A cada 5 segundos um novo número será sorteado automaticamente
3. Os números sorteados aparecerão destacados na tabela com animações
4. O número atual fica piscando em vermelho com efeitos especiais
5. A sequência de sorteio é mostrada na parte inferior com cores alternadas
6. Use **"🔄 Resetar"** para reiniciar o jogo
7. Quando todos os números forem sorteados, confetes aparecem na tela!

## 🎨 Recursos Visuais

### Animações
- **Entrada da página:** Fade in suave
- **Números sorteados:** Animação de escala e rotação
- **Número atual:** Pulso com brilho
- **Barra de progresso:** Gradiente animado
- **Botões:** Efeito hover com brilho
- **Confetes:** Chuva de confetes no final

### Design
- **Gradientes:** Fundo com múltiplas cores
- **Glassmorphism:** Efeito de vidro nos cards
- **Sombras:** Profundidade com box-shadow
- **Tipografia:** Fontes modernas do Google Fonts
- **Responsivo:** Adaptável a todos os dispositivos

## 📁 Estrutura do Projeto

```
AppAmazonQ/
├── server.js          # Servidor backend (3 segundos)
├── package.json       # Dependências do projeto
├── README.md          # Este arquivo
├── tests/             # Testes automatizados
└── public/            # Arquivos do frontend
    ├── index.html     # Página principal com emojis
    ├── style.css      # Estilos modernos com animações
    └── script.js      # Lógica com efeitos visuais
```

## 🔧 Configuração

- **Porta padrão:** 3000 (pode ser alterada via variável de ambiente PORT)
- **Intervalo de sorteio:** 5 segundos
- **Números disponíveis:** 1 a 75
- **Animações:** CSS3 com hardware acceleration
- **Fontes:** Google Fonts carregadas automaticamente

## 📝 Scripts Disponíveis

- `npm start` - Inicia o servidor em modo produção
- `npm run dev` - Inicia o servidor em modo desenvolvimento (com nodemon)
- `npm test` - Executa os testes automatizados
- `node run-tests.js` - Executa testes específicos

## 🧪 Testes

O projeto inclui testes automatizados e manuais:
- **Testes automatizados:** 11 testes validando lógica e funcionalidades
- **Testes manuais:** Guia completo em `tests/manual-tests.md`
- **Documentação:** `TESTING.md` com instruções detalhadas

## 🌐 Deploy

### Heroku
```bash
heroku create seu-bingo-animado
git push heroku master
```

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### Railway
Conecte o repositório no Railway.app para deploy automático.

## 🎯 Melhorias Implementadas

1. **Performance:** Tempo ajustado para 5 segundos
2. **UX/UI:** Design completamente renovado
3. **Animações:** Efeitos visuais em todos os elementos
4. **Feedback:** Notificações e efeitos sonoros (vibração)
5. **Acessibilidade:** Cores contrastantes e animações suaves
6. **Mobile:** Interface otimizada para dispositivos móveis

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades!

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.
const { execSync } = require('child_process');

console.log('🧪 Executando Testes do Jogo de Bingo\n');

try {
    console.log('📋 Executando testes simples...');
    execSync('npx jest tests/simple.test.js --verbose', { stdio: 'inherit' });
    
    console.log('\n📋 Executando testes de lógica...');
    execSync('npx jest tests/game-logic.test.js --verbose', { stdio: 'inherit' });
    
    console.log('\n✅ Todos os testes principais passaram!');
    console.log('\n📝 Para executar testes manuais:');
    console.log('1. Execute: npm start');
    console.log('2. Acesse: http://localhost:3000');
    console.log('3. Siga o guia: tests/manual-tests.md');
    
} catch (error) {
    console.error('\n❌ Alguns testes falharam');
    process.exit(1);
}
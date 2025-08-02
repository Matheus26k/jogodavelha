# 📋 Testes Manuais - Jogo de Bingo

## 🎯 Objetivo
Validar manualmente todas as funcionalidades do jogo de bingo.

## 📝 Checklist de Testes

### ✅ Teste 1: Carregamento da Página
- [ ] Acessar `http://localhost:3000`
- [ ] Verificar se a página carrega corretamente
- [ ] Verificar se todos os elementos visuais estão presentes:
  - [ ] Título "BINGO"
  - [ ] Botões "Iniciar Jogo" e "Resetar"
  - [ ] Área "Número Atual" mostrando "-"
  - [ ] Cronômetro mostrando "5"
  - [ ] Grid com números 1-75
  - [ ] Área "Sequência de Sorteio" vazia

**Resultado Esperado:** Página carrega sem erros, todos os elementos visíveis.

---

### ✅ Teste 2: Iniciar Jogo
- [ ] Clicar no botão "Iniciar Jogo"
- [ ] Verificar se o botão muda para "Jogo em Andamento" e fica desabilitado
- [ ] Verificar se um número é sorteado imediatamente
- [ ] Verificar se o cronômetro inicia a contagem regressiva de 5 segundos
- [ ] Verificar se a barra de progresso diminui gradualmente

**Resultado Esperado:** Jogo inicia, número sorteado, cronômetro funcionando.

---

### ✅ Teste 3: Sorteio Automático
- [ ] Aguardar 5 segundos após iniciar o jogo
- [ ] Verificar se um novo número é sorteado automaticamente
- [ ] Verificar se o cronômetro reinicia em 5 segundos
- [ ] Repetir observação por pelo menos 3 ciclos

**Resultado Esperado:** Números sorteados a cada 5 segundos exatos.

---

### ✅ Teste 4: Visualização dos Números
- [ ] Verificar se o número atual aparece destacado em vermelho piscando
- [ ] Verificar se números já sorteados ficam verdes na tabela
- [ ] Verificar se a sequência de sorteio é atualizada na parte inferior
- [ ] Verificar se não há números repetidos

**Resultado Esperado:** Interface visual atualizada corretamente.

---

### ✅ Teste 5: Cronômetro e Barra de Progresso
- [ ] Observar se o cronômetro conta de 5 até 0
- [ ] Verificar se a barra de progresso:
  - [ ] Azul quando > 2 segundos
  - [ ] Laranja quando ≤ 2 segundos
  - [ ] Vermelha quando ≤ 1 segundo
- [ ] Verificar se a barra diminui proporcionalmente

**Resultado Esperado:** Cronômetro preciso, cores da barra corretas.

---

### ✅ Teste 6: Reset do Jogo
- [ ] Durante um jogo ativo, clicar em "Resetar"
- [ ] Verificar se o jogo para imediatamente
- [ ] Verificar se todos os números voltam ao estado inicial
- [ ] Verificar se o cronômetro volta para 5
- [ ] Verificar se o botão volta para "Iniciar Jogo"
- [ ] Verificar se a sequência de sorteio é limpa

**Resultado Esperado:** Jogo resetado completamente.

---

### ✅ Teste 7: Finalização do Jogo
**Nota:** Este teste demora ~6 minutos (75 números × 5 segundos)
- [ ] Deixar o jogo rodar até sortear todos os 75 números
- [ ] Verificar se aparece alerta "Jogo finalizado!"
- [ ] Verificar se o jogo para automaticamente
- [ ] Verificar se o botão volta para "Iniciar Jogo"

**Resultado Esperado:** Jogo finaliza corretamente após 75 números.

---

### ✅ Teste 8: Múltiplas Sessões
- [ ] Iniciar um jogo
- [ ] Resetar
- [ ] Iniciar novamente
- [ ] Verificar se não há interferência entre sessões
- [ ] Repetir 3 vezes

**Resultado Esperado:** Cada sessão independente, sem bugs.

---

### ✅ Teste 9: Responsividade
- [ ] Testar em tela desktop (1920x1080)
- [ ] Testar em tablet (768px)
- [ ] Testar em mobile (375px)
- [ ] Verificar se todos os elementos se adaptam

**Resultado Esperado:** Interface responsiva em todos os tamanhos.

---

### ✅ Teste 10: Performance
- [ ] Abrir DevTools (F12)
- [ ] Verificar console por erros JavaScript
- [ ] Verificar Network por recursos não carregados
- [ ] Observar uso de CPU durante o jogo
- [ ] Verificar se não há memory leaks

**Resultado Esperado:** Sem erros, performance estável.

---

## 🐛 Registro de Bugs

### Bug #1
**Descrição:** 
**Passos para reproduzir:** 
**Resultado esperado:** 
**Resultado atual:** 
**Severidade:** Alta/Média/Baixa

---

## ✅ Critérios de Aceitação

Para considerar o teste manual **APROVADO**, todos os itens devem estar funcionando:

1. ✅ Página carrega sem erros
2. ✅ Jogo inicia corretamente
3. ✅ Números sorteados a cada 5 segundos exatos
4. ✅ Interface visual atualizada corretamente
5. ✅ Cronômetro e barra de progresso funcionais
6. ✅ Reset funciona perfeitamente
7. ✅ Jogo finaliza após 75 números
8. ✅ Múltiplas sessões sem interferência
9. ✅ Interface responsiva
10. ✅ Performance estável, sem erros

---

## 📊 Resultado Final

**Data do Teste:** ___________
**Testador:** ___________
**Status:** ✅ APROVADO / ❌ REPROVADO
**Observações:** ___________
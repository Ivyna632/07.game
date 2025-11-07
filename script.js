/* script.js */

// ... (Restante do seu código: vela, envelope, funções transitionToPage e answerAndNavigate) ...

// ------------------------------------
// NOVO E DEFINITIVO: Lógica Específica da Página 6 (Botão de Fuga)
// ------------------------------------
if (document.getElementById('quiz-final')) {
    const btnIvyna = document.getElementById('btn-ivyna');
    const btnDavi = document.getElementById('btn-davi');
    const container = document.getElementById('quiz-final');

    // 1. Lógica para fazer o botão fugir do cursor
    if (btnDavi) {
        // Inicializa o botão para posicionamento absoluto no CSS
        btnDavi.classList.add('fugitive-button');

        btnDavi.addEventListener('mouseover', function(e) {
            
            // Pega as dimensões do container (área de movimento)
            const containerRect = container.getBoundingClientRect();
            const btnRect = btnDavi.getBoundingClientRect();

            // Área de segurança para evitar que o botão saia completamente da tela
            const padding = 20; 

            // Gera nova posição X: entre o padding e o container - largura do botão - padding
            let newX = padding + Math.random() * (containerRect.width - btnRect.width - 2 * padding);
            
            // Gera nova posição Y: entre o padding e o container - altura do botão - padding
            // Ajustamos Y para evitar a área do título
            let minY = 100; // Posição mínima Y (abaixo do título)
            let newY = minY + Math.random() * (containerRect.height - btnRect.height - minY - padding);


            // Aplica a nova posição. Usamos 'translate' que é mais performático que 'left/top'
            // Mas, como estamos ajustando 'left/top' no CSS, vamos usar eles aqui para simplicidade:
            btnDavi.style.left = `${newX}px`;
            btnDavi.style.top = `${newY}px`;
        });
    }

    // 2. Lógica para a resposta correta (IVYNA)
    btnIvyna.addEventListener('click', function() {
        // Navega para './pag-final.html'
        answerAndNavigate('./pag-final.html');
    });
}

// ... (Adiciona as funções ao escopo global) ...
window.transitionToPage = transitionToPage;
window.answerAndNavigate = answerAndNavigate;
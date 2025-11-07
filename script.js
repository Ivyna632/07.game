/* script.js */

// Função de Transição Profissional (Mantida)
function transitionToPage(url) {
    const body = document.body;
    body.classList.add('page-exit');

    setTimeout(() => {
        window.location.href = url; 
    }, 500);
}

// Lógica de Vela, Envelope e Navegação (Mantida)

// Função universal de navegação no quiz (Mantida)
function answerAndNavigate(url) {
    transitionToPage(url);
}

// ------------------------------------
// NOVO: Lógica Específica da Página 6 (Botão de Fuga)
// ------------------------------------
if (document.getElementById('quiz-final')) {
    const btnIvyna = document.getElementById('btn-ivyna');
    const btnDavi = document.getElementById('btn-davi');
    const container = document.getElementById('quiz-final');

    // 1. Lógica para fazer o botão fugir do cursor
    if (btnDavi) {
        btnDavi.addEventListener('mouseover', function(e) {
            
            // Pega a posição do botão e o tamanho do container
            const containerRect = container.getBoundingClientRect();
            const btnRect = btnDavi.getBoundingClientRect();

            // Gera novas posições aleatórias dentro dos limites do container
            // Garante que o botão não saia da tela
            let newX = Math.random() * (containerRect.width - btnRect.width);
            let newY = Math.random() * (containerRect.height - btnRect.height);

            // Aplica a nova posição com transição suave (definida no CSS)
            btnDavi.style.position = 'absolute';
            btnDavi.style.left = `${newX}px`;
            btnDavi.style.top = `${newY}px`;
        });
        
        // Desbloqueia a navegação para Davi, mas ele nunca será clicado
        // btnDavi.addEventListener('click', function() {
        //     alert('Ah, não! Ele fugiu de novo!'); 
        // });
    }

    // 2. Lógica para a resposta correta (IVYNA)
    btnIvyna.addEventListener('click', function() {
        // Navega para './pag-final.html'
        answerAndNavigate('./pag-final.html');
    });
}

// O restante do JS anterior (vela e envelope) deve ser mantido aqui:
// Coloque o código da vela e do envelope acima desta seção.

// Adiciona as funções ao escopo global (para uso em onclick nos HTMLs)
window.transitionToPage = transitionToPage;
window.answerAndNavigate = answerAndNavigate;
/* script.js */

// Caminho base do projeto no GitHub Pages. ESSENCIAL para subpastas.
const GITHUB_BASE_PATH = "/07.game/";

// Função de Transição Profissional (Corrigida para Subpastas)
function transitionToPage(filename) {
    const body = document.body;
    body.classList.add('page-exit');

    // Constrói a URL de destino: [ORIGEM] + [CAMINHO BASE] + [NOME DO ARQUIVO]
    // Ex: https://ivyna632.github.io/07.game/pag4.html
    let targetUrl = window.location.origin + GITHUB_BASE_PATH + filename;
    
    // Pequeno ajuste para garantir que não haja barras duplas (Ex: /07.game//pag4.html)
    if (GITHUB_BASE_PATH.endsWith('/') && filename.startsWith('/')) {
        targetUrl = targetUrl.replace('//', '/');
    }

    setTimeout(() => {
        window.location.href = targetUrl;
    }, 500);
}

// Função universal de navegação no quiz
function answerAndNavigate(url) {
    transitionToPage(url);
}


// ------------------------------------
// Lógica Específica da Página 1 (Vela)
// ------------------------------------
if (document.getElementById('vela-countdown')) {
    let count = 3;
    const counterElement = document.getElementById('vela-countdown');
    const vela = document.getElementById('vela-element');

    function startCountdown() {
        counterElement.textContent = count;
        
        const interval = setInterval(() => {
            count--;
            counterElement.textContent = count;
            
            if (count === 0) {
                clearInterval(interval);
                vela.classList.add('vela-apagando');
                document.body.classList.add('show-smoke');
                
                setTimeout(() => {
                    const fogo = document.querySelector('.fogo');
                    if (fogo) fogo.remove();
                }, 300);

                // Navega para 'pag2.html' (URL simples)
                setTimeout(() => {
                    transitionToPage('pag2.html');
                }, 1500);
            }
        }, 1000);
    }
    
    window.onload = startCountdown;
}


// ------------------------------------
// Lógica Específica da Página 2 (Envelope)
// ------------------------------------
if (document.getElementById('envelope-trigger')) {
    document.getElementById('envelope-trigger').addEventListener('click', function() {
        const envelope = this.querySelector('.envelope');
        
        envelope.classList.add('envelope-open');
        
        // Navega para 'pag3.html' (URL simples)
        setTimeout(() => {
            transitionToPage('pag3.html');
        }, 1000);
    });
}

// ------------------------------------
// Lógica da Página 6 (Botão de Fuga)
// ------------------------------------
if (document.getElementById('quiz-final')) {
    const btnIvyna = document.getElementById('btn-ivyna');
    const btnDavi = document.getElementById('btn-davi');
    const container = document.getElementById('quiz-final');

    if (btnDavi) {
        btnDavi.classList.add('fugitive-button');

        btnDavi.addEventListener('mouseover', function(e) {
            
            const containerRect = container.getBoundingClientRect();
            const btnRect = btnDavi.getBoundingClientRect();

            const padding = 20; 

            let newX = padding + Math.random() * (containerRect.width - btnRect.width - 2 * padding);
            let minY = 100; 
            let newY = minY + Math.random() * (containerRect.height - btnRect.height - minY - padding);

            btnDavi.style.left = `${newX}px`;
            btnDavi.style.top = `${newY}px`;
        });
    }

    // Lógica para a resposta correta (IVYNA)
    btnIvyna.addEventListener('click', function() {
        // Navega para 'pag-final.html' (URL simples)
        answerAndNavigate('pag-final.html');
    });
}

// Adiciona as funções ao escopo global
window.transitionToPage = transitionToPage;
window.answerAndNavigate = answerAndNavigate;
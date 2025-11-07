/* script.js */

// Função de Transição Profissional
function transitionToPage(url) {
    const body = document.body;
    body.classList.add('page-exit');

    setTimeout(() => {
        // CORREÇÃO: Usando caminho relativo para robustez
        window.location.href = url; 
    }, 500);
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

                // Navega para './pag2.html'
                setTimeout(() => {
                    transitionToPage('./pag2.html');
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
        
        // Navega para './pag3.html'
        setTimeout(() => {
            transitionToPage('./pag3.html');
        }, 1000);
    });
}

// ------------------------------------
// Lógica Específica do Quiz (Paginas 4, 5, 6)
// ------------------------------------

// Função universal de navegação no quiz
function answerAndNavigate(url) {
    transitionToPage(url);
}

// Lógica para a Página 6 (Botão de Fuga)
if (document.getElementById('quiz-final')) {
    const btnIvyna = document.getElementById('btn-ivyna');
    const btnDavi = document.getElementById('btn-davi');

    btnDavi.addEventListener('click', function() {
        // Bloqueia o botão 'Davi'
        this.textContent = 'FUGIR';
        this.id = 'btn-fugir';
        this.classList.add('button-blocked'); 
        this.style.backgroundColor = 'gray';
        this.style.cursor = 'not-allowed';
        this.style.pointerEvents = 'none'; // Impede o clique
    });

    btnIvyna.addEventListener('click', function() {
        // Navega para './pag-final.html'
        answerAndNavigate('./pag-final.html');
    });
}

// Adiciona as funções ao escopo global (para uso em onclick nos HTMLs)
window.transitionToPage = transitionToPage;
window.answerAndNavigate = answerAndNavigate;
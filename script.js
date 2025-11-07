/* script.js */

// Função de Transição Profissional
function transitionToPage(url) {
    const body = document.body;
    // Adiciona a classe de saída
    body.classList.add('page-exit');

    // Espera a animação de saída terminar (0.5s)
    setTimeout(() => {
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
                // Inicia a animação da vela se apagando
                vela.classList.add('vela-apagando');
                document.body.classList.add('show-smoke'); // Adiciona fumaça
                
                // Remove o fogo do DOM para garantir o fim visual
                setTimeout(() => {
                    const fogo = document.querySelector('.fogo');
                    if (fogo) fogo.remove();
                }, 300);

                // Transição suave para a próxima página após a animação
                setTimeout(() => {
                    transitionToPage('pagina2.html');
                }, 1500); // 1.5s após a vela apagar
            }
        }, 1000);
    }
    
    // Inicia o contador assim que a página carregar
    window.onload = startCountdown;
}


// ------------------------------------
// Lógica Específica da Página 2 (Envelope)
// ------------------------------------
if (document.getElementById('envelope-trigger')) {
    document.getElementById('envelope-trigger').addEventListener('click', function() {
        const envelope = this.querySelector('.envelope');
        
        // Inicia a animação "entrando" no envelope
        envelope.classList.add('envelope-open');
        
        // Transição para a próxima página após a animação (1s)
        setTimeout(() => {
            transitionToPage('pagina3.html');
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
    const btnFugir = document.getElementById('btn-fugir');

    btnDavi.addEventListener('click', function() {
        // Bloqueia o botão 'Davi' (que se transforma em 'Fugir')
        this.textContent = 'FUGIR';
        this.id = 'btn-fugir'; // Muda o ID para aplicar o estilo de bloqueio
        this.classList.add('button-blocked'); 
        this.style.backgroundColor = 'gray';
        this.style.cursor = 'not-allowed';
        this.style.pointerEvents = 'none'; // Impede o clique
    });

    btnIvyna.addEventListener('click', function() {
        // Resposta correta, navega para a página final
        answerAndNavigate('pagina-final.html');
    });
}

// Adiciona as funções ao escopo global (para uso em onclick nos HTMLs)
window.transitionToPage = transitionToPage;
window.answerAndNavigate = answerAndNavigate;
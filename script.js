// script.js — Mini Jogo de Aniversário 💜
// Funções principais: contador da vela, animações, transições e música contínua

(function () {
  // Iniciar música quando o usuário interagir (requerido por navegadores)
  function startBgm() {
    const audio = document.getElementById("bgm");
    if (!audio) return;
    audio.volume = 0.45;
    const play = audio.play();
    if (play && play.catch) {
      play.catch(() => {
        // Bloqueado até o primeiro clique/toque
      });
    }
  }

  document.addEventListener("click", startBgm, { once: true });
  document.addEventListener("touchstart", startBgm, { once: true });

  const path = location.pathname.split("/").pop() || "index.html";

  // ================================
  // 🔥 Página 1 - Assopre a vela
  // ================================
  if (path === "index.html" || path === "") {
    let counter = document.getElementById("counter");
    let flame = document.querySelector(".flame");
    let smoke = document.querySelector(".smoke");
    let n = 3;

    const tick = setInterval(() => {
      n--;
      if (counter) counter.textContent = n > 0 ? n : "";
      if (n <= 0) {
        clearInterval(tick);

        // Apagar a vela — sumir chama, aumentar fumaça
        if (flame) flame.style.opacity = 0;
        if (smoke) {
          smoke.style.opacity = 0.9;
          smoke.style.animationDuration = "2s";
        }

        // Transição para a próxima página
        setTimeout(() => (location.href = "pag2.html"), 1200);
      }
    }, 1000);
  }

  // ================================
  // 💌 Página 2 - Envelope
  // ================================
  if (path === "pag2.html") {
    const envelope = document.getElementById("envelope");
    const letterBox = document.getElementById("letterBox");
    const enterBtn = document.getElementById("enterLetter");

    if (envelope) {
      envelope.addEventListener("click", () => {
        envelope.classList.add("open");
        setTimeout(() => {
          envelope.classList.add("move-up");
        }, 400);
        setTimeout(() => {
          if (letterBox) letterBox.classList.remove("hidden");
        }, 900);
      });
    }

    if (enterBtn) {
      enterBtn.addEventListener("click", () => {
        enterBtn.disabled = true;
        setTimeout(() => (location.href = "pag3.html"), 700);
      });
    }
  }

  // ================================
  // 🎉 Página 3 - Convite para o quiz
  // ================================
  if (path === "pag3.html") {
    const btn = document.getElementById("toPag4");
    if (btn) btn.addEventListener("click", () => (location.href = "pag4.html"));
  }

  // ================================
  // 💞 Página 4 - Primeira pergunta
  // ================================
  if (path === "pag4.html") {
    document.querySelectorAll(".choice").forEach((b) =>
      b.addEventListener("click", () => (location.href = "pag5.html"))
    );
  }

  // ================================
  // ❤️ Página 5 - Segunda pergunta
  // ================================
  if (path === "pag5.html") {
    document.querySelectorAll(".choice").forEach((b) =>
      b.addEventListener("click", () => (location.href = "pag6.html"))
    );
  }

  // ================================
  // 😄 Página 6 - Quem ama mais
  // ================================
  if (path === "pag6.html") {
    const btnDavi = document.getElementById("btn-davi");
    const btnFugir = document.getElementById("btn-fugir");
    const btnIvyna = document.getElementById("btn-ivyna");

    if (btnDavi) {
      btnDavi.addEventListener("click", () => {
        // "Desabilitar" o botão fugir
        if (btnFugir) {
          btnFugir.disabled = true;
          btnFugir.style.opacity = 0.35;
          btnFugir.style.cursor = "not-allowed";
        }

        // Pequena animação de sacudir o botão “davi”
        btnDavi.animate(
          [
            { transform: "translateX(0)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(-8px)" },
            { transform: "translateX(0)" },
          ],
          { duration: 420 }
        );
      });
    }

    if (btnIvyna) {
      btnIvyna.addEventListener("click", () => {
        setTimeout(() => (location.href = "final.html"), 500);
      });
    }
  }

  // ================================
  // 💗 Página Final
  // ================================
  if (path === "final.html") {
    // Nenhum controle especial necessário aqui
  }
})();

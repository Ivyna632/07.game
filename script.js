let contador = 3;
const span = document.getElementById("contador");
const vela = document.getElementById("vela");

const intervalo = setInterval(() => {
  contador--;
  span.textContent = contador;

  if (contador === 0) {
    clearInterval(intervalo);
    vela.src = "vela_apagada.gif";
    setTimeout(() => {
      document.body.classList.add("fade-out");
      window.location.href = "page2.html";
    }, 2000);
  }
}, 1000);

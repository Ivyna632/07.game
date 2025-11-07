/* ===== CONTROLE DE PÁGINAS ===== */
let currentPage = 1;
function nextPage() {
  document.getElementById(`page${currentPage}`).classList.remove('active');
  currentPage++;
  document.getElementById(`page${currentPage}`).classList.add('active');
}

/* ===== ANIMAÇÃO DO ENVELOPE ===== */
const envelope = document.getElementById("envelope");
envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  setTimeout(() => nextPage(), 1500); // abre e vai pra próxima página
});

/* ===== CONTADOR AUTOMÁTICO (VELA) ===== */
setTimeout(() => {
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.add("active");
}, 6000); // após 6 segundos, muda automaticamente para a página 2

const olho = document.querySelector(".fechado");
const valor = document.querySelector(".saldoConta");
const disponivel = document.querySelector(".limiteDisp");
const valorSaldo = document.querySelector(".valor-saldo");
const valorLimite = document.querySelector(".valor-limite");

let clicado = false;

olho.addEventListener("click", function() {
    if (!clicado) {
        olho.src = "./img/open.png";
        valorSaldo.textContent = "R$ 1500,00";
        valor.replaceWith(valorSaldo);
        valorLimite.textContent = "R$ 100,00";
        disponivel.replaceWith(valorLimite);
    } else {
        olho.src = "./img/closed.png";
        valorSaldo.textContent = "";
        valorLimite.textContent = "";
        valorSaldo.replaceWith(valor);
        valorLimite.replaceWith(disponivel);
    }
    clicado = !clicado;
});
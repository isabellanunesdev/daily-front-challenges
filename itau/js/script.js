document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-button");
  const toggleImage = document.getElementById("toggle-image");
  const saldoText = document.getElementById("saldo-text");
  const limiteText = document.getElementById("limite-text");
  const saldo = "R$ 100";
  const limite = "R$ 100";

  let isSaldoVisible = false;

  toggleButton.addEventListener("click", () => {
    if (isSaldoVisible) {
      toggleImage.src = "./img/closed.png";
      saldoText.textContent = "....";
      limiteText.textContent = "....";
    } else {
      toggleImage.src = "./img/open.png";
      saldoText.textContent = saldo;
      limiteText.textContent = limite;
    }
    isSaldoVisible = !isSaldoVisible;
  });
});

let isVisible = false;

const changeVisibility = () => {
  const showInfoContainer = document.querySelector(".show-info-container");
  const moneyViewContainer = document.querySelector(".money-view-container");
  const limitViewContainer = document.querySelector(".limit-view-container");

  const showInfo = document.querySelector(".show-info");
  const moneyView = document.querySelector(".money-view");
  const limitView = document.querySelector(".limit-view");

  if (isVisible) {
    showInfoContainer.removeChild(showInfo);
    moneyViewContainer.removeChild(moneyView);
    limitViewContainer.removeChild(limitView);

    const showInfoElement = document.createElement("img");
    showInfoElement.src = "./assets/img/closed.png";
    showInfoElement.alt = "Visibilidade de dados limitada";
    showInfoElement.className = "show-info";

    const moneyViewElement = document.createElement("img");
    moneyViewElement.src = "./assets/img/more-black.png";
    moneyViewElement.alt = "Saldo oculto";
    moneyViewElement.className = "money-view";

    const limitViewElement = document.createElement("img");
    limitViewElement.src = "./assets/img/more-gray.png";
    limitViewElement.alt = "Conferir seu limite";
    limitViewElement.className = "limit-view";

    showInfoContainer.appendChild(showInfoElement);
    moneyViewContainer.appendChild(moneyViewElement);
    limitViewContainer.appendChild(limitViewElement);

    isVisible = false;
  } else {
    showInfoContainer.removeChild(showInfo);
    moneyViewContainer.removeChild(moneyView);
    limitViewContainer.removeChild(limitView);

    const showInfoElement = document.createElement("img");
    showInfoElement.src = "./assets/img/open.png";
    showInfoElement.alt = "Visibilidade de dados liberada";
    showInfoElement.className = "show-info";

    const moneyViewElement = document.createElement("span");
    moneyViewElement.textContent = "R$ 1500,00";
    moneyViewElement.className = "money-view";

    const limitViewElement = document.createElement("span");
    limitViewElement.textContent = "R$ 100,00";
    limitViewElement.className = "limit-view";

    showInfoContainer.appendChild(showInfoElement);
    moneyViewContainer.appendChild(moneyViewElement);
    limitViewContainer.appendChild(limitViewElement);

    isVisible = true;
  }
};

const showInfoContainer = document.querySelector(".show-info-container");
showInfoContainer.addEventListener("click", changeVisibility, false);

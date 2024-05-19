const container = document.querySelector(".container");
const ballon = document.querySelector(".ballon");

const blowBallon = () => {
  container.removeChild(ballon);
};

ballon.addEventListener("click", blowBallon);

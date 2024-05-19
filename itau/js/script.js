const buttonElement = document.getElementById('btn-open-closed');
const imgElement = document.getElementById('img-open-closed');

const balanceElement = document.getElementById('balance-value');
const moreBalanceElement = document.getElementById('more-balance');
const limitElement = document.getElementById('limit-value');
const moreLimitElement = document.getElementById('more-limit');

console.log(balanceElement);
console.log(moreBalanceElement);
console.log(limitElement);
console.log(moreLimitElement);

function openClosed() {
  if (imgElement.src.includes('open.png')) {
    imgElement.src = './img/closed.png';
    imgElement.alt = 'closed';
    balanceElement.style.display = 'none';
    limitElement.style.display = 'none';
    moreBalanceElement.style.display = 'block';
    moreLimitElement.style.display = 'block';
  } else {
    imgElement.src = './img/open.png';
    imgElement.alt = 'open';
    moreBalanceElement.style.display = 'none';
    moreLimitElement.style.display = 'none';
    balanceElement.style.display = 'block';
    limitElement.style.display = 'block';
  }
}

buttonElement.addEventListener('click', openClosed);

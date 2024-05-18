document.addEventListener('DOMContentLoaded', function() {
    const visibilityButton = document.querySelector('.visibility-button');
    const visibilityImg = visibilityButton.querySelector('img')
    const balanceImage = document.querySelector('.balance-img');
    const limitImage = document.querySelector('.limit-img');

    const balanceValue = 'R$ 1500,00';
    const limitValue = 'R$ 100,00';

    const openEyeSrc = "img/open.png";
    const closedEyeSrc = "img/closed.png";

    const balanceHiddenImg = '<img src="img/more-black.png" alt="balance hiden image">';
    const limitHiddenImg = '<img src="img/more-gray.png" alt="limit hiden image">'



    visibilityButton.addEventListener('click', function() {
        if (balanceImage.innerHTML === balanceValue) {
            visibilityImg.src = closedEyeSrc;
            balanceImage.innerHTML = balanceHiddenImg;
            limitImage.innerHTML = limitHiddenImg;
        }else {
            visibilityImg.src = openEyeSrc
            balanceImage.textContent = balanceValue;
            limitImage.textContent = limitValue;
        }
    });
});
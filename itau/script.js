document.addEventListener('DOMContentLoaded', function() {
    const visibilityButton = document.querySelector('.visibility-button');
    const balanceImage = document.querySelector('.balance-img');
    const limitImage = document.querySelector('.limit-img');

    const balanceValue = 'R$ 1500,00';
    const limitValue = 'R$ 100,00';
    const openEyeImg = '<img src="img/open.png" alt="limit hiden image" class="visibility-button">'

    const balanceHidenImg = '<img src="img/more-black.png" alt="balance hiden image">';
    const limitHidenImg = '<img src="img/more-gray.png" alt="limit hiden image">'
    const closedEyeImg = '<img src="img/closed.png" alt="limit hiden image" class="visibility-button">'



    visibilityButton.addEventListener('click', function() {
        if (balanceImage.innerHTML === balanceValue) {
            visibilityButton.innerHTML = closedEyeImg;
            balanceImage.innerHTML = balanceHidenImg;
            limitImage.innerHTML = limitHidenImg;
        } else {
            visibilityButton.innerHTML = openEyeImg
            balanceImage.textContent = balanceValue;
            limitImage.textContent = limitValue;
        }
    });
});
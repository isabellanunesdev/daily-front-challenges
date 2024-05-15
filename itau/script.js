const eyes = document.querySelector('.container__info img')
const balance = document.querySelector('.balance--ocult')
const limit = document.querySelector('.limit--arrow span')
const hideLimit = document.querySelector('.hide-limit')
const hideBalance = document.querySelector('.hide-balance')
const imgLimit = document.querySelector('.more-gray')
const imgBalance = document.querySelector('.more-black')

let eyesActive = 0

eyes.addEventListener('click', () => {
    eyesActive++

    if (eyesActive > 1) {
        eyesActive = 0
    }

    if (eyesActive == 1) {
        eyes.src = './img/open.png'
        hideBalance.style.display = 'block'
        hideLimit.style.display = 'block'
        hideLimit.style.fontSize = '16px'
        hideBalance.style.fontSize = '24px'
        imgBalance.style.display = 'none'
        imgLimit.style.display = 'none'
    }

    if (eyesActive == 0) {
        eyes.src = './img/closed.png'
        hideBalance.style.display = 'none'
        hideLimit.style.display = 'none'
        imgBalance.style.display = 'block'
        imgLimit.style.display = 'block'   
    }
})
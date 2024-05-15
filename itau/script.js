const eyes = document.querySelector('.container__info img')
const balance = document.querySelector('.balance--ocult')
const limit = document.querySelector('.limit--arrow span')

let eyesActive = 0

eyes.addEventListener('click', () => {
    eyesActive++

    if (eyesActive > 1) {
        eyesActive = 0
    }

    if (eyesActive == 1) {
        eyes.src = './img/open.png'
        balance.textContent = 'R$ 100,00'
        limit.textContent = 'R$ 100,00'
        limit.style.fontSize = '16px'
    }

    if (eyesActive == 0) {
        eyes.src = './img/closed.png'
        balance.textContent = '....'
        limit.textContent = '....'
        limit.style.fontSize = '24px'
    }
})
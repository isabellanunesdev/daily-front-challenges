const previousMarvelButton = document.querySelector("#previous-marvel");
const currentMovie = document.querySelector("#current-marvel-movie");
const nextMarvelButton = document.querySelector("#next-marvel");    

const previousAnimationButton = document.querySelector("#previous-animation")
const currentAnimation = document.querySelector("#current-animation-movie");
const nextAnimationButton = document.querySelector("#next-animation")


let movieId = 1
nextMarvelButton.addEventListener('click', function() {
    if (movieId < 4) {
        movieId++
    } else {
        movieId = 1
    }
    currentMovie.src = `assets/img/marvel/0${movieId}.jpg`
});
previousMarvelButton.addEventListener('click', function () {
    if (movieId > 1) {
        movieId --
    } else {
        movieId = 4
    }
    currentMovie.src = `assets/img/marvel/0${movieId}.jpg`
})


let animationId = 1 
nextAnimationButton.addEventListener('click', function () {
    if (animationId < 4) {
        animationId++
    } else {
        animationId = 1
    }
    currentAnimation.src = `assets/img/animations/0${animationId}.jpg`
})
previousAnimationButton.addEventListener('click', function() {
    if (animationId > 1) {
        animationId --
    } else {
        animationId = 4
    }
    currentAnimation.src = `assets/img/animations/0${animationId}.jpg`
})
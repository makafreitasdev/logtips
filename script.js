const slider = document.querySelectorAll('.slider');
const buttonPrev = document.getElementById('prev-button');
const buttonNext = document.getElementById('next-button');

let imagemAtual = 0;

function esconderSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function mostrarSlider() {
    slider[imagemAtual].classList.add('on')
}

function proximoSlider() {
    esconderSlider()
    if(imagemAtual === slider.length -1) {
        imagemAtual = 0
    } else {
        imagemAtual++
    }
    mostrarSlider()
} setInterval(proximoSlider, 4000)

function anteriorSlider() {
    esconderSlider()
    if(imagemAtual === 0) {
        imagemAtual = slider.length -1
    } else {
        imagemAtual--
    }
    mostrarSlider()
}

buttonPrev.addEventListener('click', () => proximoSlider())

buttonNext.addEventListener('click', () => anteriorSlider())
const dino = document.querySelector('.dino');

function heandleKeyUp(event) {
    if (event.keyCode === 32) {
        console.log('Teste tecla espaço')
    }
}

document.addEventListener('keyup', heandleKeyUp);


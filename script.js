const dino = document.querySelector('.dino');

function heandleKeyUp(event) {
    if (event.keyCode === 32) {
        jump();
    }
}

function jump() {
    let position = 0;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            //Descendo o Dino
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px'
                }
            }, 20);
        } else {
            //Subindo o Dino
            position += 20;

            dino.style.bottom = position + 'px';
        }
    }, 20);
}

document.addEventListener('keyup', heandleKeyUp);


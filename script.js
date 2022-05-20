const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let estaPulando = false;
let posicao = 0;

function pressionaEspaco(evento) {
    if (evento.keyCode === 32) {
        if (!estaPulando) {
            pula();
        }
    }
};

function pula() {
    estaPulando = true;

    let subida = setInterval(() => {
        if (posicao >= 200) {
            clearInterval(subida);

            //Descendo
            let descida = setInterval(() => {
                if (posicao <= 0) {
                    clearInterval(descida);
                    estaPulando = false;
                } else {
                    posicao -= 20;
                    dino.style.bottom = posicao + 'px';
                }
            }, 20);
        } else{
            //Subindo
            posicao += 20;
            dino.style.bottom = posicao + 'px';
        }
    }, 20);
}

function criaCacto() {
    const cacto = document.createElement('div');
    let posicaoCacto = 1500;
    let tempoAleatorio = Math.random() * 3000;

    cacto.classList.add('cacto');
    background.appendChild(cacto);
    cacto.style.left = 1500 + 'px';

    let movimentaParaEsquerda = setInterval(() => {
        if (posicaoCacto < -60) {
            clearInterval(movimentaParaEsquerda);
            background.removeChild(cacto);
        } else if(posicaoCacto>0 && posicaoCacto<60 && posicao<60) {
            // Fim de jogo
            clearInterval(movimentaParaEsquerda);
            document.body.innerHTML = '<h1 class="game-over"> Fim de jogo </h1>'
        
        }else {
            posicaoCacto -= 10;
            cacto.style.left = posicaoCacto + 'px';
        }
    }, 20);

    setTimeout(criaCacto, tempoAleatorio);

}

criaCacto();
document.addEventListener('keyup', pressionaEspaco);

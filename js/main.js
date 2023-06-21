import { getTabuleiro } from "../stage.js";

// drag and drop api
const eTabuleiro = document.querySelector(".tabuleiro");


let arrastado = null;
setup();

function comecaArrastar(event) {
    // console.log(event.target);
    arrastado = event.target;
}

function recebeAlgo(event) {
    if (arrastado && event.target.classList.contains('casa')) {
        event.target.appendChild(arrastado);
        const posDisco = arrastado.dataset.posicao;
        const posCasa = event.target.dataset.posicao;
        console.log(`de ${posDisco} para ${posCasa}` )
        arrastado = null;
}
}
function passouPorCima(event) {
    event.preventDefault();
    //console.log(event.target);
}


function setup() {
    const tabuleiro = getTabuleiro();
    for (let i = 0; i < tabuleiro.length; i++) {
        const casa = tabuleiro[i];
        const eCasa = criaCasa(casa, i);
        eTabuleiro.appendChild(eCasa);
    }
}

function criaCasa(casa, i) {
    const eCasa = document.createElement("div");
    eCasa.dataset.posicao = i;
    eCasa.classList.add("casa");
    eCasa.addEventListener("dragover", passouPorCima);
    eCasa.addEventListener("drop", recebeAlgo);
    if (casa) {
        const eDisco = criaDisco(casa, i);
        eCasa.appendChild(eDisco);
    }
    return eCasa;
}

function criaDisco(casa, i) {
    const eDisco = document.createElement("div");
    eDisco.draggable = true; // isso resolve o problema do clickl duplo
    eDisco.dataset.posicao = i;
    eDisco.classList.add("disco");
    eDisco.addEventListener("dragstart", comecaArrastar);
    if (casa === 'p') {
        eDisco.classList.add("preto");
    }
    else {
        eDisco.classList.add("branco");
    }
    return eDisco;
}
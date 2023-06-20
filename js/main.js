import { getTabuleiro } from "../stage.js";

// drag and drop api
const eTabuleiro  =  document.querySelector(".tabuleiro");
const disco = document.querySelector(".disco");



let arrastado = null;
setup();

function comecaArrastar(event) {
   // console.log(event.target);
    arrastado = event.target;
}

function recebeAlgo(event) {
    //console.log("Aqui" + event.target);
    if(arrastado){
        event.target.appendChild(arrastado);
        arrastado = null;
    }
}
function passouPorCima(event) {
    event.preventDefault();
    //console.log(event.target);
}


function setup(){
    const tabuleiro = getTabuleiro();
    for (let i = 0; i < tabuleiro.length; i++) {
        const casa = tabuleiro[i];
        const eCasa = criaCasa(casa);
        eTabuleiro.appendChild(eCasa);
    }
}

function criaCasa(casa){
    const eCasa = document.createElement("div");
    eCasa.classList.add("casa");
    eCasa.addEventListener("dragover", passouPorCima);
    eCasa.addEventListener("drop", recebeAlgo);
    if (casa) {
        const eDisco = criaDisco(casa);
        eCasa.appendChild(eDisco);
    }
    return eCasa;
}

function criaDisco(casa){
    const eDisco = document.createElement("div");
    eDisco.classList.add("disco");
    eDisco.addEventListener("dragstart", comecaArrastar);
    if (casa=== 'p'){
        eDisco.classList.add("preto");
    }
    else{
        eDisco.classList.add("branco");
    }
    return eDisco;
}
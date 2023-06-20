// drag and drop api
const casas  =  document.querySelectorAll(".casa");
const disco = document.querySelector(".disco");

console.log(disco);

disco.addEventListener("dragstart", comecaArrastar);
for (let i = 0; i <casas.length; i++) {
    const casa = casas[i];
    casa.addEventListener("dragover", passouPorCima);
    casa.addEventListener("drop", recebeAlgo);

}
let arrastado = null;


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

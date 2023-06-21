let tabuleiro = ['p','p', 'p', null, 'b', 'b', 'b'];


export function getTabuleiro(){
    //isso
    //return [...tabuleiro];
    return structuredClone(tabuleiro);//clone completo do objeto

}
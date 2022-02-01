let primeiroPar = {
    nome:"gifs/bobrossparrot.gif",
    id:"par1"
};

let segundoPar = {
    nome:"gifs/explodyparrot.gif",
    id:"par2"
};

let terceiroPar = {
    nome:"gifs/fiestaparrot.gif",
    id:"par3"
};

let quartoPar = {
    nome:"gifs/metalparrot.gif",
    id:"par4"
};

let quintoPar = {
    nome:"gifs/revertitparrot.gif",
    id:"par5"
};

let sextoPar = {
    nome:"gifs/tripletsparrot.gif",
    id:"par6"
};

let setimoPar = {
    nome:"gifs/unicornparrot.gif",
    id:"par7"
};


function comparador(){
    return Math.random() - 0.5;
}

function comecarJogo(){
    let quantidadeCartas = 0;
    let pares = [primeiroPar, segundoPar, terceiroPar, quartoPar, quintoPar, sextoPar, setimoPar];
    pares.sort(comparador);
    while(true){
        quantidadeCartas=prompt("Com quantas cartas deseja jogar? (insira um número de 4 a 14 e par)");
        if (quantidadeCartas%2==0 && quantidadeCartas>=4 && quantidadeCartas<=14){
            break;
        }
    }
    while (pares.length !== quantidadeCartas/2){
        pares.pop();
    }
    const numeroDePares = pares.length
    for(let i = 0; i < numeroDePares; i++){
        pares.push(pares[i]);
    }
    pares.sort(comparador);
    for(let i = 0; i < pares.length; i++){
        let carta = document.createElement('div');
        carta.classList.add("carta")
        let frontFace = document.createElement('div');
        frontFace.classList.add("front-face","face");
        let backFace = document.createElement('div');
        backFace.classList.add("back-face","face");
        let frontImg = document.createElement('img');
        frontImg.setAttribute('src','front.png');
        let backImg = document.createElement('img');
        backImg.setAttribute('src',pares[i].nome)
        let cartas = document.getElementById('cartas');
        cartas.appendChild(carta);
        carta.appendChild(frontFace);
        frontFace.appendChild(frontImg);
        carta.appendChild(backFace);
        backFace.appendChild(backImg);
    }
}
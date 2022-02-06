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

let timer = null;
let tempoDeJogo = 0;

function comparador(){
    return Math.random() - 0.5;
}

let contFinalJogo = 0;
let quantidadePares = 0;

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
    quantidadePares = pares.length 
    for(let i = 0; i < quantidadePares; i++){
        pares.push(pares[i]);
    }
    pares.sort(comparador);
    for(let i = 0; i < pares.length; i++){
        document.getElementById("cartas").innerHTML += 
        `
         <div class="carta" id=${pares[i].id} onclick="virarCarta(this)" data-identifier="card">
            <div class="back-face face" data-identifier="back-face">
                <img src="backFace.png" />
            </div>
            <div class="front-face face" data-identifier="front-face">
                <img src=${pares[i].nome} />
            </div>
        </div>
        `;
    }
    timer = setInterval(comecarTimer,1000)
}
let primeiraCarta = '';
let segundaCarta='';
let contadorJogadas = 0;

function virarCarta(carta){
    if (carta.classList.contains('parCerto') == false){ 
        if (primeiraCarta == '' || segundaCarta ==''){
            if (carta.classList.contains('virada')){
            }
            else{
                carta.classList.add('virada');
                contadorJogadas++;
                if (primeiraCarta==''){
                    primeiraCarta=carta;
                }
                else{
                    segundaCarta=carta;
                    setTimeout(verificarPar,1500);
                }
            }
        }
    }
}


function verificarPar(){
    if (primeiraCarta.id == segundaCarta.id){
        primeiraCarta.classList.add('parCerto');
        segundaCarta.classList.add('parCerto');
        primeiraCarta='';
        segundaCarta='';
        contFinalJogo++;
        if (contFinalJogo == quantidadePares){
            alert("Você ganhou em " + String(contadorJogadas) + " jogadas e " + tempoDeJogo + " segundos!");
            clearInterval(timer);
            let comecarNovoJogo = prompt("Gostaria de reiniciar a partida?").toLowerCase();
            if (comecarNovoJogo == "sim" || comecarNovoJogo == "s" || comecarNovoJogo == "si" || comecarNovoJogo == "yes" || comecarNovoJogo == "y" || comecarNovoJogo == "ye"){
                contFinalJogo = 0;
                primeiraCarta='';
                segundaCarta='';
                contadorJogadas=0;
                tempoDeJogo = 0;
                document.getElementById('cartas').innerHTML = "";
                comecarJogo();
            }


        }
    }
    else{
        primeiraCarta.classList.remove('virada');
        segundaCarta.classList.remove('virada');
        primeiraCarta='';
        segundaCarta='';
    }
}

function comecarTimer(){
    tempoDeJogo++;
    document.querySelector(".timer").innerHTML = tempoDeJogo;
}
comecarJogo();
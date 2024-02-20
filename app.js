let listaDeNumeroSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirtextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial() {
    exibirtextoNaTela("h1", "Jogo do número secreto");
    exibirtextoNaTela("p", "escolha um número entre 1 e 100" );

}
exibirMensagemInicial();


function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto){
        exibirtextoNaTela("h1", "acertou");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o numero secreto com  ${tentativas} ${palavraTentativa}`
        exibirtextoNaTela("p", mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute("disabled");

    }else{
        if (chute > numeroSecreto) {
            exibirtextoNaTela("p", "o numero secreto é menor")
        }else{
            exibirtextoNaTela("p", "o numero secreto é maior");
        }
        tentativas++;
       limparCampo();
    }
}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumeroSorteados = [];
    
}

    if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
       return numeroEscolhido; 
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarjogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true)

}
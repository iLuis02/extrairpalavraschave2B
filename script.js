import { PALAVRAS_FEIAS} from "./palavrasFeias";

const botaoMostraPalavras = document.querySelector ('#botao-palavrachave');

botaoMostraPalavras.addEventListener ('click', mostraPalavrasChave);

function mostraPalavrasChave () {
    const texto = document.querySelector('entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palaavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(",");
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);

    for(let i in palavras){
        palavras [i] =palavras[i].toLowerCase();
    }

    palavras = tiraPalavrasRuins(palavras);

    const frequencias = contaFrequencia(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);

    function ordenaPalavra(p1,p2) {
        return frequencias[p2] - frequencias[p1];
    }

    
}
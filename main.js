const caixaPrincipal = document.querySelector(".caixa-pricipal")
const caixaPergunta = document.querySelector(".caixa-pricipal")
const caixaalternativa = document.querySelector(".caixa-alternativa")
const caixaresultado = document.querySelector(".caixa-resultado")
const caixaresultado = document.querySelector(".caixa-reultado")

const perguntas = [
    {
        enunciado: "TEXTO DA PERGUNTA 1",
        alternativas: [
            {
                texto: "TEXTO DA ALTERNATIVA 1 DA PERGUNTA 1",
                afirmacao: "AFIRMAÇÃO DA ALTERNATIVA 1 DA PERGUNTA 1"
            },
            {
                texto: "TEXTO DA ALTERNATIVA 2 DA PERGUNTA 1",
                afirmacao: "AFIRMAÇÃO DA ALTERNATIVA 2 DA PERGUNTA 1"
            }

        ]
    },
    {
        enunciado: "TEXTO DA PERGUNTA 2",
        alternativas: [
            {
                texto: "TEXTO DA ALTERNATIVA 1 DA PERGUNTA 2",
                afirmacao: "AFIRMAÇÃO DA ALTERNATIVA 1 DA PERGUNTA 2"
            },
            {
                texto: "TEXTO DA ALTERNATIVA 2 DA PERGUNTA 2",
                afirmacao: "AFIRMAÇÃO DA ALTERNATIVA 2 DA PERGUNTA 2"
            }

        ]
    },
    {
        enunciado: "TEXTO DA PERGUNTA 3",
        alternativas: [
            {
                texto: "TEXTO DA ALTERNATIVA 1 DA PERGUNTA 3",
                afirmacao: "AFIRMAÇÃO DA ALTERNATIVA 1 DA PERGUNTA 3"
            },
            {
                texto: "TEXTO DA ALTERNATIVA 2 DA PERGUNTA 3",
                afirmacao: "AFIRMAÇÃO DA ALTERNATIVA 2 DA PERGUNTA 3"
            }

        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();
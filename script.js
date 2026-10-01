// Define o tamanho de fonte inicial (alinhado com o CSS base)
let tamanho = 18;

// Seleciona os botões do DOM
const botaoAumentar = document.querySelector("#aumentar");
const botaoDiminuir = document.querySelector("#diminuir");

// Função para aumentar o texto (+2px por clique até o limite de 26px)
botaoAumentar.onclick = function () {
    if (tamanho < 26) {
        tamanho += 2;
        document.body.style.fontSize = tamanho + "px";
    }
};

// Função para diminuir o texto (-2px por clique até o limite de 14px)
botaoDiminuir.onclick = function () {
    if (tamanho > 14) {
        tamanho -= 2;
        document.body.style.fontSize = tamanho + "px";
    }
};

import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Não foi possivel inicializar a aplicação. Verifique se o for existe.");
}
const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener("click", (event) => {
        controller.importarDados();
    });
}
else {
    throw Error("Botao importa não foi encontrado");
}

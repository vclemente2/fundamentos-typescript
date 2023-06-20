import NegociacaoController from "./controllers/NegociacaoController.js";
const form = document.querySelector('.form');
const negociacao = new NegociacaoController();
form.addEventListener('submit', (event) => {
    event.preventDefault();
    negociacao.adiciona();
});

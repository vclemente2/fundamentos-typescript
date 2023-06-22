import NegociacaoController from "./controllers/NegociacaoController.js";
const form = document.querySelector(".form");
const negociacao = new NegociacaoController();
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        negociacao.adiciona();
    });
}
else {
    throw new Error("Não foi possível inicializar a aplicação.");
}
import NegociacaoController from "./controllers/NegociacaoController.js";

const form: HTMLElement | null = document.querySelector(".form");
const negociacao = new NegociacaoController();

if (form) {
  form.addEventListener("submit", (event): void => {
    event.preventDefault();
    negociacao.adiciona();
  });
} else {
  throw new Error("Não foi possível inicializar a aplicação.");
}

const btnImporta: HTMLElement = <HTMLElement>(
  document.querySelector("[data-btnImporta]")
);

if (btnImporta) {
  btnImporta.addEventListener("click", () => {
    negociacao.importaDados();
  });
}

import Negociacao from "../models/Negociacao.js";
import Negociacoes from "../models/Negociacoes.js";
import MensagemView from "../views/MensagemView.js";
import NegociacaoView from "../views/NegociacaoView.js";
export default class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this._dataInput = document.querySelector("#data");
        this._quantidadeInput = document.querySelector("#quantidade");
        this._valorInput = document.querySelector("#valor");
        this.negociacaoView = new NegociacaoView("[data-tableContainer]");
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView = new MensagemView("#mensagemView");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        const ehdiaUtil = this.ehDiaUtil(negociacao.data);
        if (!ehdiaUtil) {
            this.mensagemView.update("Negociações só podem ser registradas em dias úteis");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limpaFormulario();
        this.atualizaView();
    }
    limpaFormulario() {
        this._dataInput.value = "";
        this._quantidadeInput.value = "";
        this._valorInput.value = "";
        this._dataInput.focus();
    }
    criaNegociacao() {
        const negociacao = new Negociacao(new Date(this._dataInput.value), parseInt(this._quantidadeInput.value), parseFloat(this._valorInput.value));
        return negociacao;
    }
    atualizaView() {
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView.update("Negociação registrada com sucesso!");
    }
    ehDiaUtil(data) {
        return data.getDay() > 0 && data.getDay() < 6;
    }
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { imprimirTempoDeExecucao } from "../decorator/imprimirTempoDeExecucao.js";
import { inspect } from "../decorator/inspect.js";
import { DiasDaSemana } from "../enums/diasDaSemana.js";
import Negociacao from "../models/Negociacao.js";
import Negociacoes from "../models/Negociacoes.js";
import MensagemView from "../views/MensagemView.js";
import NegociacaoView from "../views/NegociacaoView.js";
export default class NegociacaoController {
    _dataInput;
    _quantidadeInput;
    _valorInput;
    negociacoes = new Negociacoes();
    negociacaoView;
    mensagemView;
    constructor() {
        this._dataInput = document.querySelector("#data");
        this._quantidadeInput = document.querySelector("#quantidade");
        this._valorInput = document.querySelector("#valor");
        this.negociacaoView = new NegociacaoView("[data-tableContainer]");
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView = new MensagemView("#mensagemView");
    }
    adiciona() {
        const negociacao = Negociacao.cria(this._dataInput.value, this._quantidadeInput.value, this._valorInput.value);
        const ehdiaUtil = this.ehDiaUtil(negociacao.data);
        if (!ehdiaUtil) {
            this.mensagemView.update("Negociações só podem ser registradas em dias úteis");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limpaFormulario();
        this.atualizaView();
    }
    importaDados() {
        fetch("http://localhost:8080/dados")
            .then((res) => res.json())
            .then((data) => {
            return data.map((item) => {
                return new Negociacao(new Date(), item.vezes, item.montante);
            });
        })
            .then((arrNegociacao) => {
            arrNegociacao.forEach((negociacao) => {
                this.negociacoes.adiciona(negociacao);
            });
            this.negociacaoView.update(this.negociacoes);
        });
    }
    limpaFormulario() {
        this._dataInput.value = "";
        this._quantidadeInput.value = "";
        this._valorInput.value = "";
        this._dataInput.focus();
    }
    atualizaView() {
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView.update("Negociação registrada com sucesso!");
    }
    ehDiaUtil(data) {
        return (data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO);
    }
}
__decorate([
    imprimirTempoDeExecucao(true),
    inspect
], NegociacaoController.prototype, "adiciona", null);

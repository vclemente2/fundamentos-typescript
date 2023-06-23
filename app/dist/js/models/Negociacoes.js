import { Imprimivel } from "../utils/Imprimivel.js";
export default class Negociacoes extends Imprimivel {
    negociacoes = [];
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}

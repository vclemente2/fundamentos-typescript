import { Imprimivel } from "../utils/Imprimivel.js";
export default class Negociacao extends Imprimivel {
    data;
    quantidade;
    valor;
    constructor(data, quantidade, valor) {
        super();
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static cria(data, quantidade, valor) {
        return new Negociacao(new Date(data), parseInt(quantidade), parseFloat(valor));
    }
    volume() {
        return this.quantidade * this.valor;
    }
    paraTexto() {
        return `
      Data: ${this.data}
      Quantidade: ${this.quantidade}
      Valor: ${this.valor}
    `;
    }
}

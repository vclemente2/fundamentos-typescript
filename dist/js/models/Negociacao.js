export default class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    volume() {
        return this.quantidade * this.valor;
    }
    static cria(data, quantidade, valor) {
        return new Negociacao(new Date(data), parseInt(quantidade), parseFloat(valor));
    }
}

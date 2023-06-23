import Negociacao from "../models/Negociacao.js";
export class NegociacoesService {
    static async obterNegociacoes() {
        return fetch("http://localhost:8080/dados")
            .then((res) => res.json())
            .then((data) => {
            return data.map((item) => {
                return new Negociacao(new Date(), item.vezes, item.montante);
            });
        });
    }
}

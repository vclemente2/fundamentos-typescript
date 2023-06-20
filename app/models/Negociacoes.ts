import Negociacao from "./Negociacao";

export default class Negociacoes{
    private negociacoes: Array<Negociacao> = [];
    
    adiciona(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }

    montaTabela(): String{
       const negociacoesTable: String = this.negociacoes.map((negociacao: Negociacao):String => {
            return `
                <tr>
                    <td>${negociacao.data}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                </tr>
            `
        }).join('')

        return negociacoesTable;
    }
}
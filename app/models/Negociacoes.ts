import Negociacao from "./Negociacao";

export default class Negociacoes{
    private negociacoes: Array<Negociacao> = [];
    
    public adiciona(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }

}
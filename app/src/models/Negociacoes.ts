import { Imprimivel } from "../interfaces/Imprimivel.js";
import Negociacao from "./Negociacao.js";

export default class Negociacoes implements Imprimivel {
  private negociacoes: Array<Negociacao> = [];

  public adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  public lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }
}

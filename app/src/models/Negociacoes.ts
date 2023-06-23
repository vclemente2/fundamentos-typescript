import { Imprimivel } from "../utils/Imprimivel.js";
import Negociacao from "./Negociacao.js";

export default class Negociacoes extends Imprimivel {
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

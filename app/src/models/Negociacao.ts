import { Imprimivel } from "../utils/Imprimivel.js";

export default class Negociacao extends Imprimivel {
  constructor(
    public readonly data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {
    super();
  }

  static cria(data: string, quantidade: string, valor: string): Negociacao {
    return new Negociacao(
      new Date(data),
      parseInt(quantidade),
      parseFloat(valor)
    );
  }

  public volume(): number {
    return this.quantidade * this.valor;
  }

  public paraTexto(): string {
    return `
      Data: ${this.data}
      Quantidade: ${this.quantidade}
      Valor: ${this.valor}
    `;
  }
}

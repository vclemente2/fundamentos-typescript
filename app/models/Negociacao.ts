export default class Negociacao {
  constructor(
    public readonly data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  public volume(): number {
    return this.quantidade * this.valor;
  }

  static cria(data: string, quantidade: string, valor: string): Negociacao {
    return new Negociacao(
      new Date(data),
      parseInt(quantidade),
      parseFloat(valor)
    );
  }
}

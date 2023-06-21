export default class Negociacao {
  constructor(
    public readonly data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) { }

  public volume(): number {
    return this.quantidade * this.valor;
  }
}

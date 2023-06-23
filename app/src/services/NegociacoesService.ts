import { NegociacaoDoDia } from "../interfaces/NegociacaoDoDia.js";
import Negociacao from "../models/Negociacao.js";

export class NegociacoesService {
  static async obterNegociacoes(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res: Response): Promise<any> => res.json())
      .then((data: Array<NegociacaoDoDia>): Array<Negociacao> => {
        return data.map((item: NegociacaoDoDia) => {
          return new Negociacao(new Date(), item.vezes, item.montante);
        });
      });
  }
}

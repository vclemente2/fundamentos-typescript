import { escape } from "../decorator/escape.js";
import Negociacoes from "../models/Negociacoes.js";
import View from "./View.js";

export default class NegociacaoView extends View<Negociacoes> {
  @escape
  protected template(model: Negociacoes): string {
    return `
        <table class="table table-hover table-bordered" data-table>
             <thead>
                 <tr>
                     <th>DATA</th>
                     <th>QUANTIDADE</th>
                     <th>VALOR</th>
                 </tr>
             </thead>
             <tbody>
                ${this.montaTabela(model)}
             </tbody>
        </table>
        `;
  }

  private montaTabela(model: Negociacoes): String {
    const negociacoesTable: String = model
      .lista()
      .map((negociacao): String => {
        return `
                 <tr>
                     <td>${new Intl.DateTimeFormat().format(
                       negociacao.data
                     )}</td>
                     <td>${negociacao.quantidade}</td>
                     <td>${negociacao.valor}</td>
                 </tr>
             `;
      })
      .join("");

    return negociacoesTable;
  }
}

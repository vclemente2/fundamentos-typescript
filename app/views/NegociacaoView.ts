import Negociacoes from "../models/Negociacoes.js";
import View from "./View.js";

export default class NegociacaoView extends View<Negociacoes>{

    template(model: Negociacoes):string {
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
                ${model.montaTabela()}
             </tbody>
        </table>
        `
    }
}
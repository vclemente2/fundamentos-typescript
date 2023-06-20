import View from "./View.js";
export default class NegociacaoView extends View {
    template(model) {
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
        `;
    }
}

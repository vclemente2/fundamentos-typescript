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
                ${this.montaTabela(model)}
             </tbody>
        </table>
        `;
    }
    montaTabela(model) {
        const negociacoesTable = model.lista().map((negociacao) => {
            return `
                 <tr>
                     <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                     <td>${negociacao.quantidade}</td>
                     <td>${negociacao.valor}</td>
                 </tr>
             `;
        }).join('');
        return negociacoesTable;
    }
}

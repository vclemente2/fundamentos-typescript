export default class NegociacaoView {
    constructor(element) {
        this.element = element;
    }
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
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}

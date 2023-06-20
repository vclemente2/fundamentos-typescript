import Negociacoes from "../models/Negociacoes.js";

export default class NegociacaoView{
    private element: HTMLElement;

    constructor(element: HTMLElement){
        this.element = element
    }

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

    update(model:Negociacoes):void{
        this.element.innerHTML = this.template(model);
    }
}
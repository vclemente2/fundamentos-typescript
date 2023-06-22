var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { escape } from "../decorator/escape.js";
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
        const negociacoesTable = model
            .lista()
            .map((negociacao) => {
            return `
                 <tr>
                     <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                     <td>${negociacao.quantidade}</td>
                     <td>${negociacao.valor}</td>
                 </tr>
             `;
        })
            .join("");
        return negociacoesTable;
    }
}
__decorate([
    escape
], NegociacaoView.prototype, "template", null);

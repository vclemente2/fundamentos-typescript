import View from "./View.js";
export default class MensagemView extends View {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
    update(model) {
        super.update(model);
        this.limpaMensagem();
    }
    limpaMensagem() {
        setTimeout(() => { this.elemento.innerHTML = ""; }, 2000);
    }
}

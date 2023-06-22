import View from "./View.js";
export default class MensagemView extends View {
    update(model) {
        super.update(model);
        this.limpaMensagem();
    }
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
    limpaMensagem() {
        setTimeout(() => {
            this.elemento.innerHTML = "";
        }, 2000);
    }
}

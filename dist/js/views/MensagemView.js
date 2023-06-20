export default class MensagemView {
    constructor(element) {
        this.element = element;
    }
    template() {
        return `
            <p>Negociação registrada com sucesso!</p>
        `;
    }
    update() {
        this.element.innerHTML = this.template();
        this.limpaMensagem();
    }
    limpaMensagem() {
        setTimeout(() => { this.element.innerHTML = ""; }, 2000);
    }
}

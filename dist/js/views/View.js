export default class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        throw new Error('A classe filha deve implementar o módulo');
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}

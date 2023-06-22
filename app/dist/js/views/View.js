export default class View {
    elemento;
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`O seletor ${seletor} não existe no DOM. Favor verificar`);
        }
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}

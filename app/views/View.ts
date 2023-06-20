export default abstract class View<T>{
    protected elemento:HTMLElement

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor)
    }

    template(model:T):string{
        throw new Error('A classe filha deve implementar o módulo')
    }

    update(model:T):void{
        this.elemento.innerHTML = this.template(model);
    }
}

import View from "./View.js";

export default class MensagemView extends View<string>{

    template(model:string):string{
        return `
            <p class="alert alert-info">${model}</p>
        `
    }

    update(model:string):void{
        super.update(model);
        this.limpaMensagem();
    }

    limpaMensagem():void{
        setTimeout(()=>{this.elemento.innerHTML = ""}, 2000)
    }
}
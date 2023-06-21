import View from "./View.js";

export default class MensagemView extends View<string>{

    public update(model:string):void{
        super.update(model);
        this.limpaMensagem();
    }

    protected template(model:string):string{
        return `
            <p class="alert alert-info">${model}</p>
        `
    }

    private limpaMensagem():void{
        setTimeout(()=>{this.elemento.innerHTML = ""}, 2000)
    }
}
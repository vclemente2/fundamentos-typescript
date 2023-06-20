export default class MensagemView{
    private element:HTMLElement;

    constructor(element:HTMLElement){
        this.element = element
    }

    template():string{
        return `
            <p>Negociação registrada com sucesso!</p>
        `
    }

    update():void{
        this.element.innerHTML = this.template();
        this.limpaMensagem();
    }

    limpaMensagem():void{
        setTimeout(()=>{this.element.innerHTML = ""}, 2000)
    }
}
import { imprimirTempoDeExecucao } from "../decorator/imprimirTempoDeExecucao.js";
import { inspect } from "../decorator/inspect.js";
import { DiasDaSemana } from "../enums/diasDaSemana.js";
import Negociacao from "../models/Negociacao.js";
import Negociacoes from "../models/Negociacoes.js";
import { NegociacoesService } from "../services/NegociacoesService.js";
import MensagemView from "../views/MensagemView.js";
import NegociacaoView from "../views/NegociacaoView.js";

export default class NegociacaoController {
  private _dataInput: HTMLInputElement;
  private _quantidadeInput: HTMLInputElement;
  private _valorInput: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();
  private negociacaoView: NegociacaoView;
  private mensagemView: MensagemView;
  // private negociacoesService: NegociacoesService = new NegociacoesService();

  constructor() {
    this._dataInput = document.querySelector("#data") as HTMLInputElement;
    this._quantidadeInput = document.querySelector(
      "#quantidade"
    ) as HTMLInputElement;
    this._valorInput = document.querySelector("#valor") as HTMLInputElement;
    this.negociacaoView = new NegociacaoView("[data-tableContainer]");
    this.negociacaoView.update(this.negociacoes);
    this.mensagemView = new MensagemView("#mensagemView");
  }

  @imprimirTempoDeExecucao(true)
  @inspect
  public adiciona(): void {
    const negociacao: Negociacao = Negociacao.cria(
      this._dataInput.value,
      this._quantidadeInput.value,
      this._valorInput.value
    );
    const ehdiaUtil: boolean = this.ehDiaUtil(negociacao.data);

    if (!ehdiaUtil) {
      this.mensagemView.update(
        "Negociações só podem ser registradas em dias úteis"
      );
      return;
    }

    this.negociacoes.adiciona(negociacao);
    this.limpaFormulario();
    this.atualizaView();
  }

  public async importaDados(): Promise<any> {
    const negociacoes = await NegociacoesService.obterNegociacoes();

    negociacoes.forEach((negociacao: Negociacao) => {
      this.negociacoes.adiciona(negociacao);
    });
    this.negociacaoView.update(this.negociacoes);
  }

  private limpaFormulario(): void {
    this._dataInput.value = "";
    this._quantidadeInput.value = "";
    this._valorInput.value = "";
    this._dataInput.focus();
  }

  private atualizaView(): void {
    this.negociacaoView.update(this.negociacoes);
    this.mensagemView.update("Negociação registrada com sucesso!");
  }

  private ehDiaUtil(data: Date): boolean {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }
}

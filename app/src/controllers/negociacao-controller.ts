import { domInjector } from "../decorators/dom-Injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  @domInjector('#data')
  private inputData: HTMLInputElement;

  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;

  @domInjector('#valor')
  private inputValor: HTMLInputElement;

  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");
  private negociacoesService = new NegociacoesService();
  // private readonly SABADO = 0;
  // private readonly DOMINGO = 6;

  constructor() {
    // this.inputData = <HTMLInputElement>document.querySelector('#data');
    // this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
    // this.inputValor = document.querySelector('#valor') as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes); // Mostra a tabela na tela
  }

  @inspect
  @logarTempoDeExecucao()
  public adiciona(): void {
    // const negociacao = this.criaNegociacao();
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
      return;
    }
    this.negociacoes.adiciona(negociacao);
    // this.negociacoesView.update(this.negociacoes); // Mostra a tabela na tela
    // this.mensagemView.update("Negociação adicionada com sucesso");
    imprimir(negociacao, this.negociacoes);
    this.limparFormulario();
    this.atualizaView();
  }

  private ehDiaUtil(data: Date) {
    return data.getDay() > DiasDaSemana.DOMINGO
      && data.getDay() < DiasDaSemana.SABADO;
  }

  importarDados(): void {
    this.negociacoesService
      .obterNegociacoesDoDia()
      .then((negociacoesDeHoje) => {
        for (const negociacao of negociacoesDeHoje) {
          this.negociacoes.adiciona(negociacao);
        }
        this.negociacoesView.update(this.negociacoes);
      });
  }
  
  // private criaNegociacao(): Negociacao {
  //   const exp = /-/g;
  //   const date = new Date(this.inputData.value.replace(exp, ","));
  //   const quantidade = parseInt(this.inputQuantidade.value);
  //   const valor = parseFloat(this.inputValor.value);
  //   return new Negociacao(date, quantidade, valor);
  // }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes); // Mostra a tabela na tela
    this.mensagemView.update("Negociação adicionada com sucesso");
  }
}

/*
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");
  // private readonly SABADO = 0;
  // private readonly DOMINGO = 6;

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
    this.negociacoesView.update(this.negociacoes); // Mostra a tabela na tela
  }

  public adiciona(): void {
    const negociacao = this.criaNegociacao();
    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
      return;
    }
    this.negociacoes.adiciona(negociacao);
    // this.negociacoesView.update(this.negociacoes); // Mostra a tabela na tela
    // this.mensagemView.update("Negociação adicionada com sucesso");
    this.limparFormulario();
    this.atualizaView();
  }

  private ehDiaUtil(data: Date) {
    return data.getDay() > DiasDaSemana.SABADO && data.getDay() < DiasDaSemana.DOMINGO;
  }
  
  private criaNegociacao(): Negociacao {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes); // Mostra a tabela na tela
    this.mensagemView.update("Negociação adicionada com sucesso");
  }
}
*/
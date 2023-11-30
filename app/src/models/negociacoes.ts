import { Negociacao } from "./negociacao.js";
import { Modelo } from "../interfaces/modelo.js";

export class Negociacoes implements Modelo<Negociacoes> {
  // private negociacoes: Array<Negociacao> = [];
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // ReadonlyArray => Array de somente leitura
  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }

  ehIgual(negociacoes: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista()); 
  }
}

/*
import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  // private negociacoes: Array<Negociacao> = [];
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // ReadonlyArray => Array de somente leitura
  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}

*/
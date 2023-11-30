import { Negociacao } from "./negociacao.js";
import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacoes implements Imprimivel {
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
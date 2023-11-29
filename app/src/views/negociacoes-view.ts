import { escapar } from "../decorators/escapar.js";
// import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
  // private elemento: HTMLElement;

  // constructor(seletor: string) {
  //   this.elemento = document.querySelector(seletor);
  // }

  @escapar
  protected template(model: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${model.lista().map((negociacao) => {
            return `
              <tr>
                <td>${this.formatar(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    `;
  }


  private formatar(data: Date): string {
    return new Intl.DateTimeFormat().format(data);
  }
  // update(model: Negociacoes): void {
  //   const template = this.template(model);
  //   this.elemento.innerHTML = template;
  // }
}
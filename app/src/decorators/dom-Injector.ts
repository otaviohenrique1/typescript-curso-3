// Decorator de propriedade
export function domInjector(seletor: string) {
  return function(
    target: any, // Pode ser um construtor ou prototype da classe
    propertyKey: string,
  ) {
    let elemento: HTMLElement;
    const getter = function() {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor);
      }
      // const elemento = document.querySelector(seletor);
      return elemento;
    };

    Object.defineProperty(target, propertyKey, { 
      get: getter,
    });
  }
}
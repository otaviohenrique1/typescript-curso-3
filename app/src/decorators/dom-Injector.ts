// Decorator de propriedade
export function domInjector(seletor: string) {
  return function(
    target: any, // Pode ser um construtor ou prototype da classe
    propertyKey: string,
  ) {
    const getter = function() {
      const elemento = document.querySelector(seletor);
      return elemento;
    };

    Object.defineProperty(target, propertyKey, { 
      get: getter,
    });
  }
}
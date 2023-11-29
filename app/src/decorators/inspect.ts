// Decorator de metodo
export function inspect(
    target: any, // Pode ser um construtor ou prototype da classe
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
      console.log(`--- Método ${propertyKey}`);
      console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
      const retorno = metodoOriginal.apply(this, args);
      console.log(`------ Retorno: ${retorno}`);
      return retorno;
    }
    return descriptor;
}

/*
export function inspect() {
  return function(
    target: any, // Pode ser um construtor ou prototype da classe
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
      console.log(`--- Método ${propertyKey}`);
      console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
      const retorno = metodoOriginal.apply(this, args);
      console.log(`------ Retorno: ${retorno}`);
      return retorno;
    }
    return descriptor;
  }
}
*/

/*
// Template de decorator

export function inspect() {
  return function(
    target: any, // Pode ser um construtor ou prototype da classe
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const retorno = metodoOriginal.apply(this, args);
      return retorno;
    }
    return descriptor;
  }
}
*/
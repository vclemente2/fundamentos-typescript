export function imprimirTempoDeExecucao() {
  return function (
    _: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const t1: number = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2: number = performance.now();
      console.log(
        `${propertyKey}: O tempo de execução foi de ${
          (t2 - t1) / 1000
        } segundos.`
      );
      return retorno;
    };

    return descriptor;
  };
}

export function imprimirTempoDeExecucao(emSegundos: boolean = false) {
  return function (
    _: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const metodoOriginal = descriptor.value;

    const divisor = emSegundos ? 1000 : 1;
    const unidade = emSegundos ? "segundos" : "milisegundos";

    descriptor.value = function (...args: any[]) {
      const t1: number = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2: number = performance.now();
      console.log(
        `${propertyKey}: O tempo de execução foi de ${
          (t2 - t1) / divisor
        } ${unidade}.`
      );
      return retorno;
    };

    return descriptor;
  };
}

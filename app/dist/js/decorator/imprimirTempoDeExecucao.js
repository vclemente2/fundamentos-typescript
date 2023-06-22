export function imprimirTempoDeExecucao(emSegundos = false) {
    return function (_, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        const divisor = emSegundos ? 1000 : 1;
        const unidade = emSegundos ? "segundos" : "milisegundos";
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}: O tempo de execução foi de ${(t2 - t1) / divisor} ${unidade}.`);
            return retorno;
        };
        return descriptor;
    };
}

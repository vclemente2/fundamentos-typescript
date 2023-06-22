export function inspect(_, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Nome do método: ${propertyKey}`);
        console.log(`------ Propriedades: ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------ Retorno do método: ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}

// export function inspect() {
export function inspect(
  _: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args: Array<any>) {
    console.log(`--- Nome do método: ${propertyKey}`);
    console.log(`------ Propriedades: ${JSON.stringify(args)}`);
    const retorno: any = metodoOriginal.apply(this, args);
    console.log(`------ Retorno do método: ${JSON.stringify(retorno)}`);
    return retorno;
  };
  return descriptor;
}
// }

export function imprimir(...args) {
    args.forEach((imprimivel) => {
        console.log(imprimivel.paraTexto());
    });
}

import { Imprimivel } from "./Imprimivel.js";

export function imprimir(...args: Imprimivel[]): void {
  args.forEach((imprimivel: Imprimivel) => {
    console.log(imprimivel.paraTexto());
  });
}

export default abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    const elemento: HTMLElement | null = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento;
    } else {
      throw new Error(
        `O seletor ${seletor} não existe no DOM. Favor verificar`
      );
    }
  }

  public update(model: T): void {
    this.elemento.innerHTML = this.template(model);
  }

  protected abstract template(model: T): string;
}

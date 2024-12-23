import { FiguraGeometrica } from './figura-geometrica';

export class Circulo extends FiguraGeometrica {
  constructor(public radio: number) {
    super();
  }

  calcularPerimetro(): number {
    return parseFloat((2 * Math.PI * this.radio).toFixed(2));
  }
}
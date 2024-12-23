import { FiguraGeometrica } from './figura-geometrica';

export class TrianguloEscaleno extends FiguraGeometrica {
  constructor(public lado1: number, public lado2: number, public lado3: number) {
    super();
  }

  calcularPerimetro(): number {
    return parseFloat((this.lado1 + this.lado2 + this.lado3).toFixed(2));
  }
}
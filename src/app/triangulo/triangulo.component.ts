import { Component, OnInit } from '@angular/core';
import {IonCard,IonCardContent,IonCardHeader,IonCardTitle,IonLabel,IonItem,IonButton, IonInput } from '@ionic/angular/standalone'
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../models/triangulo-escaleno';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [IonInput, FormsModule,NgIf,IonCard,IonCardContent,IonCardHeader,IonCardTitle,IonLabel,IonItem,IonButton]
})

export class TrianguloComponent {
  lado1: number | null = null;
  lado2: number | null = null;
  lado3: number | null = null;
  resultado: number | null = null;

  calcular() {
    if (this.lado1 !== null && this.lado2 !== null && this.lado3 !== null &&
        this.lado1 > 0 && this.lado2 > 0 && this.lado3 > 0) {
      this.resultado = this.lado1 + this.lado2 + this.lado3;
    } else {
      this.resultado = null;
    }
  }

  convertirANumero(event: any, lado: 'lado1' | 'lado2' | 'lado3') {
    const valor = parseFloat(event.target.value);
    if (!isNaN(valor)) {
      this[lado] = valor;
    } else {
      this[lado] = null;
    }
  }
}
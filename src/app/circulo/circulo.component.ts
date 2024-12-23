import { Component, importProvidersFrom, OnInit } from '@angular/core';
import {IonButton,IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonItem,IonLabel,IonInput} from '@ionic/angular/standalone'
import { FormsModule } from '@angular/forms';
import { Circulo } from '../models/circulo';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [FormsModule,NgIf,IonButton,IonCard,IonCardHeader,IonCardContent,IonCardTitle,IonItem,IonLabel,IonInput]
})
export class CirculoComponent {
  radio: number = 0;
  resultado: number | null = null;

  calcular() {
    const circulo = new Circulo(this.radio);
    this.resultado = circulo.calcularPerimetro();
  }
}

import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonSelect,IonSelectOption,IonLabel } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FormsModule,NgIf,IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonSelect,IonSelectOption,IonLabel,CirculoComponent,TrianguloComponent],
})
export class HomePage {
  figuraSeleccionada: string | null = null;
}

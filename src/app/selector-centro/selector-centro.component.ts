import {Component, OnInit} from '@angular/core';
import {CentrosService} from "../centros.service";

@Component({
  selector: 'app-selector-centro',
  template: `

    <input (keyup)="centro($event)" [value]="centroSeleccionado.nombre">

    <div *ngFor="let centro of centrosFiltrados">
      <p (click)="seleccionarCentro(centro)">{{centro.nombre}}</p>
    </div>
  `,
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent {

  centroSeleccionado= {nombre: ''};
  centros;
  centrosFiltrados: any = [];

  constructor(private centrosService: CentrosService) {
    this.centros = centrosService.getCentros();
  }

  centro($event: any) {
    this.centrosFiltrados = [...this.centros].filter(centro => centro.nombre.toLowerCase().includes($event.target.value.toLowerCase()))
  }

  seleccionarCentro(centro: any) {
    this.centroSeleccionado = centro;
    this.centrosFiltrados = [];
  }
}

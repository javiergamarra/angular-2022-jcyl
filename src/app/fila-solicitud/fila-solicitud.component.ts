import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fila-solicitud',
  template: `
    {{solicitud.nombre}} {{solicitud.apellidos}} {{solicitud.nacimiento | date: 'dd/MM/yyyy'}}

    <ng-content></ng-content>

    <button (click)="borrar(solicitud)">borrar</button>
  `,
  styleUrls: ['./fila-solicitud.component.css']
})
export class FilaSolicitudComponent {

  @Input()
  solicitud: any;

  @Output()
  solicitudBorrada = new EventEmitter();

  constructor() {
  }

  borrar(solicitud: any) {
    this.solicitudBorrada.emit(solicitud)
  }
}

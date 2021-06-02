import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fila-solicitud',
  template: `
    {{solicitud.nombre}} {{solicitud.apellidos}} {{solicitud.nacimiento | date: 'dd/MM/yyyy'}}
    <button (click)="borrar(solicitud)">borrar</button>
  `,
  styleUrls: ['./fila-solicitud.component.css']
})
export class FilaSolicitudComponent implements OnInit {

  @Input()
  solicitud: any;

  @Output()
  solicitudBorrada = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  borrar(solicitud: any) {
    this.solicitudBorrada.emit(solicitud)
  }
}

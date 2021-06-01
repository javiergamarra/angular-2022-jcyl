import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitudes = [{nombre: 'Javier', apellidos: 'Gamarra'}, {nombre: 'Pablo', apellidos: 'Agulla'}];

  solicitud = {nombre: '', apellidos: ''};

  constructor() {
  }

  ngOnInit(): void {
  }

  delete() {
    console.log('eliminar!')
  }

  enviar() {
    console.log(this.solicitud)
  }

  nombre($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.nombre = element.value;
  }

  apellidos($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.apellidos = element.value;
  }
}

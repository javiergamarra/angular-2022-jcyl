import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitudes = [{nombre: 'Javier', apellidos: 'Gamarra', nacimiento: new Date()}, {
    nombre: 'Pablo',
    apellidos: 'Agulla',
    nacimiento: new Date(2019, 1, 1)
  }];

  solicitud = {nombre: '', apellidos: ''};

  centro = {nombre: "Fernando de Rojas"};

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

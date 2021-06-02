import {Component, OnInit} from '@angular/core';
import {SolicitudesService} from "../solicitudes.service";

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  solicitudes$: any;

  solicitud = {nombre: '', apellidos: ''};

  constructor(private solicitudesService: SolicitudesService) {
    this.solicitudes$ = solicitudesService.getSolicitudes()
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

  borrarSolicitud(solicitud: any) {
    // this.solicitudes.filter((solicitudExistente: any) => solicitudExistente.nombre != solicitud.nombre)
  }
}

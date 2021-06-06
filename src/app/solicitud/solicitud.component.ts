import {Component, OnInit} from '@angular/core';
import {SolicitudesService} from "../solicitudes.service";
import {$e} from "@angular/compiler/src/chars";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

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

  enviar() {
    console.log(this.solicitud)
  }

  borrarSolicitud(solicitud: any) {
    // this.solicitudes.filter((solicitudExistente: any) => solicitudExistente.nombre != solicitud.nombre)
  }

  log($event: MatDatepickerInputEvent<unknown, unknown>) {
    console.log($event)
  }
}

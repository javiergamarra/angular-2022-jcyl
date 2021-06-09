import {Component, OnInit} from '@angular/core';
import {SolicitudesService} from "../solicitudes.service";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {AuthService, Usuario} from "../auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent {
  solicitudes$: any;

  solicitud = {nombre: '', apellidos: ''};
  usuario$: Observable<Usuario>;

  constructor(private solicitudesService: SolicitudesService, private authService: AuthService) {
    this.solicitudes$ = solicitudesService.getSolicitudes()
    this.usuario$ = this.authService.currentUser.asObservable();
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

import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {SolicitudesService} from "../solicitudes.service";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {AuthService, Usuario} from "../auth.service";
import {Observable} from "rxjs";
import {CentroComponent} from "../centro/centro.component";
import {CentrosComponent} from "../centros/centros.component";

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent {
  solicitudes$: any;

  solicitud = {nombre: '', apellidos: '', dni: ''};
  usuario$: Observable<Usuario>;

  @ViewChild('elemento', {read: ViewContainerRef})
  elemento: ViewContainerRef | null = null;

  constructor(private solicitudesService: SolicitudesService, private authService: AuthService, private resolver: ComponentFactoryResolver) {
    this.solicitudes$ = solicitudesService.getSolicitudes()
    this.usuario$ = this.authService.currentUser.asObservable();
  }

  enviar() {
    console.log(this.elemento)
    this.elemento!.createComponent(this.resolver.resolveComponentFactory(CentrosComponent));
    console.log(this.solicitud)
  }

  borrarSolicitud(solicitud: any) {
    // this.solicitudes.filter((solicitudExistente: any) => solicitudExistente.nombre != solicitud.nombre)
  }

  log($event: MatDatepickerInputEvent<unknown, unknown>) {
    console.log($event)
  }
}

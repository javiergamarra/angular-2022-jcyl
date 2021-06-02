import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor() { }

  getSolicitudes() {
    return [{nombre: 'Javier', apellidos: 'Gamarra', nacimiento: new Date()}, {
      nombre: 'Pablo',
      apellidos: 'Agulla',
      nacimiento: new Date(2019, 1, 1)
    }];
  }
}

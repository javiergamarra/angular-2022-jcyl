import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentrosService {

  constructor() {
  }

  getCentros() {
    return [{nombre: "Fernando de Rojas"}, {nombre: "Agustinas"}];
  }
}

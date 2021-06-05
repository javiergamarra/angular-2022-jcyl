import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-datos-bancarios',
  template: `
    <h2>Datos bancarios</h2>
    <form #f="ngForm" (ngSubmit)="submit(f)">
      <label>Entidad</label>
      <input name="entidad" ngModel>
      <label>Sucursal</label>
      <input name="sucursal" ngModel>
      <label>DC</label>
      <input name="dc" ngModel>
      <label>Cuenta</label>
      <input name="cuenta" ngModel>

      <button>Añadir</button>
    </form>

  `,
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(f: NgForm) {
    console.log(f)
  }
}

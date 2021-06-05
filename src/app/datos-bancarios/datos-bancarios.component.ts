import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-datos-bancarios',
  template: `
    <h2>Datos bancarios</h2>
    <form #f="ngForm" (ngSubmit)="submit(f)">
      <label>Entidad</label>
      <input name="entidad" ngModel minlength="4" maxlength="4" size="4" required>
      <label>Sucursal</label>
      <input name="sucursal" ngModel minlength="4" maxlength="4" size="4" required>
      <label>DC</label>
      <input name="dc" ngModel minlength="2" maxlength="2" size="2" required>
      <label>Cuenta</label>
      <input name="cuenta" ngModel minlength="10" maxlength="10" size="10" required>

      <button [disabled]="f.invalid">Añadir</button>
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
    if (f.controls.dc.errors) {
      console.log(f.controls.dc.errors);
    }
  }
}

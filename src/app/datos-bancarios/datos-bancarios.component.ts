import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-datos-bancarios',
  template: `
    <h2>Datos bancarios</h2>
    <form [formGroup]="f">
      <label>Entidad</label>
      <input name="entidad" minlength="4" maxlength="4" size="4" required formControlName="entidad">
      <label>Sucursal</label>
      <input name="sucursal" minlength="4" maxlength="4" size="4" required formControlName="sucursal">
      <label>DC</label>
      <input name="dc" minlength="2" maxlength="2" size="2" required formControlName="dc">
      <label>Cuenta</label>
      <input name="cuenta" minlength="10" maxlength="10" size="10" required formControlName="cuenta">

      <button [disabled]="f.invalid" (click)="submit()">Añadir</button>
    </form>

  `,
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent {

  f: FormGroup;
  private entidad = new FormControl('', [Validators.required, this.myValidator]);

  constructor(private formBuilder: FormBuilder) {
    this.f = formBuilder.group({
      entidad: this.entidad,
      sucursal: '',
      dc: '',
      cuenta: '',
    });

    this.entidad.valueChanges.subscribe(x => console.log(x));
  }

  submit() {
    console.log(this.f)
    if (this.f.controls.dc.errors) {
      console.log(this.f.controls.dc.errors);
    }
  }

  myValidator(formControl: FormControl) {
    return formControl.value.includes("0000") ? {InvalidValue: true} : {};
  }

}

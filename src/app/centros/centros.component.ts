import {Component, OnInit} from '@angular/core';
import {CentrosService} from "../centros.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-centros',
  template: `
    <div *ngFor="let centro of centros">
      <a (click)="visitarCentro(centro.nombre)">{{centro.nombre}}</a>
      <button [routerLink]="['/centros', centro.nombre]">Consultar</button>
    </div>
  `,
  styleUrls: ['./centros.component.css']
})
export class CentrosComponent implements OnInit {
  centros;

  constructor(private centrosService: CentrosService, private router: Router) {
    this.centros = centrosService.getCentros();
  }

  ngOnInit(): void {
  }

  visitarCentro(nombre: any) {
    this.router.navigate(['/centros', nombre])
  }
}

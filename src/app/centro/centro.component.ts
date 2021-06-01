import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-centro',
  template: `{{centro.nombre}}`,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  centro = {nombre: "Fernando de Rojas"};

  constructor() {
  }

  ngOnInit(): void {
  }

}

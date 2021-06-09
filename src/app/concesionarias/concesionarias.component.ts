import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-concesionarias',
  template: `
    <div *ngFor="let concesionaria of concesionarias">
      {{concesionaria.nombre}}
    </div>
  `,
  styleUrls: ['./concesionarias.component.css']
})
export class ConcesionariasComponent {

  collection;
  concesionarias: any;

  constructor(private af: AngularFirestore) {
    this.collection = af.collection<any>('concesionarias');
    this.collection
      .valueChanges({idField: 'id'})
      .pipe(tap(x => console.log(x)))
      .subscribe(x => (this.concesionarias = x));
  }

}

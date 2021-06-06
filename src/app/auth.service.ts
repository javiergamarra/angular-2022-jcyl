import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: Subject<Usuario> = new BehaviorSubject<Usuario>({});

  constructor() {
  }

  login(name: string) {
    this.currentUser.next({name});
  }
}

export interface Usuario {
  name?: string;
}

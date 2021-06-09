import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService, Usuario} from "./auth.service";
import {Store} from "@ngrx/store";
import {LoginAction} from "../login-action";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  :host {
    margin: 20px;
  }`],
  encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'solicitud';

  constructor(private authService: AuthService, private store: Store<Usuario>) {
  }

  login2() {
    this.store.dispatch(new LoginAction({name: "hi!"}));
  }

  log() {
    this.store.pipe(take(1)).subscribe(x => console.log(x));
  }

  login() {
    this.authService.login('javier');
  }

  logout() {
    this.authService.login('')
  }
}

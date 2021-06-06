import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudComponent } from './solicitud.component';
import {SharedModule} from "../shared/shared.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('SolicitudComponent', () => {
  let component: SolicitudComponent;
  let fixture: ComponentFixture<SolicitudComponent>;

  beforeEach(async () => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of({items: [{nombreAlumno: 'A1'}, {nombreAlumno: 'B'}]}));
    await TestBed.configureTestingModule({
      declarations: [ SolicitudComponent ],
      imports: [SharedModule, NoopAnimationsModule],
      providers: [{provide: HttpClient, useValue: httpClientSpy}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have several inputs', () => {
    expect(fixture.nativeElement.textContent).toContain('Nombre');
  });

  it('should validate if name has short length', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input')!;

    nameInput.value = 'Hi';
    nameInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(hostElement.textContent).toContain('Nombre demasiado corto');
    expect(hostElement.textContent).toContain('Apellidos demasiados cortos');
  })

  it('should validate nombre length', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input')!;

    nameInput.value = 'Hola';
    nameInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(hostElement.textContent).not.toContain('Nombre demasiado corto');
    expect(hostElement.textContent).toContain('Apellidos demasiados cortos');
  })

  it('should validate apellidos length', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input')!;

    const apellidosInput: HTMLInputElement = hostElement.querySelectorAll('input')[1]!;

    apellidosInput.value = 'Hola';
    apellidosInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(hostElement.textContent).toContain('Nombre demasiado corto');
    expect(hostElement.textContent).not.toContain('Apellidos demasiados cortos');
  })
});

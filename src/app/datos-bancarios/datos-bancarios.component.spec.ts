import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosBancariosComponent } from './datos-bancarios.component';
import {SharedModule} from "../shared/shared.module";

describe('DatosBancariosComponent', () => {
  let component: DatosBancariosComponent;
  let fixture: ComponentFixture<DatosBancariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosBancariosComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosBancariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

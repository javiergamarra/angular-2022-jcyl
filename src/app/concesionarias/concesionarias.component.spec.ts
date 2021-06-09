import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcesionariasComponent } from './concesionarias.component';

describe('ConcesionariasComponent', () => {
  let component: ConcesionariasComponent;
  let fixture: ComponentFixture<ConcesionariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcesionariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcesionariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

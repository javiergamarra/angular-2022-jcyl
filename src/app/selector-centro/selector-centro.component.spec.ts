import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorCentroComponent } from './selector-centro.component';

describe('SelectorCentroComponent', () => {
  let component: SelectorCentroComponent;
  let fixture: ComponentFixture<SelectorCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorCentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

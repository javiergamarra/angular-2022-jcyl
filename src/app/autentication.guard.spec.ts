import { TestBed } from '@angular/core/testing';

import { AutenticationGuard } from './autentication.guard';

describe('AutenticationGuard', () => {
  let guard: AutenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

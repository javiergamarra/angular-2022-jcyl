import { TestBed } from '@angular/core/testing';

import { CentrosService } from './centros.service';

describe('CentrosService', () => {
  let service: CentrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

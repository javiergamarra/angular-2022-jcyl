import {TestBed} from '@angular/core/testing';

import {SolicitudesService} from './solicitudes.service';
import {HttpClientModule} from "@angular/common/http";

describe('SolicitudesService', () => {
  let service: SolicitudesService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(SolicitudesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

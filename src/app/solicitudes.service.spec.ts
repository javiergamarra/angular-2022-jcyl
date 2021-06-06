import {TestBed} from '@angular/core/testing';

import {CONTENTFUL_URL, SolicitudesService} from './solicitudes.service';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('SolicitudesService', () => {
  let httpClientSpy: { get: jasmine.Spy };

  const response =
    {items: [{fields: {nombreAlumno: 'A1'}}, {fields: {nombreAlumno: 'B'}}]};

  const solicitudes = [{nombreAlumno: 'A1'}, {nombreAlumno: 'B'}]

  it('should return solicitudes with jasmine', () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [{provide: HttpClient, useValue: httpClientSpy}]
    });
    const service = TestBed.inject(SolicitudesService);

    httpClientSpy.get.and.returnValue(of(response));

    service.getSolicitudes().then(
      response => {
        expect(response).toEqual(solicitudes);
      }
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  })

  it('should return solicitudes with httpClientTestModule', () => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    const service = TestBed.inject(SolicitudesService);

    let httpTestingController = TestBed.inject(HttpTestingController);

    service.getSolicitudes().then(
      response => {
        expect(response.length).toBe(2)
        expect(response).toEqual(solicitudes);
      }
    );

    const req = httpTestingController.expectOne(CONTENTFUL_URL);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
    httpTestingController.verify();
  })
});

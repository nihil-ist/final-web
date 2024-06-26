import { TestBed } from '@angular/core/testing';

import { ApartmentService2Service } from './apartment-service2.service';

describe('ApartmentService2Service', () => {
  let service: ApartmentService2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartmentService2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

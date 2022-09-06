import { TestBed } from '@angular/core/testing';

import { MeasurementService } from './measurements.service';

describe('MeasurementsService', () => {
  let service: MeasurementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeasurementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TemperaturetestService } from './temperaturetest.service';

describe('TemperaturetestService', () => {
  let service: TemperaturetestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperaturetestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

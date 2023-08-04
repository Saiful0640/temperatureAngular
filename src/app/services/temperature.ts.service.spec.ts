import { TestBed } from '@angular/core/testing';

import { TemperatureTsService } from './temperature.ts.service';

describe('TemperatureTsService', () => {
  let service: TemperatureTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperatureTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

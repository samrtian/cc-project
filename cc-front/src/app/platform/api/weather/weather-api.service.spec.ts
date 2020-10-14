import { TestBed } from '@angular/core/testing';

import { WeatherApiService } from './weather-api.service';

describe('WeatherApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherApiService = TestBed.get(WeatherApiService);
    expect(service).toBeTruthy();
  });
});

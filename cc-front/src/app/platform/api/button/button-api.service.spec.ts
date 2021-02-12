import { TestBed } from '@angular/core/testing';

import { ButtonApiService } from './button-api.service';

describe('ButtonApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButtonApiService = TestBed.get(ButtonApiService);
    expect(service).toBeTruthy();
  });
});

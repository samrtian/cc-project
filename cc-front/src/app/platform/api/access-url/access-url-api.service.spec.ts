import { TestBed } from '@angular/core/testing';

import { AccessUrlApiService } from './access-url-api.service';

describe('AccessUrlApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessUrlApiService = TestBed.get(AccessUrlApiService);
    expect(service).toBeTruthy();
  });
});

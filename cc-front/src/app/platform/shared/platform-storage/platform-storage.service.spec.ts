import { TestBed } from '@angular/core/testing';

import { PlatformStorageService } from './platform-storage.service';

describe('PlatformStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatformStorageService = TestBed.get(PlatformStorageService);
    expect(service).toBeTruthy();
  });
});

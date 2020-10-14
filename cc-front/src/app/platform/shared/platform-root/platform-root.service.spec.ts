import { TestBed } from '@angular/core/testing';

import { PlatformRootService } from './platform-root.service';

describe('PlatformRootService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatformRootService = TestBed.get(PlatformRootService);
    expect(service).toBeTruthy();
  });
});

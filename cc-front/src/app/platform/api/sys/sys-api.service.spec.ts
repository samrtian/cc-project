import { TestBed } from '@angular/core/testing';

import { SysApiService } from './sys-api.service';

describe('SysApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SysApiService = TestBed.get(SysApiService);
    expect(service).toBeTruthy();
  });
});

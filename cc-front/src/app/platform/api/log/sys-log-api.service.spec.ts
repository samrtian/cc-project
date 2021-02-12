import { TestBed } from '@angular/core/testing';

import { SysLogApiService } from './sys-log-api.service';

describe('SysLogApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SysLogApiService = TestBed.get(SysLogApiService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SysInfoApiService } from './sys-info-api.service';

describe('SysInfoApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SysInfoApiService = TestBed.get(SysInfoApiService);
    expect(service).toBeTruthy();
  });
});

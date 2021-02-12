import { TestBed } from '@angular/core/testing';

import { DataPermissionsApiService } from './data-permissions-api.service';

describe('DataPermissionsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataPermissionsApiService = TestBed.get(DataPermissionsApiService);
    expect(service).toBeTruthy();
  });
});

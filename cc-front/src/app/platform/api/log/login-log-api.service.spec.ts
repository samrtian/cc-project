import { TestBed } from '@angular/core/testing';

import { LoginLogApiService } from './login-log-api.service';

describe('LoginLogApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginLogApiService = TestBed.get(LoginLogApiService);
    expect(service).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { environment } from '@environments/environment';
import { SECURITY_KEY, SESSION_USER, SESSION_USER_INFO } from '@platform/common/constant/common-contant';
import { SecurityUtil } from '@platform/common/util/security-util';
import { SessionStorageService } from '../storage/session-storage.service';

@Injectable()
export class PlatformStorageService {

  constructor(
    private cookieService: CookieService,
    private sessionStorageService: SessionStorageService
  ) { }

  getSecurityKey() {
    return SecurityUtil.decrypt(this.cookieService.get(SECURITY_KEY), environment.loginAesKey);
  }

  setSecurityKey(data: any) {
    this.cookieService.put(SECURITY_KEY, data, {
      expires: new Date(new Date().getTime() + 60 * 1000 * 60)
    });
  }

  removeSecurityKey() {
    return this.cookieService.remove(SECURITY_KEY);
  }

  getSessionUser() {
    return this.cookieService.getObject(SESSION_USER);
  }

  setSessionUser(data: any) {
    this.cookieService.putObject(SESSION_USER, data, {
      expires: new Date(new Date().getTime() + 60 * 1000 * 60)
    });
  }

  removeSessionUser() {
    return this.cookieService.remove(SESSION_USER);
  }

  getSessionUserInfo() {
    return this.sessionStorageService.getObject(SESSION_USER_INFO);
  }

  setSessionUserInfo(data: any) {
    this.sessionStorageService.setObject(SESSION_USER_INFO, data);
  }

  removeSessionUserInfo() {
    return this.sessionStorageService.remove(SESSION_USER_INFO);
  }
}

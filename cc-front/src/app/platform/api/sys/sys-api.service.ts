import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService } from '../base-api.service';

/**
 * 系统
 */
@Injectable()
export class SysApiService extends BaseApiService {


  /**
   * 登录
   */
  login(params: any): Observable<any> {
    return this.httpPost('system/login', params, false);
  }

  /**
   * 退回登录
   */
  exitLogin(): Observable<any> {
    return this.httpPost('system/exitLogin');
  }

  /**
   * 初始化首页
   */
  initMainData(): Observable<any> {
    return this.httpGet('system/initMainData');
  }

  /**
   * 初始化主页
   */
  initHomeData(): Observable<any> {
    return this.httpGet('system/initHomeData');
  }

}

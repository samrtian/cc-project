import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class LoginLogApiService extends BaseApiService {

  /**
    * 初始登录日志管理数据
    * @param params 
    */
  initLoginLogManageData(params: any): Observable<any> {
    return this.httpPost('loginLog/initLoginLogManageData', params);
  }

  /**
   * 根据条件分页查询登录日志
   */
  queryLoginLogByConditionPaging(params: any): Observable<any> {
    return this.httpPost('loginLog/queryLoginLogByConditionPaging', params);
  }

}

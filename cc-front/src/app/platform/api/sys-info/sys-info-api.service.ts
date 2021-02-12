import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';

import { Observable } from 'rxjs';
@Injectable()
export class SysInfoApiService extends BaseApiService {

  /**
   * 初始系统信息数据
   * @param params 
   */
  initSysInfoData(): Observable<any> {
    return this.httpPost('sysInfo/initSysInfoData', {});
  }

}

import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class SysLogApiService extends BaseApiService {

  /**
   * 初始日志管理数据
   * @param params 
   */
  initSystemLogManageData(params: any): Observable<any> {
    return this.httpPost('systemLog/initSystemLogManageData', params);
  }
  

  /**
  * 下载日志
  * @param params 
  */
  downloadSystemLog(filePath: string): string {
    return this.stringUrl('systemLog/downloadSystemLog') + '?filePath=' + encodeURI(encodeURI(filePath));
  }

  /**
  * 删除日志
  * @param params 
  */
  deleteSystemLog(params: any): Observable<any> {
    return this.httpPost('systemLog/deleteSystemLog', params);
  }

}

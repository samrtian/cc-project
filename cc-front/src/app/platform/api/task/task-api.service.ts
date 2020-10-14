import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class TaskApiService extends BaseApiService {
  /**
  * 初始待办管理数据
  * @param params 
  */
  initTaskManageData(params: any): Observable<any> {
    return this.httpPost('task/initTaskManageData', params);
  }

  /**
   * 根据条件分页查询待办
   */
  queryTaskByConditionPaging(params: any): Observable<any> {
    return this.httpPost('task/queryTaskByConditionPaging', params);
  }

  /**
  * 根据id修改待办状态
  */
  updateTaskById(taskId: string): Observable<any> {
    return this.httpGet('task/updateTaskById', {
      taskId: taskId
    });
  }

}

import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class AccessUrlApiService extends BaseApiService {

    /**
   * 初始访问地址管理数据
   * @param params 
   */
    initAccessUrlManageData(params: any): Observable<any> {
        return this.httpPost('accessUrl/initAccessUrlManageData', params);
    }


    /**
   * 根据条件分页查询访问地址
   */
  queryAccessUrlByConditionPaging(params: any): Observable<any> {
        return this.httpPost('accessUrl/queryAccessUrlByConditionPaging', params);
    }

    /**
   * 初始化访问地址数据
   * @param params 
   */
    initAccessUrlAddData(params: any): Observable<any> {
        return this.httpPost('accessUrl/initAccessUrlAddData', params);
    }

    /**
   * 保存访问地址
   * @param params 
   */
    saveAccessUrl(params: any): Observable<any> {
        return this.httpPost('accessUrl/saveAccessUrl', params);
    }

    /**
  * 根据ids删除访问地址
  * @param params 
  */
    deleteAccessUrlByIds(params: any): Observable<any> {
        return this.httpPost('accessUrl/deleteAccessUrlByIds', params);
    }


    /**
     * 查询访问地址信息
     */
    queryAccessUrlById(accessUrlId: string): Observable<any> {
        return this.httpGet('accessUrl/queryAccessUrlById', {
            accessUrlId: accessUrlId
        });
    }


}

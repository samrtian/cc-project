import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { Observable } from 'rxjs';


@Injectable()
export class DataPermissionsApiService extends BaseApiService {
    /**
      * 初始数据权限管理数据
      * @param params 
      */
    initDataPermissionsManageData(params: any): Observable<any> {
        return this.httpPost('dataPermissions/initDataPermissionsManageData', params);
    }


    /**
    * 根据条件分页查询数据权限
    */
   queryDataPermissionsByConditionPaging(params: any): Observable<any> {
        return this.httpPost('dataPermissions/queryDataPermissionsByConditionPaging', params);
    }

    /**
    * 初始化数据权限添加数据
    * @param params 
    */
    initDataPermissionsAddData(params: any): Observable<any> {
        return this.httpPost('dataPermissions/initDataPermissionsAddData', params);
    }

    /**
    * 保存数据权限
    * @param params 
    */
    saveDataPermissions(params: any): Observable<any> {
        return this.httpPost('dataPermissions/saveDataPermissions', params);
    }

    /**
    * 根据ids删除数据权限
    * @param params 
    */
    deleteDataPermissionsByIds(params: any): Observable<any> {
        return this.httpPost('dataPermissions/deleteDataPermissionsByIds', params);
    }


    /**
     * 查询数据权限信息
     */
    queryDataPermissionsById(dataPermissionsId: string): Observable<any> {
        return this.httpGet('dataPermissions/queryDataPermissionsById', {
            dataPermissionsId: dataPermissionsId
        });
    }

}

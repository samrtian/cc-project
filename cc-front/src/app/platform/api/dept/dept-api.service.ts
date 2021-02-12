import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class DeptApiService extends BaseApiService {

    /**
     * 初始部门管理数据
     * @param params 
     */
    initDeptManageData(params: any): Observable<any> {
        return this.httpPost('dept/initDeptManageData', params);
    }



    /**
    * 查询部门信息
    */
    queryDeptByDeptId(deptId: string): Observable<any> {
        return this.httpGet('dept/queryDeptByDeptId', {
            deptId: deptId
        });
    }

    /**
    * 根据条件查询部门
    * @param params 
    */
    queryDeptByCondition(params: any): Observable<any> {
        return this.httpPost('dept/queryDeptByCondition', params);
    }

    /**
    * 初始化部门添加数据
    * @param params 
    */
    initDeptAddData(params: any): Observable<any> {
        return this.httpPost('dept/initDeptAddData', params);
    }

    /**
    * 保存部门
    * @param params 
    */
    saveDept(params: any): Observable<any> {
        return this.httpPost('dept/saveDept', params);
    }

    /**
     * 根据ids删除部门
     * @param params 
     */
    deleteDeptByIds(params: any): Observable<any> {
        return this.httpPost('dept/deleteDeptByIds', params);
    }



    /**
    * 查询部门用户
    */
    queryDeptUsers(deptId: string): Observable<any> {
        return this.httpGet('dept/queryDeptUsers', {
            deptId: deptId
        });
    }


}

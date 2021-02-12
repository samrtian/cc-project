import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class RoleApiService extends BaseApiService {

  /**
    * 初始角色管理数据
    * @param params 
    */
  initRoleManageData(params: any): Observable<any> {
    return this.httpPost('role/initRoleManageData', params);
  }

  /**
   * 根据条件分页查询角色
   */
  queryRoleByConditionPaging(params: any): Observable<any> {
    return this.httpPost('role/queryRoleByConditionPaging', params);
  }


  /**
   * 初始化角色添加数据
   * @param params 
   */
  initRoleAddData(params: any): Observable<any> {
    return this.httpPost('role/initRoleAddData', params);
  }


  /**
   * 保存角色
   * @param params 
   */
  saveRole(params: any): Observable<any> {
    return this.httpPost('role/saveRole', params);
  }

  /**
  * 删除角色
  * @param params 
  */
  deleteRoleByIds(params: any): Observable<any> {
    return this.httpPost('role/deleteRoleByIds', params);
  }


  /**
   * 查询角色信息
   */
  queryRoleById(roleId: string): Observable<any> {
    return this.httpGet('role/queryRoleById', {
      roleId: roleId
    });
  }

  /**
   * 查询角色用户
   */
  queryRoleUsers(roleId: string): Observable<any> {
    return this.httpGet('role/queryRoleUsers', {
      roleId: roleId
    });
  }

  /**
   * 查询角色权限分配
   */
  queryRolePermissionDistribute(roleId: string): Observable<any> {
    return this.httpGet('role/queryRolePermissionDistribute', {
      roleId: roleId
    });
  }

  /**
   * 保存角色权限分配
   * @param params 
   */
  saveRolePermissionDistribute(params: any): Observable<any> {
    return this.httpPost('role/saveRolePermissionDistribute', params);
  }

}

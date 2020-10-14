import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService } from '../base-api.service';

/**
 * 用户
 */
@Injectable()
export class UserApiService extends BaseApiService {


  /**
  * 上传头像
  * @param params 
  */
  uploadUserAvatarImg(params: any): Observable<any> {
    return this.httpPost('user/uploadUserAvatarImg', {
      data: params,
      convert: false
    });
  }


  /**
   * 用户头像
   */
  previewUserAvatar(): string {
    return this.stringUrl('user/previewUserAvatar');
  }

  /**
  * 修改当前用户密码
  */
  updateCurrentUserPassword(params: any): Observable<any> {
    return this.httpPost('user/updateCurrentUserPassword', params);
  }

  /**
   *  根据id修改密码
   */
  updateUserPasswordById(params: any): Observable<any> {
    return this.httpPost('user/updateUserPasswordById', params);
  }

  /**
  * 个人资料查询
  */
  queryCurrentUserInfo(): Observable<any> {
    return this.httpGet('user/queryCurrentUserInfo');
  }


  /**
  *  初始化用户管理数据
  */
  initUserManageData(params: any): Observable<any> {
    return this.httpPost('user/initUserManageData', params);
  }

  /**
   * 查询用户列表数据
   * @param params 
   * @param urlParams 
   */
  queryUserByConditionPaging(params: any): Observable<any> {
    return this.httpPost('user/queryUserByConditionPaging', params);
  }


  /**
   * 查询用户信息
   */
  queryUserById(userId: string): Observable<any> {
    return this.httpGet('user/queryUserById', {
      userId: userId
    });
  }

  /**
   * 初始用户添加数据
   * @param params 
   */
  initUserAddData(params: any): Observable<any> {
    return this.httpPost('user/initUserAddData', params);
  }

  /**
  * 保存用户
  * @param params 
  */
  saveUser(params: any): Observable<any> {
    return this.httpPost('user/saveUser', params);
  }

  /**
   * 删除用户
   * @param params 
   */
  deleteUserByIds(params: any): Observable<any> {
    return this.httpPost('user/deleteUserByIds', params);
  }

  /**
    * 重置密码
    * @param params 
    */
  resetUserPwdByIds(params: any): Observable<any> {
    return this.httpPost('user/resetUserPwdByIds', params);
  }

  /**
   * 初始化用户角色分配数据
   * @param userId 
   */
  initUserRoleDistributeData(userId: string): Observable<any> {
    return this.httpGet('user/initUserRoleDistributeData', {
      userId: userId
    });
  }

  /**
   * 保存用户角色映射
   * @param params 
   */
  saveUserRoleMapping(params: any): Observable<any> {
    return this.httpPost('/user/saveUserRoleMapping', params);
  }

  /**
   * 初始化用户部门分配数据
   * @param userId 
   */
  initUserDeptDistributeData(userId: string): Observable<any> {
    return this.httpGet('user/initUserDeptDistributeData', {
      userId: userId
    });
  }

  /**
   * 保存用户部门映射
   * @param params 
   */
  saveUserDeptMapping(params: any): Observable<any> {
    return this.httpPost('/user/saveUserDeptMapping', params);
  }
}

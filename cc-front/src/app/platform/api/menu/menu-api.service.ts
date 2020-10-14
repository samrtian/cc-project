import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { Observable } from 'rxjs';


@Injectable()
export class MenuApiService extends BaseApiService {

  /**
     * 初始菜单管理数据
     * @param params 
     */
  initMenuManageData(params: any): Observable<any> {
    return this.httpPost('menu/initMenuManageData', params);
  }

  /**
  * 查询菜单信息
  */
  queryMenuByMenuId(menuId: string): Observable<any> {
    return this.httpGet('menu/queryMenuByMenuId', {
      menuId: menuId
    });
  }

  /**
  * 根据条件查询菜单
  * @param params 
  */
  queryMenuByCondition(params: any): Observable<any> {
    return this.httpPost('menu/queryMenuByCondition', params);
  }

  /**
  * 初始化菜单添加数据
  * @param params 
  */
  initMenuAddData(params: any): Observable<any> {
    return this.httpPost('menu/initMenuAddData', params);
  }

  /**
  * 保存菜单
  * @param params 
  */
  saveMenu(params: any): Observable<any> {
    return this.httpPost('menu/saveMenu', params);
  }

  /**
   * 根据ids删除菜单
   * @param params 
   */
  deleteMenuByIds(params: any): Observable<any> {
    return this.httpPost('menu/deleteMenuByIds', params);
  }


}

import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { Observable } from 'rxjs';


@Injectable()
export class DataDicApiService extends BaseApiService {

  /**
      * 初始数据字典管理数据
      * @param params 
      */
  initDataDicManageData(params: any): Observable<any> {
    return this.httpPost('dataDic/initDataDicManageData', params);
  }

  /**
   * 查询数据字典类别列表
   * @param params 
   */
  queryDataDicTypeList(params: any): Observable<any> {
    return this.httpPost('dataDic/queryDataDicTypeList', params);
  }


  /**
   * 初始化数据字典类别数据
   * @param params 
   */
  initDataDicTypeAddData(params: any): Observable<any> {
    return this.httpPost('dataDic/initDataDicTypeAddData', params);
  }

  /**
   * 保存数据字典类别
   * @param params 
   */
  saveDataDicType(params: any): Observable<any> {
    return this.httpPost('dataDic/saveDataDicType', params);
  }

  /**
   * 删除数据字典类别
   * @param params 
   */
  deleteDataDicTypeByIds(params: any): Observable<any> {
    return this.httpPost('dataDic/deleteDataDicTypeByIds', params);
  }

  /**
   * 查询数据字典明细
   * @param params 
   */
  queryDataDicItemByIdPaging(params: any): Observable<any> {
    return this.httpPost('dataDic/queryDataDicItemByIdPaging', params);
  }

  /**
   * 查询数据字典类别信息
   */
  queryDataDicTypeById(dicTypeId: string): Observable<any> {
    return this.httpGet('dataDic/queryDataDicTypeById', {
      dicTypeId: dicTypeId
    });
  }

  /**
   * 重新载入数据字典
   */
  reloadDataDic(): Observable<any> {
    return this.httpPost('dataDic/reloadDataDic', {});
  }


  /**
  * 初始化数据字典明细数据
  * @param params 
  */
  initDataDataDicItemAddData(params: any): Observable<any> {
    return this.httpPost('dataDic/initDataDataDicItemAddData', params);
  }

  /**
   * 保存数据字典明细
   * @param params 
   */
  saveDataDicItem(params: any): Observable<any> {
    return this.httpPost('dataDic/saveDataDicItem', params);
  }

  /**
   * 删除数据字典明细
   * @param params 
   */
  deleteDataDicItemByIds(params: any): Observable<any> {
    return this.httpPost('dataDic/deleteDataDicItemByIds', params);
  }

  /**
   * 查询数据字典明细信息
   */
  queryDataDicItemById(dicItemId: string): Observable<any> {
    return this.httpGet('dataDic/queryDataDicItemById', {
      dicItemId: dicItemId
    });
  }

  /**
   * 查询数据字典明细分配角色
   */
  queryDataDicItemRoleDistribute(dicItemId: string): Observable<any> {
    return this.httpGet('dataDic/queryDataDicItemRoleDistribute', {
      dicItemId: dicItemId
    });
  }

  /**
   * 保存数据字典明细角色映射
   * @param params 
   */
  saveDataDicItemRoleMapping(params: any): Observable<any> {
    return this.httpPost('dataDic/saveDataDicItemRoleMapping', params);
  }
}

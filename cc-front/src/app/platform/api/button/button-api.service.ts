import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class ButtonApiService extends BaseApiService {

    /**
     * 初始按钮管理数据
    * @param params 
    */
    initButtonManageData(params: any): Observable<any> {
        return this.httpPost('button/initButtonManageData', params);
    }

    /**
     * 根据条件分页查询按钮
     */
    queryButtonByConditionPaging(params: any): Observable<any> {
        return this.httpPost('button/queryButtonByConditionPaging', params);
    }


    /**
     *  初始化按钮数据
     * @param params 
     */
    initButtonAddData(params: any): Observable<any> {
        return this.httpPost('button/initButtonAddData', params);
    }


    /**
     * 保存按钮
     * @param params 
     */
    saveButton(params: any): Observable<any> {
        return this.httpPost('button/saveButton', params);
    }

    /**
    * 根据ids删除按钮
    * @param params 
    */
    deleteButtonByIds(params: any): Observable<any> {
        return this.httpPost('button/deleteButtonByIds', params);
    }


    /**
     *  查询按钮信息
     */
    queryButtonById(buttonId: string): Observable<any> {
        return this.httpGet('button/queryButtonById', {
            buttonId: buttonId
        });
    }

}

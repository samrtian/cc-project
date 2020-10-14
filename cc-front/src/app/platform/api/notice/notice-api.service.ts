import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class NoticeApiService extends BaseApiService {


  /**
    * 初始系统公告管理数据
    * @param params
    */
  initSysNoticeManageData(params: any): Observable<any> {
    return this.httpPost('notice/initSysNoticeManageData', params);
  }


  /**
   * 根据条件分页查询系统公告
   */
  querySysNoticeByConditionPaging(params: any): Observable<any> {
    return this.httpPost('notice/querySysNoticeByConditionPaging', params);
  }

  /**
   * 初始化系统公告数据
   * @param params
   */
  initSysNoticeAddData(params: any): Observable<any> {
    return this.httpPost('notice/initSysNoticeAddData', params);
  }


  /**
   * 保存系统公告
   * @param params
   */
  saveSysNotice(params: any): Observable<any> {
    return this.httpPost('notice/saveSysNotice', params);
  }

  /**
  * 根据ids删除系统公告
  * @param params
  */
  deleteSysNoticeByIds(params: any): Observable<any> {
    return this.httpPost('notice/deleteSysNoticeByIds', params);
  }


  /**
   * 查询系统公告信息
   */
  querySysNoticeById(noticeId: string): Observable<any> {
    return this.httpGet('notice/querySysNoticeById', {
      noticeId: noticeId
    });
  }

  /**
   * 初始用户系统公告管理数据
   * @param params
   */
  initUserSysNoticeManageData(params: any): Observable<any> {
    return this.httpPost('notice/initUserSysNoticeManageData', params);
  }


  /**
   * 根据条件分页查询用户系统公告
   */
  queryUserSysNoticeByConditionPaging(params: any): Observable<any> {
    return this.httpPost('notice/queryUserSysNoticeByConditionPaging', params);
  }

  /**
   * 查询用户系统公告信息
   */
  queryUserSysNoticeById(noticeId: string): Observable<any> {
    return this.httpGet('notice/queryUserSysNoticeById', {
      noticeId: noticeId
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { NoticeApiService } from '@platform/api/notice/notice-api.service';
import { BaseListComponent } from '@platform/view/base/base-list-component';
import { Router } from '@angular/router';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { CommonUtil } from '@platform/common/util/common-util';


@Component({
  selector: 'app-sys-notice-list',
  templateUrl: './sys-notice-list.component.html',
  styleUrls: ['./sys-notice-list.component.less'],
  providers: [NoticeApiService]
})
export class SysNoticeListComponent extends BaseListComponent implements OnInit {

  list: Array<any> = [];
  formStatusOptionList: Array<any> = [];


  mapOfCheckedId: { [key: string]: boolean } = {};



  constructor(
    private router: Router,
    private noticeApiService: NoticeApiService,
    private modalService: NzModalService,
    private notificationService: NzNotificationService
  ) {
    super();

    this.queryParams = CommonUtil.queryParamsMergePageParams({
      noticeTitle: '',
      cutoffDate: '',
      status: '-1'
    });
  }

  ngOnInit() {
    this.initPageData();
    this.query();
  }



  initPageData() {
    this.noticeApiService.initSysNoticeManageData({}).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.buttonList = result.data.resultData.buttonList;
          this.formStatusOptionList = result.data.resultData.FORM_STATUS_TYPE;
        }, this.notificationService);

      });
  }


  query(btnQuery: boolean = false) {
    if (btnQuery) {
      this.queryParams = CommonUtil.resetPaginationParams(this.queryParams);
    }
    this.noticeApiService.querySysNoticeByConditionPaging(this.queryParams).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.queryParams = CommonUtil.paginationParamsMergeResultParams(this.queryParams, result.data.resultData);
          this.list = result.data.resultData.rows;
        }, this.notificationService);

      });
  }

  checkAll(value: boolean): void {
    CommonUtil.listCheckAll(this.list, this.mapOfCheckedId, 'noticeId', value);
  }

  sysNoticeAdd() {
    this.router.navigate(['/app/notice/sysNoticeAdd']);
  }

  deleteSysNotice() {
    const checkList = CommonUtil.getCheckOrUnCheckListIds(this.list, this.mapOfCheckedId, 'noticeId');
    if (checkList && checkList.length) {
      this.modalService.confirm({
        nzTitle: '提示',
        nzContent: '您确定要删除吗？',
        nzOnOk: () => {
          this.noticeApiService.deleteSysNoticeByIds({
            ids: checkList
          }).subscribe(
            (result: any) => {
              CommonUtil.resultHandle(result, () => {
                this.query();
                this.notificationService.success('提示', result.data.resultMsg);
              }, this.notificationService);
            });
        }
      });

    } else {
      this.notificationService.warning('提示', '请勾选数据！');
    }
  }

  sysNoticeView(item: any) {
    this.router.navigate(['/app/notice/sysNoticeView'], { queryParams: { id: item.noticeId } });
  }

  sysNoticeEdit(item: any) {
    this.router.navigate(['/app/notice/sysNoticeEdit'], { queryParams: { id: item.noticeId } });
  }




}

import { Component, OnInit } from '@angular/core';
import { NoticeApiService } from '@platform/api/notice/notice-api.service';
import { BaseListComponent } from '@platform/view/base/base-list-component';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
import { CommonUtil } from '@platform/common/util/common-util';


@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.less'],
  providers: [NoticeApiService]
})
export class NoticeListComponent extends BaseListComponent implements OnInit {

  list: Array<any> = [];
  formStatusOptionList: Array<any> = [];

  constructor(
    private router: Router,
    private noticeApiService: NoticeApiService,
    private notificationService: NzNotificationService
  ) {
    super();

    this.queryParams = CommonUtil.queryParamsMergePageParams({
      noticeTitle: ''
    });
  }

  ngOnInit() {
    this.initPageData();
    this.query();
  }



  initPageData() {
    this.noticeApiService.initUserSysNoticeManageData({}).subscribe(
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
    this.noticeApiService.queryUserSysNoticeByConditionPaging(this.queryParams).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.queryParams = CommonUtil.paginationParamsMergeResultParams(this.queryParams, result.data.resultData);
          this.list = result.data.resultData.rows;
        }, this.notificationService);

      });
  }

  userNoticeView(item: any) {
    this.router.navigate(['/app/workbench/noticeView'], { queryParams: { id: item.noticeId } });
  }

}

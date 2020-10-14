import { Component, OnInit } from '@angular/core';
import { NoticeApiService } from '@platform/api/notice/notice-api.service';
import { BaseViewComponent } from '@platform/view/base/base-view-component';
import { NzNotificationService } from 'ng-zorro-antd';
import { CommonUtil } from '@platform/common/util/common-util';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notice-view',
  templateUrl: './notice-view.component.html',
  styleUrls: ['./notice-view.component.less'],
  providers: [NoticeApiService]
})
export class NoticeViewComponent extends BaseViewComponent implements OnInit {

  resultData: any = {};

  constructor(
    private notificationService: NzNotificationService,
    private noticeApiService: NoticeApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    CommonUtil.pageQueryParams(this.activatedRoute, (params: any) => {
      if (!!params.id) {
        this.id = params.id;
        this.initPageData();
      }
    });
  }

  initPageData() {
    this.noticeApiService.queryUserSysNoticeById(this.id).subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.resultData = result.data.resultData;
      }, this.notificationService);

    });
  }


  back() {
    this.router.navigate(['app/workbench/noticeList']);
  }

}

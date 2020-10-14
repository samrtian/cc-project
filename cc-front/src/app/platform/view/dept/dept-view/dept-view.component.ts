import { Component, OnInit } from '@angular/core';
import { BaseViewComponent } from '@platform/view/base/base-view-component';
import { DeptApiService } from '@platform/api/dept/dept-api.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-dept-view',
  templateUrl: './dept-view.component.html',
  styleUrls: ['./dept-view.component.less'],
  providers: [DeptApiService]
})
export class DeptViewComponent extends BaseViewComponent implements OnInit {

  constructor(
    private notificationService: NzNotificationService,
    private deptApiService: DeptApiService
  ) {
    super();
  }

  ngOnInit() {
    this.initPageData();
  }

  initPageData(): void {
    this.deptApiService.queryDeptByDeptId(this.id).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.resultData = result.data.resultData.deptBean;
        }, this.notificationService);
      });
  }


}

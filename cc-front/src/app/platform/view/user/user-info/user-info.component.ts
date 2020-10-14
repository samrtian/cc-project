import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

import { UserApiService } from '@platform/api/user/user-api.service';
import { CommonUtil } from '@platform/common/util/common-util';
import { BaseViewComponent } from '@platform/view/base/base-view-component';

/**
 * 个人资料
 */
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less'],
  providers: [UserApiService]
})
export class UserInfoComponent extends BaseViewComponent implements OnInit {

  resultData: any = {};

  constructor(
    private notificationService: NzNotificationService,
    private userApiService: UserApiService
  ) { 
    super();
  }

  ngOnInit() {
    this.initPageData();
  }

  initPageData() {
    this.userApiService.queryCurrentUserInfo().subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.resultData = result.data.resultData;
      }, this.notificationService);

    });
  }


}

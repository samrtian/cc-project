import { Component, OnInit } from '@angular/core';
import { LoginLogApiService } from '@platform/api/log/login-log-api.service';
import { BaseListComponent } from '@platform/view/base/base-list-component';
import { CommonUtil } from '@platform/common/util/common-util';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login-log-list',
  templateUrl: './login-log-list.component.html',
  styleUrls: ['./login-log-list.component.less'],
  providers: [LoginLogApiService]
})
export class LoginLogListComponent extends BaseListComponent implements OnInit {

  userOptionList: Array<any> = [];
  list: Array<any> = [];


  constructor(
    private loginLogApiService: LoginLogApiService,
    private notificationService: NzNotificationService
  ) {
    super();

    this.queryParams = CommonUtil.queryParamsMergePageParams({
      queryUserId: null
    });
  }

  ngOnInit() {
    this.initPageData();
  }

  initPageData(): void {
    this.loginLogApiService.initLoginLogManageData({}).subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.userOptionList = result.data.resultData.userList;
      }, this.notificationService);
    });
  }

  query(btnQuery: boolean = false) {
    if (btnQuery) {
      this.queryParams = CommonUtil.resetPaginationParams(this.queryParams);
    }
    this.loginLogApiService.queryLoginLogByConditionPaging(this.queryParams).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.queryParams = CommonUtil.paginationParamsMergeResultParams(this.queryParams, result.data.resultData);
          this.list = result.data.resultData.rows;
        }, this.notificationService);

      });
  }
}

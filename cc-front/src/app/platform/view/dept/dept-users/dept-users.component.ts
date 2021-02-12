import { Component, OnInit } from '@angular/core';
import { DeptApiService } from '@platform/api/dept/dept-api.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-dept-users',
  templateUrl: './dept-users.component.html',
  styleUrls: ['./dept-users.component.less'],
  providers: [DeptApiService]
})
export class DeptUsersComponent implements OnInit {
  id: string = undefined;
  list: Array<any> = [];

  constructor(
    private modal: NzModalRef,
    private notificationService: NzNotificationService,
    private deptApiService: DeptApiService,
  ) { }

  ngOnInit() {
    this.queryDeptUsers();
  }

  queryDeptUsers() {
    this.deptApiService.queryDeptUsers(this.id).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.list = result.data.resultData.deptUser;
        }, this.notificationService);
      });
  }

}

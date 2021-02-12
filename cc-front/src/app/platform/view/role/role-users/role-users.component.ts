import { Component, OnInit } from '@angular/core';
import { RoleApiService } from '@platform/api/role/role-api.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-role-users',
  templateUrl: './role-users.component.html',
  styleUrls: ['./role-users.component.less'],
  providers: [
    RoleApiService
  ]
})
export class RoleUsersComponent implements OnInit {
  id: string = undefined;
  list: Array<any> = [];

  constructor(
    private modal: NzModalRef,
    private notificationService: NzNotificationService,
    private roleApiService: RoleApiService,
  ) { }

  ngOnInit() {
    this.queryDeptUsers();
  }

  queryDeptUsers() {
    this.roleApiService.queryRoleUsers(this.id).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.list = result.data.resultData.roleUser;
        }, this.notificationService);
      });
  }

}


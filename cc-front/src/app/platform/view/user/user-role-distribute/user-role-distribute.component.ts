import { Component, OnInit } from '@angular/core';
import { UserApiService } from '@platform/api/user/user-api.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-user-role-distribute',
  templateUrl: './user-role-distribute.component.html',
  styleUrls: ['./user-role-distribute.component.less'],
  providers: [
    UserApiService
  ]
})
export class UserRoleDistributeComponent implements OnInit {
  id: string;
  list: Array<any> = [];

  constructor(
    private userApiService: UserApiService,
    private modal: NzModalRef,
    private notificationService: NzNotificationService
  ) { }

  ngOnInit() {
    this.initUserRoleDistributeData();
  }

  initUserRoleDistributeData() {
    this.userApiService.initUserRoleDistributeData(this.id).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          for (const role of result.data.resultData.roleData) {
            role.key = role.roleId;
            role.direction = 'left';
            role.title = role.roleName;
            for (let i = 0; i < result.data.resultData.userRoleData.length; i++) {
              const extendRole = result.data.resultData.userRoleData[i];
              if (role.roleId === extendRole.roleId) {
                role.direction = 'right';
                result.data.resultData.userRoleData.splice(i, 1);
                break;
              }
            }
          }
          this.list = result.data.resultData.roleData;
        }, this.notificationService);
      });
  }

  ok() {
    const roleIds: Array<string> = [];
    for (const role of this.list) {
      if (role.direction === 'right') {
        roleIds.push(role.roleId);
      }
    }

    const params = {
      roleIds: roleIds,
      userId: this.id
    };

    this.userApiService.saveUserRoleMapping(params).subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.notificationService.success('提示', result.data.resultMsg);
        this.modal.close();
      }, this.notificationService);
    });
  }

}

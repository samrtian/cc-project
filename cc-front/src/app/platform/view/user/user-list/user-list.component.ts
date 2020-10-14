import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService, NzModalService, NzModalRef } from 'ng-zorro-antd';

import { UserApiService } from '@platform/api/user/user-api.service';
import { CommonUtil } from '@platform/common/util/common-util';
import { BaseListComponent } from '@platform/view/base/base-list-component';
import { UserPwdEditComponent } from '../user-pwd-edit/user-pwd-edit.component';
import { UserRoleDistributeComponent } from '../user-role-distribute/user-role-distribute.component';
import { UserDeptDistributeComponent } from '../user-dept-distribute/user-dept-distribute.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less'], 
  providers: [
    UserApiService
  ]
})
export class UserListComponent extends BaseListComponent implements OnInit, OnDestroy {

  list: Array<any> = [];
  statusOptionList: Array<any> = [];

  mapOfCheckedId: { [key: string]: boolean } = {};

  updatePwdModal: NzModalRef = undefined;
  userRoleDistributeModal: NzModalRef = undefined;

  constructor(
    private router: Router,
    private userApiService: UserApiService,
    private modalService: NzModalService,
    private notificationService: NzNotificationService
  ) {
    super();

    this.queryParams = CommonUtil.queryParamsMergePageParams({
      userName: '',
      realName: ''
    });
  }

  ngOnInit() {
    this.initPageData();
    this.query();
  }

  ngOnDestroy() {
    if (!!this.updatePwdModal) {
      this.updatePwdModal.destroy();
    }

    if (!!this.userRoleDistributeModal) {
      this.userRoleDistributeModal.destroy();
    }
  }

  initPageData() {
    this.userApiService.initUserManageData({}).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.buttonList = result.data.resultData.buttonList;
          this.statusOptionList = result.data.resultData.STATUS_TYPE;
        }, this.notificationService);

      });
  }


  query(btnQuery: boolean = false) {
    if (btnQuery) {
      this.queryParams = CommonUtil.resetPaginationParams(this.queryParams);
    }
    this.userApiService.queryUserByConditionPaging(this.queryParams).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.queryParams = CommonUtil.paginationParamsMergeResultParams(this.queryParams, result.data.resultData);
          this.list = result.data.resultData.rows;
        }, this.notificationService);

      });
  }

  checkAll(value: boolean): void {
    CommonUtil.listCheckAll(this.list, this.mapOfCheckedId, 'userId', value);
  }

  userAdd() {
    this.router.navigate(['/app/user/userAdd']);
  }

  deleteUser() {
    const checkList = CommonUtil.getCheckOrUnCheckListIds(this.list, this.mapOfCheckedId, 'userId');
    if (checkList && checkList.length) {
      this.modalService.confirm({
        nzTitle: '提示',
        nzContent: '您确定要删除吗？',
        nzOnOk: () => {
          this.userApiService.deleteUserByIds({
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

  userView(item: any) {
    this.router.navigate(['/app/user/userView'], { queryParams: { id: item.userId } });
  }

  userEdit(item: any) {
    this.router.navigate(['/app/user/userEdit'], { queryParams: { id: item.userId } });
  }

  userPasswordEdit(item: any) {
    this.updatePwdModal = this.modalService.create({
      nzTitle: '修改密码',
      nzWidth: '430px',
      nzContent: UserPwdEditComponent,
      nzComponentParams: {
        id: item.userId
      },
      nzMaskClosable: false,
      nzOnOk: (componentInstance) => {
        componentInstance.ok();
        return false;
      }
    });
  }

  userPasswordReset() {
    const checkList = CommonUtil.getCheckOrUnCheckListIds(this.list, this.mapOfCheckedId, 'userId');
    if (checkList && checkList.length) {
      this.modalService.confirm({
        nzTitle: '提示',
        nzContent: '您确定要重置吗？',
        nzOnOk: () => {
          this.userApiService.resetUserPwdByIds({
            ids: checkList
          }).subscribe(
            (result: any) => {
              CommonUtil.resultHandle(result, () => {
                this.notificationService.success('提示', result.data.resultMsg);
              }, this.notificationService);

            });
        }
      });

    } else {
      this.notificationService.warning('提示', '请勾选数据！');
    }
  }

  userRoleDistribute(item: any) {
    this.userRoleDistributeModal = this.modalService.create({
      nzTitle: '角色分配',
      nzWidth: '700px',
      nzContent: UserRoleDistributeComponent,
      nzComponentParams: {
        id: item.userId
      },
      nzMaskClosable: false,
      nzOnOk: (componentInstance) => {
        componentInstance.ok();
        return false;
      }
    });
  }

  userDeptDistribute(item: any) {
    this.userRoleDistributeModal = this.modalService.create({
      nzTitle: '部门分配',
      nzWidth: '800px',
      nzContent: UserDeptDistributeComponent,
      nzComponentParams: {
        id: item.userId
      },
      nzMaskClosable: false,
      nzOnOk: (componentInstance) => {
        componentInstance.ok();
        return false;
      }
    });
  }


}

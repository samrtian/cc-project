import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoleApiService } from '@platform/api/role/role-api.service';
import { BaseListComponent } from '@platform/view/base/base-list-component';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';
import { CommonUtil } from '@platform/common/util/common-util';
import { RoleUsersComponent } from '../role-users/role-users.component';
import { RolePermissionDistributeComponent } from '../role-permission-distribute/role-permission-distribute.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.less'],
  providers: [
    RoleApiService
  ]
})
export class RoleListComponent extends BaseListComponent implements OnInit, OnDestroy {

  list: Array<any> = [];
  isSuperOptionList: Array<any> = [];
  queryIsSuperOptionList: Array<any> = [];
  statusOptionList: Array<any> = [];

  mapOfCheckedId: { [key: string]: boolean } = {};

  roleUsersModal: NzModalRef = undefined;
  roleAccUrlBtnDistributeModal: NzModalRef = undefined;

  constructor(
    private router: Router,
    private roleApiService: RoleApiService,
    private modalService: NzModalService,
    private notificationService: NzNotificationService
  ) {
    super();

    this.queryParams = CommonUtil.queryParamsMergePageParams({
      roleCode: '',
      isSuper: '-1'
    });
  }

  ngOnInit() {
    this.initPageData();
    this.query();
  }

  ngOnDestroy() {
    if (!!this.roleUsersModal) {
      this.roleUsersModal.destroy();
    }

    if (!!this.roleAccUrlBtnDistributeModal) {
      this.roleAccUrlBtnDistributeModal.destroy();
    }
  }

  initPageData() {
    this.roleApiService.initRoleManageData({}).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.buttonList = result.data.resultData.buttonList;
          this.statusOptionList = result.data.resultData.STATUS_TYPE;
          this.queryIsSuperOptionList = result.data.resultData.QUERY_IS_SUPER_TYPE;
          this.isSuperOptionList = result.data.resultData.IS_SUPER_TYPE;
        }, this.notificationService);

      });
  }


  query(btnQuery: boolean = false) {
    if (btnQuery) {
      this.queryParams = CommonUtil.resetPaginationParams(this.queryParams);
    }
    this.roleApiService.queryRoleByConditionPaging(this.queryParams).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.queryParams = CommonUtil.paginationParamsMergeResultParams(this.queryParams, result.data.resultData);
          this.list = result.data.resultData.rows;
        }, this.notificationService);

      });
  }

  checkAll(value: boolean): void {
    CommonUtil.listCheckAll(this.list, this.mapOfCheckedId, 'roleId', value);
  }

  roleAdd() {
    this.router.navigate(['/app/role/roleAdd']);
  }

  deleteRole() {
    const checkList = CommonUtil.getCheckOrUnCheckListIds(this.list, this.mapOfCheckedId, 'roleId');
    if (checkList && checkList.length) {
      this.modalService.confirm({
        nzTitle: '提示',
        nzContent: '您确定要删除吗？',
        nzOnOk: () => {
          this.roleApiService.deleteRoleByIds({
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

  roleView(item: any) {
    this.router.navigate(['/app/role/roleView'], { queryParams: { id: item.roleId } });
  }

  roleEdit(item: any) {
    this.router.navigate(['/app/role/roleEdit'], { queryParams: { id: item.roleId } });
  }


  roleUsers(item: any) {
    this.roleUsersModal = this.modalService.create({
      nzTitle: '角色用户',
      nzWidth: '600px',
      nzContent: RoleUsersComponent,
      nzComponentParams: {
        id: item.roleId
      },
      nzOkText: null
    });
  }

  rolePermissionDistribute(item: any) {
    this.roleAccUrlBtnDistributeModal = this.modalService.create({
      nzTitle: '权限分配',
      nzWidth: '700px',
      nzContent: RolePermissionDistributeComponent,
      nzComponentParams: {
        id: item.roleId
      },
      nzMaskClosable: false,
      nzOnOk: (componentInstance) => {
        componentInstance.ok();
        return false;
      }
    });
  }


}

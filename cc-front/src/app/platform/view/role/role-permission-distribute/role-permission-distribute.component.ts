import { Component, OnInit, ViewChild } from '@angular/core';
import { NzNotificationService, NzModalRef, NzTreeComponent, NzTreeNode } from 'ng-zorro-antd';
import { RoleApiService } from '@platform/api/role/role-api.service';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-role-permission-distribute',
  templateUrl: './role-permission-distribute.component.html',
  styleUrls: ['./role-permission-distribute.component.less'],
  providers: [
    RoleApiService
  ]
})
export class RolePermissionDistributeComponent implements OnInit {
  @ViewChild('menuTree', { static: false }) menuTree: NzTreeComponent;

  id: string = undefined;

  menuTreeData: any = [];
  roleMenuData: any = [];
  accessUrlAndButtonData: any = [];
  dataPermissionsData: any = [];

  constructor(
    private modal: NzModalRef,
    private notificationService: NzNotificationService,
    private roleApiService: RoleApiService,
  ) { }

  ngOnInit() {
    this.queryRolePermissionDistribute();
  }

  queryRolePermissionDistribute() {
    this.roleApiService.queryRolePermissionDistribute(this.id).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.menuTreeData = result.data.resultData.menuTreeData;
          this.roleMenuData = result.data.resultData.roleMenuData;
          this.accessUrlAndButtonData = result.data.resultData.accessUrlAndButtonData;
          this.dataPermissionsData = result.data.resultData.dataPermissionsData;
        }, this.notificationService);
      });
  }

  ok() {
    const checkNodeList: NzTreeNode[] = this.menuTree.getCheckedNodeList();
    const menuIds = [];
    checkNodeList.forEach((node: NzTreeNode) => {
      menuIds.push(node.key);
    });

    const btnAndAccessUrlIds = [];
    this.accessUrlAndButtonData.forEach((category: any) => {
      if (category.children && category.children.length) {
        category.children.forEach((item: any) => {
          if (item.checked) {
            btnAndAccessUrlIds.push({
              id: item.id,
              type: item.attr1
            });
          }
        });
      }
    });

    const dataPermissionsIds = [];
    this.dataPermissionsData.forEach((category: any) => {
      if (category.children && category.children.length) {
        category.children.forEach((item: any) => {
          if (item.checked) {
            dataPermissionsIds.push({
              id: item.id
            });
          }
        });
      }
    });

    this.roleApiService.saveRolePermissionDistribute({
      roleId: this.id,
      menuIds: menuIds,
      btnAndAccessUrlIds: btnAndAccessUrlIds,
      dataPermissionsIds: dataPermissionsIds
    }).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.notificationService.success('提示', result.data.resultMsg);
          this.modal.close();
        }, this.notificationService);
      });

  }

}

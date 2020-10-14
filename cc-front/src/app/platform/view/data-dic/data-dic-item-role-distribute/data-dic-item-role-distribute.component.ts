import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzNotificationService } from 'ng-zorro-antd';
import { DataDicApiService } from '@platform/api/data-dic/data-dic-api.service';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-data-dic-item-role-distribute',
  templateUrl: './data-dic-item-role-distribute.component.html',
  styleUrls: ['./data-dic-item-role-distribute.component.less'],
  providers: [DataDicApiService]
})
export class DataDicItemRoleDistributeComponent implements OnInit {
  id: string = undefined;
  list: Array<any> = [];

  constructor(
    private modal: NzModalRef,
    private notificationService: NzNotificationService,
    private dataDicApiService: DataDicApiService
  ) { }

  ngOnInit() {
    this.initDataDicItemRoleDistribute();
  }

  initDataDicItemRoleDistribute() {
    this.dataDicApiService.queryDataDicItemRoleDistribute(this.id).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          for (const role of result.data.resultData.roleData) {
            role.key = role.roleId;
            role.direction = 'left';
            role.title = role.roleName;
            for (let i = 0; i < result.data.resultData.dataDicItemRoleData.length; i++) {
              const extendRole = result.data.resultData.dataDicItemRoleData[i];
              if (role.roleId === extendRole.roleId) {
                role.direction = 'right';
                result.data.resultData.dataDicItemRoleData.splice(i, 1);
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
      dicItemId: this.id
    };

    this.dataDicApiService.saveDataDicItemRoleMapping(params).subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.notificationService.success('提示', result.data.resultMsg);
        this.modal.close();
      }, this.notificationService);
    });
  }

}

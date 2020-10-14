import { Component, OnInit } from '@angular/core';
import { UserApiService } from '@platform/api/user/user-api.service';
import { NzModalRef, NzNotificationService, NzTreeNode } from 'ng-zorro-antd';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-user-dept-distribute',
  templateUrl: './user-dept-distribute.component.html',
  styleUrls: ['./user-dept-distribute.component.less'],
  providers: [UserApiService]
})
export class UserDeptDistributeComponent implements OnInit {

  id: string;
  deptTreeData: any;
  selectNodeList: any;

  constructor(
    private userApiService: UserApiService,
    private modal: NzModalRef,
    private notificationService: NzNotificationService
  ) { }

  ngOnInit() {
    this.initUserDeptDistributeData();
  }


  initUserDeptDistributeData(): void {
    this.userApiService.initUserDeptDistributeData(this.id).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.deptTreeData = result.data.resultData.deptTreeData;
          this.selectNodeList = result.data.resultData.userDeptData;
        }, this.notificationService);
      });
  }

  ok() {
    const deptIds = CommonUtil.ArrayToSimpleArray(this.selectNodeList, 'deptId');

    const params = {
      deptIds: deptIds,
      userId: this.id
    };

    this.userApiService.saveUserDeptMapping(params).subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.notificationService.success('提示', result.data.resultMsg);
        this.modal.close();
      }, this.notificationService);
    });
  }

  selectNode(node: NzTreeNode): void {
    let isExist = false;
    for (const selectNode of this.selectNodeList) {
      if (selectNode.deptId === node.key) {
        isExist = true;
        break;
      }
    }

    if (!isExist) {
      this.selectNodeList = this.selectNodeList.concat([{
        deptName: node.title,
        deptId: node.key
      }]);
    }
  }

  deleteNode(item: any) {
    const index = this.selectNodeList.findIndex((node: any) => {
      return node.deptId === item.deptId;
    });
    if (index !== -1) {
      this.selectNodeList.splice(index, 1);
    }
  }

}

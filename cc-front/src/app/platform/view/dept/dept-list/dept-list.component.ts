import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BaseListComponent } from '@platform/view/base/base-list-component';
import { Router } from '@angular/router';
import { DeptApiService } from '@platform/api/dept/dept-api.service';
import { NzModalService, NzNotificationService, NzTreeNode, NzFormatEmitEvent, NzTreeComponent, NzModalRef } from 'ng-zorro-antd';
import { CommonUtil } from '@platform/common/util/common-util';
import { DeptUsersComponent } from '../dept-users/dept-users.component';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.less'],
  providers: [DeptApiService]
})
export class DeptListComponent extends BaseListComponent implements OnInit, OnDestroy {
  @ViewChild('deptTree', { static: false }) deptTree: NzTreeComponent;

  list: Array<any> = [];
  searchValue: any;
  deptData: any = null;

  deptUsersModal: NzModalRef = undefined;
  
  matchRouters = environment.matchRouters;

  constructor(
    private router: Router,
    private deptApiService: DeptApiService,
    private modalService: NzModalService,
    private notificationService: NzNotificationService
  ) {
    super();
  }

  ngOnInit() {
    this.initPageData();
  }

  ngOnDestroy() {
    if (!!this.deptUsersModal) {
      this.deptUsersModal.destroy();
    }
  }

  initPageData(): void {
    this.deptApiService.initDeptManageData({}).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.buttonList = result.data.resultData.buttonList;
          if (result.data.resultData.deptList && result.data.resultData.deptList.length) {
            result.data.resultData.deptList[0].expanded = true;
            this.list = result.data.resultData.deptList;
          } else {
            this.list = [];
          }
        }, this.notificationService);

      });
  }

  reset() {
    this.deptData = null;
    this.searchValue = null;
    this.initPageData();
  }

  deptView(event: NzFormatEmitEvent) {
    this.deptApiService.queryDeptByDeptId(event.node.key).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.deptData = result.data.resultData.deptBean;
        }, this.notificationService);
      });
  }

  deleteDept(): void {
    const checkNodeList: NzTreeNode[] = this.deptTree.getCheckedNodeList();

    if (checkNodeList && checkNodeList.length) {
      const checkList = [];
      checkNodeList.forEach((node: NzTreeNode) => {
        checkList.push(node.key);
      });

      this.modalService.confirm({
        nzTitle: '提示',
        nzContent: '您确定要删除吗？',
        nzOnOk: () => {
          this.deptApiService.deleteDeptByIds({
            ids: checkList
          }).subscribe(
            (result: any) => {
              CommonUtil.resultHandle(result, () => {
                this.reset();
                this.notificationService.success('提示', result.data.resultMsg);
              }, this.notificationService);
            });
        }
      });

    } else {
      this.notificationService.warning('提示', '请勾选数据！');
    }
  }

  deptUsers(): void {
    this.deptUsersModal = this.modalService.create({
      nzTitle: '部门人员',
      nzWidth: '600px',
      nzContent: DeptUsersComponent,
      nzClosable: false,
      nzComponentParams: {
        id: this.deptData.deptId
      },
      nzOkText: null
    });
  }

  deptAdd(): void {
    this.router.navigate(['/app/dept/deptAdd']);
  }

  deptEdit(): void {
    if (this.list[0].key === this.deptData.deptId) {
      this.notificationService.warning('提示', '不允许编辑！');
      return;
    }
    this.router.navigate(['/app/dept/deptEdit'], { queryParams: { 'id': this.deptData.deptId } });
  }

  deptStructure(): void {
    this.router.navigate(['/app/dept/deptStructure']);
  }

}

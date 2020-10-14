import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BaseViewComponent } from '@platform/view/base/base-view-component';
import { Router } from '@angular/router';
import { DeptApiService } from '@platform/api/dept/dept-api.service';
import { NzNotificationService, NzModalService, NzModalRef } from 'ng-zorro-antd';
import { SelectionMode } from '@platform/common/constant/structure-diagram-contant';
import { CommonUtil } from '@platform/common/util/common-util';
import { StructureDiagramComponent } from '@platform/shared/structure-diagram/structure-diagram.component';
import { DeptViewComponent } from '../dept-view/dept-view.component';

@Component({
  selector: 'app-dept-structure',
  templateUrl: './dept-structure.component.html',
  styleUrls: ['./dept-structure.component.less'],
  providers: [DeptApiService]
})
export class DeptStructureComponent extends BaseViewComponent implements OnInit, OnDestroy {
  @ViewChild('deptStructure', { static: true }) deptStructure: StructureDiagramComponent;

  list: Array<any> = [];
  selectionMode: string = SelectionMode.SINGLE;
  param: any = {
    deptName: ''
  };

  deptViewModal: NzModalRef = undefined;

  constructor(
    private router: Router,
    private deptApiService: DeptApiService,
    private notificationService: NzNotificationService,
    private modalService: NzModalService
  ) {
    super();
  }

  ngOnInit() {
    this.initPageData();
  }

  ngOnDestroy() {
    if (!!this.deptViewModal) {
      this.deptViewModal.destroy();
    }
  }

  initPageData(): void {
    this.deptApiService.initDeptManageData({}).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          if (result.data.resultData.deptList && result.data.resultData.deptList.length) {
            result.data.resultData.deptList[0].expanded = true;
            this.list = result.data.resultData.deptList;
          } else {
            this.list = [];
          }
        }, this.notificationService);

      });
  }

  search(): void {
    this.deptStructure.search(this.param.deptName);
  }

  deptSelected(node: any) {
    this.deptViewModal = this.modalService.create({
      nzTitle: '部门查看',
      nzWidth: '60%',
      nzContent: DeptViewComponent,
      nzClosable: false,
      nzComponentParams: {
        id: node.key
      },
      nzOkText: null
    });
  }

  back() {
    this.router.navigate(['app/dept/deptList']);
  }


}

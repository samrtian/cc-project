import { Component, OnInit } from '@angular/core';
import { DataPermissionsApiService } from '@platform/api/data-permissions/data-permissions-api.service';
import { BaseListComponent } from '@platform/view/base/base-list-component';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-data-permissions-list',
  templateUrl: './data-permissions-list.component.html',
  styleUrls: ['./data-permissions-list.component.less'],
  providers: [DataPermissionsApiService]
})
export class DataPermissionsListComponent extends BaseListComponent implements OnInit {

  list: Array<any> = [];


  mapOfCheckedId: { [key: string]: boolean } = {};

  statusOptionList: Array<any> = [];
  dataPermitCategoryOptionList: Array<any> = [];

  constructor(
    private router: Router,
    private dataPermissionsApiService: DataPermissionsApiService,
    private modalService: NzModalService,
    private notificationService: NzNotificationService
  ) {
    super();

    this.queryParams = CommonUtil.queryParamsMergePageParams({
      dataPermissionsCategory: null,
      dataPermissionsName: '',
      status: '-1'
    });
  }

  ngOnInit() {
    this.initPageData();
    this.query();
  }

  initPageData() {
    this.dataPermissionsApiService.initDataPermissionsManageData({}).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.buttonList = result.data.resultData.buttonList;
          this.statusOptionList = result.data.resultData.STATUS_TYPE;
          this.dataPermitCategoryOptionList = result.data.resultData.DATA_PERMIT_CATEGORY;
        }, this.notificationService);
      });
  }

  query(btnQuery: boolean = false) {
    if (btnQuery) {
      this.queryParams = CommonUtil.resetPaginationParams(this.queryParams);
    }
    this.dataPermissionsApiService.queryDataPermissionsByConditionPaging(this.queryParams).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.queryParams = CommonUtil.paginationParamsMergeResultParams(this.queryParams, result.data.resultData);
          this.list = result.data.resultData.rows;
        }, this.notificationService);

      });
  }

  checkAll(value: boolean): void {
    CommonUtil.listCheckAll(this.list, this.mapOfCheckedId, 'dataPermissionsId', value);
  }

  dataPermissionsAdd() {
    this.router.navigate(['/app/dataPermissions/dataPermissionsAdd']);
  }

  dataPermissionsEdit(item: any) {
    this.router.navigate(['/app/dataPermissions/dataPermissionsEdit'], { queryParams: { id: item.dataPermissionsId } });
  }

  dataPermissionsView(item: any) {
    this.router.navigate(['/app/dataPermissions/dataPermissionsView'], { queryParams: { id: item.dataPermissionsId } });
  }

  deleteDataPermissions() {
    const checkList = CommonUtil.getCheckOrUnCheckListIds(this.list, this.mapOfCheckedId, 'dataPermissionsId');
    if (checkList && checkList.length) {
      this.modalService.confirm({
        nzTitle: '提示',
        nzContent: '您确定要删除吗？',
        nzOnOk: () => {
          this.dataPermissionsApiService.deleteDataPermissionsByIds({
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

}

import { Component, OnInit } from '@angular/core';
import { AccessUrlApiService } from '@platform/api/access-url/access-url-api.service';
import { BaseListComponent } from '@platform/view/base/base-list-component';
import { Router } from '@angular/router';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-access-url-list',
  templateUrl: './access-url-list.component.html',
  styleUrls: ['./access-url-list.component.less'],
  providers: [AccessUrlApiService]
})
export class AccessUrlListComponent extends BaseListComponent implements OnInit {

  list: Array<any> = [];


  mapOfCheckedId: { [key: string]: boolean } = {};

  statusOptionList: Array<any> = [];
  busniessMarkOptionList: Array<any> = [];

  constructor(
    private router: Router,
    private accessUrlApiServic: AccessUrlApiService,
    private modalService: NzModalService,
    private notificationService: NzNotificationService
  ) {
    super();

    this.queryParams = CommonUtil.queryParamsMergePageParams({
      busniessMark: null,
      accessUrlName: '',
      status: '-1'
    });
  }

  ngOnInit() {
    this.initPageData();
    this.query();
  }

  initPageData() {
    this.accessUrlApiServic.initAccessUrlManageData({}).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.buttonList = result.data.resultData.buttonList;
          this.statusOptionList = result.data.resultData.STATUS_TYPE;
          this.busniessMarkOptionList = result.data.resultData.BUSNIESS_MARK_TYPE;
        }, this.notificationService);
      });
  }

  query(btnQuery: boolean = false) {
    if (btnQuery) {
      this.queryParams = CommonUtil.resetPaginationParams(this.queryParams);
    }
    this.accessUrlApiServic.queryAccessUrlByConditionPaging(this.queryParams).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.queryParams = CommonUtil.paginationParamsMergeResultParams(this.queryParams, result.data.resultData);
          this.list = result.data.resultData.rows;
        }, this.notificationService);

      });
  }

  checkAll(value: boolean): void {
    CommonUtil.listCheckAll(this.list, this.mapOfCheckedId, 'accessUrlId', value);
  }

  accessUrlAdd() {
    this.router.navigate(['/app/accessUrl/accessUrlAdd']);
  }

  accessUrlEdit(item: any) {
    this.router.navigate(['/app/accessUrl/accessUrlEdit'], { queryParams: { id: item.accessUrlId } });
  }

  accessUrlView(item: any) {
    this.router.navigate(['/app/accessUrl/accessUrlView'], { queryParams: { id: item.accessUrlId } });
  }

  deleteAccessUrl() {
    const checkList = CommonUtil.getCheckOrUnCheckListIds(this.list, this.mapOfCheckedId, 'accessUrlId');
    if (checkList && checkList.length) {
      this.modalService.confirm({
        nzTitle: '提示',
        nzContent: '您确定要删除吗？',
        nzOnOk: () => {
          this.accessUrlApiServic.deleteAccessUrlByIds({
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

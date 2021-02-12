import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@platform/view/base/base-list-component';
import { AccessUrlApiService } from '@platform/api/access-url/access-url-api.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CommonUtil } from '@platform/common/util/common-util';
import { modalListPaginationOpt } from '@platform/common/constant/common-contant';

@Component({
  selector: 'app-access-url-modal',
  templateUrl: './access-url-modal.component.html',
  styleUrls: ['./access-url-modal.component.less'],
  providers: [AccessUrlApiService]
})
export class AccessUrlModalComponent extends BaseListComponent implements OnInit {

  singleSelect = true;
  btnTxt = '导入';

  list: Array<any> = [];

  mapOfCheckedId: { [key: string]: boolean } = {};

  checkList = [];

  constructor(
    private accessUrlApiServic: AccessUrlApiService,
    private modalService: NzModalService,
    private notificationService: NzNotificationService,
    private modal: NzModalRef
  ) {
    super();

    this.queryParams = CommonUtil.queryParamsMergePageParams({
      accessUrlName: '',
      status: '-1'
    }, modalListPaginationOpt);
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
        }, this.notificationService);
      });
  }

  query(btnQuery: boolean = false) {
    if (btnQuery) {
      this.queryParams = CommonUtil.resetPaginationParams(this.queryParams, modalListPaginationOpt);
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

  getCheckObjectList() {
    const list = [];
    this.list.forEach((item: any) => {
      for (const id of this.checkList) {
        if (item.accessUrlId === id) {
          list.push(item);
          break;
        }
      }
    });

    return list;
  }


  ok() {
    this.checkList = CommonUtil.getCheckOrUnCheckListIds(this.list, this.mapOfCheckedId, 'accessUrlId');
    if (this.checkList && this.checkList.length) {
      return true;
    } else {
      this.notificationService.warning('提示', '请勾选数据！');
    }
  }

  selected(item: any) {
    this.modal.destroy(item);
  }



}

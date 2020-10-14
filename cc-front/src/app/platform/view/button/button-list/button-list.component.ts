import { Component, OnInit } from '@angular/core';
import { ButtonApiService } from '@platform/api/button/button-api.service';
import { BaseListComponent } from '@platform/view/base/base-list-component';
import { Router } from '@angular/router';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.less'],
  providers: [ButtonApiService]
})
export class ButtonListComponent extends BaseListComponent implements OnInit {

  list: Array<any> = [];


  mapOfCheckedId: { [key: string]: boolean } = {};

  statusOptionList: Array<any> = [];
  busniessMarkOptionList: Array<any> = [];
  layoutMarkOptionList: Array<any> = [];

  constructor(
    private router: Router,
    private buttonApiService: ButtonApiService,
    private modalService: NzModalService,
    private notificationService: NzNotificationService
  ) {
    super();


    this.queryParams = CommonUtil.queryParamsMergePageParams({
      busniessMark: null,
      buttonName: ''
    });
  }

  ngOnInit() {
    this.initPageData();
    this.query();
  }

  initPageData() {
    this.buttonApiService.initButtonManageData({}).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.buttonList = result.data.resultData.buttonList;
          this.busniessMarkOptionList = result.data.resultData.BUSNIESS_MARK_TYPE;
          this.layoutMarkOptionList = result.data.resultData.BUTTON_LAYOUT_MARK_TYPE;
          this.statusOptionList = result.data.resultData.STATUS_TYPE;
        }, this.notificationService);
      });
  }

  query(btnQuery: boolean = false) {
    if (btnQuery) {
      this.queryParams = CommonUtil.resetPaginationParams(this.queryParams);
    }
    this.buttonApiService.queryButtonByConditionPaging(this.queryParams).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.queryParams = CommonUtil.paginationParamsMergeResultParams(this.queryParams, result.data.resultData);
          this.list = result.data.resultData.rows;
        }, this.notificationService);

      });
  }

  checkAll(value: boolean): void {
    CommonUtil.listCheckAll(this.list, this.mapOfCheckedId, 'buttonId', value);
  }

  buttonAdd() {
    this.router.navigate(['/app/button/buttonAdd']);
  }

  buttonEdit(item: any) {
    this.router.navigate(['/app/button/buttonEdit'], { queryParams: { id: item.buttonId } });
  }

  buttonView(item: any) {
    this.router.navigate(['/app/button/buttonView'], { queryParams: { id: item.buttonId } });
  }

  deleteButton() {
    const checkList = CommonUtil.getCheckOrUnCheckListIds(this.list, this.mapOfCheckedId, 'buttonId');
    if (checkList && checkList.length) {
      this.modalService.confirm({
        nzTitle: '提示',
        nzContent: '您确定要删除吗？',
        nzOnOk: () => {
          this.buttonApiService.deleteButtonByIds({
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

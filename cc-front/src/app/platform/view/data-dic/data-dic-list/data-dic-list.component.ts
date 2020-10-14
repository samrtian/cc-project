import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseListComponent } from '@platform/view/base/base-list-component';
import { Router } from '@angular/router';
import { NzModalService, NzNotificationService, NzModalRef } from 'ng-zorro-antd';
import { DataDicApiService } from '@platform/api/data-dic/data-dic-api.service';
import { CommonUtil } from '@platform/common/util/common-util';
import { LAYOUT_MARK } from '@platform/common/constant/business-tool-btn-contant';
import { DataDicItemViewComponent } from '../data-dic-item-view/data-dic-item-view.component';
import { DataDicTypeViewComponent } from '../data-dic-type-view/data-dic-type-view.component';
import { DataDicItemRoleDistributeComponent } from '../data-dic-item-role-distribute/data-dic-item-role-distribute.component';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-data-dic-list',
  templateUrl: './data-dic-list.component.html',
  styleUrls: ['./data-dic-list.component.less'],
  providers: [DataDicApiService]
})
export class DataDicListComponent extends BaseListComponent implements OnInit, OnDestroy {
  layoutMark = LAYOUT_MARK;

  dicCategory: any;
  list: Array<any> = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  queryStatusOptionList: Array<any> = [];
  statusOptionList: Array<any> = [];
  dicCategoryOptionList: Array<any> = [];

  dataDicItemViewModal: NzModalRef = undefined;
  dataDicTypeViewModal: NzModalRef = undefined;
  dataDicItemRoleDistributeModal: NzModalRef = undefined;

  matchRouters = environment.matchRouters;

  constructor(
    private router: Router,
    private modalService: NzModalService,
    private dataDicApiService: DataDicApiService,
    private notificationService: NzNotificationService
  ) {
    super();
    this.queryParams = CommonUtil.queryParamsMergePageParams({
      dicItemCode: '',
      dicItemName: ''
    });
  }


  ngOnInit() {
    this.initPageData();
  }

  ngOnDestroy() {
    if (!!this.dataDicItemViewModal) {
      this.dataDicItemViewModal.destroy();
    }
    if (!!this.dataDicTypeViewModal) {
      this.dataDicTypeViewModal.destroy();
    }
    if (!!this.dataDicItemRoleDistributeModal) {
      this.dataDicItemRoleDistributeModal.destroy();
    }
  }

  initPageData(): void {
    this.dataDicApiService.initDataDicManageData({}).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.buttonList = result.data.resultData.buttonList;
          this.statusOptionList = result.data.resultData.STATUS_TYPE;
          this.queryStatusOptionList = result.data.resultData.QUERY_STATUS_TYPE;
          this.dicCategoryOptionList = result.data.resultData.DIC_CATEGORY_TYPE;
        }, this.notificationService);
      });
  }

  queryDataDicTypeList(category: any) {
    if (category && category.dataDicTypeList) {
      return;
    }
    this.dataDicApiService.queryDataDicTypeList({
      dicCategory: category.dicItemValue
    }).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          if (result && result.data && result.data.resultData
            && result.data.resultData.length) {
            category.dataDicTypeList = result.data.resultData;
          }
        }, this.notificationService);

      });
  }

  queryDataDicItemList(dataDicType: any) {
    this.dicCategory = dataDicType;
    this.query(true);
  }

  query(btnQuery: boolean = false) {
    if (btnQuery) {
      this.queryParams = CommonUtil.resetPaginationParams(this.queryParams);
    }
    this.queryParams.dicTypeId = this.dicCategory.dicTypeId;
    this.dataDicApiService.queryDataDicItemByIdPaging(this.queryParams).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.queryParams = CommonUtil.paginationParamsMergeResultParams(this.queryParams, result.data.resultData);
          this.list = result.data.resultData.rows;
        }, this.notificationService);

      });
  }

  checkAll(value: boolean): void {
    CommonUtil.listCheckAll(this.list, this.mapOfCheckedId, 'dicItemId', value);
  }

  reloadDataDic() {
    this.modalService.confirm({
      nzTitle: '提示',
      nzContent: '您确定重新载入数据字典吗?',
      nzOnOk: () =>
        this.dataDicApiService.reloadDataDic().subscribe((result: any) => {
          CommonUtil.resultHandle(result, () => {
            this.notificationService.success('提示', result.data.resultMsg);
            this.resetPage();
          }, this.notificationService);
        })
    });
  }

  deleteDataDic() {
    const checkList = [];
    for (const category of this.dicCategoryOptionList) {
      if (category.dataDicTypeList && category.dataDicTypeList.length) {
        for (const dataDicType of category.dataDicTypeList) {
          if (dataDicType.checked) {
            checkList.push(dataDicType.dicTypeId);
          }
        }
      }
    }

    if (checkList.length) {
      this.modalService.confirm({
        nzTitle: '提示',
        nzContent: '您确定要删除吗？',
        nzOnOk: () => {
          this.dataDicApiService.deleteDataDicTypeByIds({
            ids: checkList
          }).subscribe(
            (result: any) => {
              CommonUtil.resultHandle(result, () => {
                this.notificationService.success('提示', result.data.resultMsg);
                this.resetPage();
              }, this.notificationService);
            });
        }
      });
    } else {
      this.notificationService.warning('提示', '请勾选数据！');
    }
  }

  resetPage() {
    this.queryParams = CommonUtil.queryParamsMergePageParams({
      dicItemCode: '',
      dicItemName: ''
    });
    this.dicCategory = undefined;
    this.list = [];
    this.initPageData();
  }


  dataDicItemView(item: any): void {
    this.dataDicItemViewModal = this.modalService.create({
      nzTitle: '数据字典明细查看',
      nzWidth: '60%',
      nzContent: DataDicItemViewComponent,
      nzClosable: false,
      nzComponentParams: {
        id: item.dicItemId
      },
      nzOkText: null
    });
  }

  dataDicTypeView(item: any): void {
    this.dataDicItemViewModal = this.modalService.create({
      nzTitle: '数据字典类别查看',
      nzWidth: '60%',
      nzContent: DataDicTypeViewComponent,
      nzClosable: false,
      nzComponentParams: {
        id: item.dicTypeId
      },
      nzOkText: null
    });
  }

  dataDicItemAdd(): void {
    if (this.dicCategory && this.dicCategory.dicTypeId !== '') {
      this.router.navigate(['/app/dataDic/dataDicItemAdd'], { queryParams: { 'dicTypeId': this.dicCategory.dicTypeId } });
    } else {
      this.notificationService.warning('提示', '请选择一个字典类别！');
    }
  }

  dataDicItemEdit(item: any): void {
    if (this.dicCategory && this.dicCategory.dicTypeId !== '') {
      this.router.navigate(['/app/dataDic/dataDicItemEdit'], {
        queryParams: {
          'dicTypeId': this.dicCategory.dicTypeId,
          'dicItemId': item.dicItemId
        }
      });
    } else {
      this.notificationService.warning('提示', '请选择一个字典类别！');
    }
  }

  deleteDicItem() {
    const checkList = CommonUtil.getCheckOrUnCheckListIds(this.list, this.mapOfCheckedId, 'dicItemId');
    if (checkList && checkList.length) {
      this.modalService.confirm({
        nzTitle: '提示',
        nzContent: '您确定要删除吗？',
        nzOnOk: () => {
          this.dataDicApiService.deleteDataDicItemByIds({
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

  dataDicTypeAdd(): void {
    this.router.navigate(['/app/dataDic/dataDicTypeAdd']);
  }

  dataDicTypeEdit(item: any): void {
    this.router.navigate(['/app/dataDic/dataDicTypeEdit'], { queryParams: { 'id': item.dicTypeId } });
  }

  dicItemRoleDistribute(item: any): void {
    this.dataDicItemRoleDistributeModal = this.modalService.create({
      nzTitle: '数据字典明细分配角色',
      nzWidth: '700px',
      nzContent: DataDicItemRoleDistributeComponent,
      nzClosable: false,
      nzComponentParams: {
        id: item.dicItemId
      },
      nzMaskClosable: false,
      nzOnOk: (componentInstance) => {
        componentInstance.ok();
        return false;
      }
    });
  }
}

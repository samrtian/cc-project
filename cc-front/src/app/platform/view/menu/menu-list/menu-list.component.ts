import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MenuApiService } from '@platform/api/menu/menu-api.service';
import { Router } from '@angular/router';
import { BaseListComponent } from '@platform/view/base/base-list-component';
import { NzTreeNode } from 'ng-zorro-antd/tree';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzTreeComponent } from 'ng-zorro-antd/tree';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { CommonUtil } from '@platform/common/util/common-util';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.less'],
  providers: [MenuApiService]
})
export class MenuListComponent extends BaseListComponent implements OnInit, OnDestroy {

  @ViewChild('menuTree', { static: false }) menuTree: NzTreeComponent;

  list: Array<any> = [];
  searchValue: any;
  menuData: any = null;

  constructor(
    private router: Router,
    private menuApiService: MenuApiService,
    private modalService: NzModalService,
    private notificationService: NzNotificationService
  ) {
    super();
  }

  ngOnInit() {
    this.initPageData();
  }

  ngOnDestroy() {

  }

  initPageData(): void {
    this.menuApiService.initMenuManageData({}).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.buttonList = result.data.resultData.buttonList;
          if (result.data.resultData.menuList && result.data.resultData.menuList.length) {
            result.data.resultData.menuList[0].expanded = true;
            this.list = result.data.resultData.menuList;
          } else {
            this.list = [];
          }
        }, this.notificationService);

      });
  }

  reset() {
    this.menuData = null;
    this.searchValue = null;
    this.initPageData();
  }

  menuView(event: NzFormatEmitEvent) {
    this.menuApiService.queryMenuByMenuId(event.node.key).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.menuData = result.data.resultData.menuBean;
        }, this.notificationService);
      });
  }

  deleteMenu(): void {
    const checkNodeList: NzTreeNode[] = this.menuTree.getCheckedNodeList();

    if (checkNodeList && checkNodeList.length) {
      const checkList = [];
      checkNodeList.forEach((node: NzTreeNode) => {
        checkList.push(node.key);
      });

      this.modalService.confirm({
        nzTitle: '提示',
        nzContent: '您确定要删除吗？',
        nzOnOk: () => {
          this.menuApiService.deleteMenuByIds({
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



  menuAdd(): void {
    this.router.navigate(['/app/menu/menuAdd']);
  }

  menuEdit(): void {
    if (this.list[0].key === this.menuData.menuId) {
      this.notificationService.warning('提示', '不允许编辑！');
      return;
    }
    this.router.navigate(['/app/menu/menuEdit'], { queryParams: { 'id': this.menuData.menuId } });
  }

}

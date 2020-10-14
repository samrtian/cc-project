import { Component, OnInit } from '@angular/core';
import { SysLogApiService } from '@platform/api/log/sys-log-api.service';
import { CommonUtil } from '@platform/common/util/common-util';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { BaseListComponent } from '@platform/view/base/base-list-component';

@Component({
  selector: 'app-sys-log-list',
  templateUrl: './sys-log-list.component.html',
  styleUrls: ['./sys-log-list.component.less'],
  providers: [SysLogApiService]
})
export class SysLogListComponent extends BaseListComponent implements OnInit {

  list: Array<any> = [];

  constructor(
    private sysLogApiService: SysLogApiService,
    private modalService: NzModalService,
    private notificationService: NzNotificationService
  ) {
    super();
  }

  ngOnInit() {
    this.initPageData();
  }

  initPageData() {
    this.sysLogApiService.initSystemLogManageData({}).subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.list = result.data.resultData.systemLogFileList;
        this.buttonList = result.data.resultData.buttonList;
      }, this.notificationService);
    });
  }

  downloadFile(item: any) {
    window.location.href = this.sysLogApiService.downloadSystemLog(item.filePath);
  }

  deleteFile(item: any) {
    this.modalService.confirm({
      nzTitle: '提示',
      nzContent: '您确定要删除吗？',
      nzOnOk: () => {
        this.sysLogApiService.deleteSystemLog({
          filePath: item.filePath
        }).subscribe(
          (result: any) => {
            CommonUtil.resultHandle(result, () => {
              this.notificationService.success('提示', result.data.resultMsg);
              this.initPageData();
            }, this.notificationService);
          });
      }
    });
  }

}

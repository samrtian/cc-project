import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import { SysInfoApiService } from '@platform/api/sys-info/sys-info-api.service';
import { CommonUtil } from '@platform/common/util/common-util';
import { NzNotificationService } from 'ng-zorro-antd';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-sys-info',
  templateUrl: './sys-info.component.html',
  styleUrls: ['./sys-info.component.less'],
  providers: [SysInfoApiService]
})
export class SysInfoComponent extends BaseComponent implements OnInit {

  sysInfoData: any;

  matchRouters = environment.matchRouters;

  constructor(
    private sysInfoApiService: SysInfoApiService,
    private notificationService: NzNotificationService
  ) {
    super();
  }

  ngOnInit() {
    this.initPageData();
  }

  initPageData(): void {
    this.sysInfoApiService.initSysInfoData().subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.sysInfoData = result.data.resultData;
      }, this.notificationService);
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { MainModel } from '@platform/common/model/main-model';
import { SysApiService } from '@platform/api/sys/sys-api.service';
import { PlatformStorageService } from '@platform/shared/platform-storage/platform-storage.service';
import { Router } from '@angular/router';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-desk-layout',
  template: ''
})
export class DeskLayoutComponent implements OnInit {

  //用户数据
  mainData: MainModel = {
    userData: {},
    menuData: []
  };


  constructor(
    private notificationService: NzNotificationService,
    private sysApiService: SysApiService,
    private platformStorageService: PlatformStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initMain();
  }

  initMain() {
    this.sysApiService.initMainData().subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.mainData.userData = result.data.resultData.userData;
        if (result.data.resultData.menuData && result.data.resultData.menuData[0] && result.data.resultData.menuData[0].children) {
          this.mainData.menuData = result.data.resultData.menuData[0].children;
        }
        this.platformStorageService.setSessionUserInfo(result.data.resultData.userData);
      }, this.notificationService);

    });
  }

  getRouter() {
    return this.router;
  }

}

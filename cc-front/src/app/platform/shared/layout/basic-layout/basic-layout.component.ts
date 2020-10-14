import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

import { PlatformStorageService } from '../../platform-storage/platform-storage.service';
import { SysApiService } from '@platform/api/sys/sys-api.service';

import { CommonUtil } from '@platform/common/util/common-util';
import { MainModel } from '@platform/common/model/main-model';

@Component({
  selector: 'app-basic-layout',
  template: ''
})
export class BasicLayoutComponent implements OnInit {

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

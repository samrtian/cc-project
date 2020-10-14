import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { environment } from '@environments/environment';

import { CommonUtil } from '@platform/common/util/common-util';
import { SysApiService } from '@platform/api/sys/sys-api.service';
import { SecurityUtil } from '@platform/common/util/security-util';
import { PlatformStorageService } from '@platform/shared/platform-storage/platform-storage.service';


@Component({
  selector: 'app-login',
  template: ''
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private notificationService: NzNotificationService,
    private sysApiService: SysApiService,
    private platformStorageService: PlatformStorageService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])),
      password: new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]))
    });
  }

  /**
   *  登录
   */
  login() {
    if (this.loginForm.valid) {
      this.sysApiService.login(
        SecurityUtil.encrypt(JSON.stringify(this.loginForm.value), environment.loginAesKey)
      ).subscribe(
        (result: any) => {
          CommonUtil.resultHandle(result, () => {
            this.platformStorageService.setSecurityKey(result.data.resultData.key);
            this.platformStorageService.setSessionUser({
              userId: result.data.resultData.userId,
              userName: result.data.resultData.userName,
              realName: result.data.resultData.realName,
              userCode: result.data.resultData.userCode
            });
            this.router.navigate(['/app/home']);
            setTimeout(() => {
              this.notificationService.success('提示', result.data.resultMsg);
            }, 500);
          }, this.notificationService);

        });
    } else {
      CommonUtil.formUpdateValueAndValidity(this.loginForm);
    }
  }
}

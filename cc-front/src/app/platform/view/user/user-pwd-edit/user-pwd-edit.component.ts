import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { customValidators } from '@platform/shared/custom-validator/custom-validator';
import { UserApiService } from '@platform/api/user/user-api.service';
import { CommonUtil } from '@platform/common/util/common-util';


import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-user-pwd-edit',
  templateUrl: './user-pwd-edit.component.html',
  styleUrls: ['./user-pwd-edit.component.less'],
  providers: [UserApiService]
})
export class UserPwdEditComponent implements OnInit {
  id: string = undefined;
  updatePwdForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modal: NzModalRef,
    private userApiService: UserApiService,
    private notificationService: NzNotificationService
  ) { }

  /**
   * 初始化
   */
  ngOnInit() {
    //表单
    const passwordFc = new FormControl(null, Validators.compose([Validators.required, customValidators.password]));
    const confirmPasswordFc = new FormControl(null, customValidators.equalTo(passwordFc));

    this.updatePwdForm = this.formBuilder.group({
      password: passwordFc,
      confPassword: confirmPasswordFc
    });
  }

  /**
   * 确定
   */
  ok() {
    if (this.updatePwdForm.valid) {
      const params = this.updatePwdForm.value;
      params.userId = this.id;
      this.userApiService.updateUserPasswordById(params).subscribe((result: any) => {
        
        CommonUtil.resultHandle(result, () => {
          this.notificationService.success('提示', result.data.resultMsg);
          this.modal.close();
        }, this.notificationService);

      });
    } else {
      CommonUtil.formUpdateValueAndValidity(this.updatePwdForm);
    }
  }
}

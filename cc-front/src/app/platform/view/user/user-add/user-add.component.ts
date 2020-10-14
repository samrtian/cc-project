import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

import { UserApiService } from '@platform/api/user/user-api.service';
import { CommonUtil } from '@platform/common/util/common-util';
import { customValidators } from '@platform/shared/custom-validator/custom-validator';
import { BaseSaveComponent } from '@platform/view/base/base-save-component';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.less'],
  providers: [
    UserApiService
  ]
})
export class UserAddComponent extends BaseSaveComponent implements OnInit {
  sexOptionList: Array<any> = [];
  smsSwitchOptionList: Array<any> = [];
  emailSwitchOptionList: Array<any> = [];
  statusOptionList: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userApiService: UserApiService,
    private notificationService: NzNotificationService
  ) {
    super();

    CommonUtil.pageQueryParams(this.activatedRoute, (params: any) => {
      if (!!params.id) {
        this.id = params.id;
      }
    });
  }

  ngOnInit() {
    this.initFormGroup();
    this.initPageData();
  }

  initFormGroup() {
    const userCodeFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)]));
    const userNameFc = new FormControl('', Validators.compose([Validators.required]));
    const realNameFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(8)]));
    const sexFc = new FormControl(null, Validators.compose([Validators.required]));
    const idCardFc = new FormControl('', Validators.compose([Validators.required, customValidators.idCard]));
    const emailFc = new FormControl('', Validators.compose([Validators.required, customValidators.email]));
    const telephoneFc = new FormControl('', Validators.compose([Validators.required, customValidators.telMobile]));
    const emailSwitchFc = new FormControl(null, Validators.compose([Validators.required]));
    const smsSwitchFc = new FormControl(null, Validators.compose([Validators.required]));
    const statusFc = new FormControl(null, Validators.compose([Validators.required]));
    const userDescribeFc = new FormControl('', Validators.compose([Validators.minLength(0), Validators.maxLength(256)]));

    this.saveForm = this.formBuilder.group({
      userCode: userCodeFc,
      userName: userNameFc,
      realName: realNameFc,
      sex: sexFc,
      idCard: idCardFc,
      email: emailFc,
      telephone: telephoneFc,
      emailSwitch: emailSwitchFc,
      smsSwitch: smsSwitchFc,
      status: statusFc,
      userDescribe: userDescribeFc
    });
  }


  initPageData(): void {
    this.userApiService.initUserAddData({
      userId: this.id
    }).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.sexOptionList = result.data.resultData.SEX_TYPE;
          this.smsSwitchOptionList = result.data.resultData.SMS_SWITCH_TYPE;
          this.emailSwitchOptionList = result.data.resultData.EMAIL_SWITCH_TYPE;
          this.statusOptionList = result.data.resultData.STATUS_TYPE;
          CommonUtil.loadFormData(result.data.resultData.userData, this.saveForm);
        }, this.notificationService);
      }
    );
  }


  saveFormHandle(isBack = false) {
    if (this.saveForm.valid) {
      const params = this.saveForm.value;
      params.userId = this.id;
      
      CommonUtil.formSaveHandle(this.userApiService.saveUser(params),
        this.saveForm,
        isBack,
        () => {
          this.back();
        },
        this.id,
        this.notificationService
      );
    } else {
      CommonUtil.formUpdateValueAndValidity(this.saveForm);
    }
  }

  back() {
    this.router.navigate(['app/user/userList']);
  }

}

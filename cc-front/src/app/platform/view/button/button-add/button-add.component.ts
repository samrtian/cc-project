import { Component, OnInit } from '@angular/core';
import { ButtonApiService } from '@platform/api/button/button-api.service';
import { BaseSaveComponent } from '@platform/view/base/base-save-component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CommonUtil } from '@platform/common/util/common-util';
import { customValidators } from '@platform/shared/custom-validator/custom-validator';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.less'],
  providers: [ButtonApiService]
})
export class ButtonAddComponent extends BaseSaveComponent implements OnInit {

  statusOptionList: Array<any> = [];
  busniessMarkOptionList: Array<any> = [];
  layoutMarkOptionList: Array<any> = [];
  btnClsOptionList: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private buttonApiService: ButtonApiService,
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
    const buttonNameFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(25)]));
    const buttonCodeFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)]));
    const functionNameFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(60)]));
    const busniessMarkFc = new FormControl(null, Validators.compose([Validators.required]));
    const layoutMarkFc = new FormControl(null, Validators.compose([Validators.required]));
    const iconClsFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(32)]));
    const btnClsFc = new FormControl(null, Validators.compose([Validators.required]));
    const sortNumFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.min(1), Validators.max(99)]));
    const statusFc = new FormControl(null, Validators.compose([Validators.required]));
    const buttonDescribeFc = new FormControl('', Validators.compose([Validators.minLength(0), Validators.maxLength(100)]));
    const btnExpFc = new FormControl('', Validators.compose([Validators.minLength(0), Validators.maxLength(256)]));

    this.saveForm = this.formBuilder.group({
      buttonName: buttonNameFc,
      buttonCode: buttonCodeFc,
      functionName: functionNameFc,
      busniessMark: busniessMarkFc,
      layoutMark: layoutMarkFc,
      iconCls: iconClsFc,
      btnCls: btnClsFc,
      buttonDescribe: buttonDescribeFc,
      sortNum: sortNumFc,
      status: statusFc,
      btnExp: btnExpFc
    });
  }

  initPageData() {
    this.buttonApiService.initButtonAddData({
      buttonId: this.id
    }).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.busniessMarkOptionList = result.data.resultData.BUSNIESS_MARK_TYPE;
          this.statusOptionList = result.data.resultData.STATUS_TYPE;
          this.layoutMarkOptionList = result.data.resultData.BUTTON_LAYOUT_MARK_TYPE;
          this.btnClsOptionList = result.data.resultData.BUTTON_CLS_TYPE;
          CommonUtil.loadFormData(result.data.resultData.buttonData, this.saveForm);
        }, this.notificationService);
      }
    );
  }

  saveFormHandle(isBack = false) {
    if (this.saveForm.valid) {
      const params = this.saveForm.value;
      params.buttonId = this.id;

      CommonUtil.formSaveHandle(this.buttonApiService.saveButton(params),
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
    this.router.navigate(['app/button/buttonList']);
  }

}

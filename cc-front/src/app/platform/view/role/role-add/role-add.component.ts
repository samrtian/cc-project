import { Component, OnInit } from '@angular/core';
import { BaseSaveComponent } from '@platform/view/base/base-save-component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleApiService } from '@platform/api/role/role-api.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.less'],
  providers: [
    RoleApiService
  ]
})
export class RoleAddComponent extends BaseSaveComponent implements OnInit {
  statusOptionList: Array<any> = [];
  isSuperOptionList: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private roleApiService: RoleApiService,
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
    const roleCodeFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)]));
    const roleNameFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(25)]));
    const roleDescribeFc = new FormControl('', Validators.compose([Validators.minLength(0), Validators.maxLength(256)]));
    const isSuperFc = new FormControl(null, Validators.compose([Validators.required]));
    const statusFc = new FormControl(null, Validators.compose([Validators.required]));


    this.saveForm = this.formBuilder.group({
      roleCode: roleCodeFc,
      roleName: roleNameFc,
      roleDescribe: roleDescribeFc,
      isSuper: isSuperFc,
      status: statusFc
    });
  }


  initPageData(): void {
    this.roleApiService.initRoleAddData({
      roleId: this.id
    }).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.isSuperOptionList = result.data.resultData.IS_SUPER_TYPE;
          this.statusOptionList = result.data.resultData.STATUS_TYPE;
          CommonUtil.loadFormData(result.data.resultData.roleData, this.saveForm);
        }, this.notificationService);
      }
    );
  }


  saveFormHandle(isBack = false) {
    if (this.saveForm.valid) {
      const params = this.saveForm.value;
      params.roleId = this.id;

      CommonUtil.formSaveHandle(this.roleApiService.saveRole(params),
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
    this.router.navigate(['app/role/roleList']);
  }

}

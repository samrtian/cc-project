import { Component, OnInit } from '@angular/core';
import { BaseSaveComponent } from '@platform/view/base/base-save-component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AccessUrlApiService } from '@platform/api/access-url/access-url-api.service';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-access-url-add',
  templateUrl: './access-url-add.component.html',
  styleUrls: ['./access-url-add.component.less'],
  providers: [AccessUrlApiService]
})
export class AccessUrlAddComponent extends BaseSaveComponent implements OnInit {

  statusOptionList: Array<any> = [];
  busniessMarkOptionList: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private accessUrlApiService: AccessUrlApiService,
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
    const accessUrlFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(300)]));
    const accessUrlNameFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)]));
    const busniessMarkFc = new FormControl(null, Validators.compose([Validators.required]));
    const statusFc = new FormControl(null, Validators.compose([Validators.required]));

    this.saveForm = this.formBuilder.group({
      accessUrl: accessUrlFc,
      accessUrlName: accessUrlNameFc,
      busniessMark: busniessMarkFc,
      status: statusFc
    });
  }

  initPageData() {
    this.accessUrlApiService.initAccessUrlAddData({
      accessUrlId: this.id
    }).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.busniessMarkOptionList = result.data.resultData.BUSNIESS_MARK_TYPE;
          this.statusOptionList = result.data.resultData.STATUS_TYPE;
          CommonUtil.loadFormData(result.data.resultData.accessUrlData, this.saveForm);
        }, this.notificationService);
      }
    );
  }

  saveFormHandle(isBack = false) {
    if (this.saveForm.valid) {
      const params = this.saveForm.value;
      params.accessUrlId = this.id;

      CommonUtil.formSaveHandle(this.accessUrlApiService.saveAccessUrl(params),
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
    this.router.navigate(['app/accessUrl/accessUrlList']);
  }

}

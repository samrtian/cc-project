import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataPermissionsApiService } from '@platform/api/data-permissions/data-permissions-api.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CommonUtil } from '@platform/common/util/common-util';
import { BaseSaveComponent } from '@platform/view/base/base-save-component';
import { AccessUrlModalComponent } from '@platform/shared/access-url-modal/access-url-modal.component';

@Component({
  selector: 'app-data-permissions-add',
  templateUrl: './data-permissions-add.component.html',
  styleUrls: ['./data-permissions-add.component.less'],
  providers: [DataPermissionsApiService]
})
export class DataPermissionsAddComponent extends BaseSaveComponent implements OnInit, OnDestroy {

  statusOptionList: Array<any> = [];
  dataPermitCategoryOptionList: Array<any> = [];
  dataPermitProcessorOptionList: Array<any> = [];

  accessUrlModal: NzModalRef = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataPermissionsApiService: DataPermissionsApiService,
    private notificationService: NzNotificationService,
    private modalService: NzModalService
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

  ngOnDestroy() {
    if (!!this.accessUrlModal) {
      this.accessUrlModal.destroy();
    }
  }

  initFormGroup() {
    const dataPermissionsNameFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(64)]));
    const accessUrlFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(300)]));
    const sqlIdFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(255)]));
    const processorPriorityFc = new FormControl('', Validators.compose([Validators.required, Validators.min(1), Validators.max(99)]));
    const primaryProcessorFc = new FormControl(null, Validators.compose([Validators.required]));
    const secondaryProcessorFc = new FormControl(null);
    const matchColumnFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(128)]));
    const dataPermissionsCategoryFc = new FormControl(null, Validators.compose([Validators.required]));
    const statusFc = new FormControl(null, Validators.compose([Validators.required]));
    const paramKeyFc = new FormControl(null, Validators.compose([Validators.minLength(0), Validators.maxLength(128)]));

    this.saveForm = this.formBuilder.group({
      dataPermissionsName: dataPermissionsNameFc,
      accessUrl: accessUrlFc,
      sqlId: sqlIdFc,
      processorPriority: processorPriorityFc,
      primaryProcessor: primaryProcessorFc,
      secondaryProcessor: secondaryProcessorFc,
      matchColumn: matchColumnFc,
      dataPermissionsCategory: dataPermissionsCategoryFc,
      status: statusFc,
      paramKey: paramKeyFc
    });
  }

  initPageData() {
    this.dataPermissionsApiService.initDataPermissionsAddData({
      dataPermissionsId: this.id
    }).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.statusOptionList = result.data.resultData.STATUS_TYPE;
          this.dataPermitCategoryOptionList = result.data.resultData.DATA_PERMIT_CATEGORY;
          this.dataPermitProcessorOptionList = result.data.resultData.DATA_PERMIT_PROCESSOR;
          CommonUtil.loadFormData(result.data.resultData.dataPermissionsData, this.saveForm);
        }, this.notificationService);
      }
    );
  }

  saveFormHandle(isBack = false) {
    if (this.saveForm.valid) {
      const params = this.saveForm.value;
      params.dataPermissionsId = this.id;

      CommonUtil.formSaveHandle(this.dataPermissionsApiService.saveDataPermissions(params),
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
    this.router.navigate(['app/dataPermissions/dataPermissionsList']);
  }

  openAccessUrlModal() {
    this.accessUrlModal = this.modalService.create({
      nzTitle: '选择访问地址',
      nzWidth: '60%',
      nzContent: AccessUrlModalComponent,
      nzComponentParams: {},
      nzMaskClosable: false,
      nzOkText: null
    });

    this.accessUrlModal.afterClose.subscribe((result: any) => {
      if (result) {
        this.saveForm.patchValue({
          accessUrl: result.accessUrl
        });
      }
    });
  }

}

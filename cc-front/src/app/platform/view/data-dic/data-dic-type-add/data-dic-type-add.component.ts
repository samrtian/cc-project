import { Component, OnInit } from '@angular/core';
import { BaseSaveComponent } from '@platform/view/base/base-save-component';
import { DataDicApiService } from '@platform/api/data-dic/data-dic-api.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-data-dic-type-add',
  templateUrl: './data-dic-type-add.component.html',
  styleUrls: ['./data-dic-type-add.component.less'],
  providers: [DataDicApiService]
})
export class DataDicTypeAddComponent extends BaseSaveComponent implements OnInit {
  dicCategoryOptionList: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataDicApiService: DataDicApiService,
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
    const dicTypeCodeFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(64)]));
    const dicTypeNameFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(32)]));
    const dicCategoryFc = new FormControl(null, Validators.compose([Validators.required]));
    const iconClsFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(32)]));

    this.saveForm = this.formBuilder.group({
      dicTypeCode: dicTypeCodeFc,
      dicTypeName: dicTypeNameFc,
      dicCategory: dicCategoryFc,
      iconCls: iconClsFc
    });
  }


  initPageData(): void {
    this.dataDicApiService.initDataDicTypeAddData({
      dicTypeId: this.id
    }).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.dicCategoryOptionList = result.data.resultData.DIC_CATEGORY_TYPE;
          CommonUtil.loadFormData(result.data.resultData.dataDicTypeData, this.saveForm);
        }, this.notificationService);
      }
    );
  }


  saveFormHandle(isBack = false) {
    if (this.saveForm.valid) {
      const params = this.saveForm.value;
      params.dicTypeId = this.id;
      CommonUtil.formSaveHandle(this.dataDicApiService.saveDataDicType(params),
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
    this.router.navigate(['app/dataDic/dataDicList']);
  }
}

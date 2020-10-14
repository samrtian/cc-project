import { Component, OnInit } from '@angular/core';
import { BaseSaveComponent } from '@platform/view/base/base-save-component';
import { CommonUtil } from '@platform/common/util/common-util';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataDicApiService } from '@platform/api/data-dic/data-dic-api.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-data-dic-item-add',
  templateUrl: './data-dic-item-add.component.html',
  styleUrls: ['./data-dic-item-add.component.less'],
  providers: [DataDicApiService]
})
export class DataDicItemAddComponent extends BaseSaveComponent implements OnInit {

  dicTypeId: string = undefined;

  dicItemOptionList: Array<any> = [];
  statusOptionList: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataDicApiService: DataDicApiService,
    private notificationService: NzNotificationService
  ) {
    super();

    CommonUtil.pageQueryParams(this.activatedRoute, (params: any) => {
      if (!!params.dicItemId) {
        this.id = params.dicItemId;
      }

      if (!!params.dicTypeId) {
        this.dicTypeId = params.dicTypeId;
      }
    });
  }

  ngOnInit() {
    this.initFormGroup();
    this.initPageData();
  }

  initFormGroup() {
    const dicItemCodeFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(64)]));
    const dicItemNameFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(32)]));
    const dicItemParentIdFc = new FormControl(-1);
    const dicItemValueFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(256)]));
    const spareValueFc = new FormControl('', Validators.compose([Validators.minLength(0), Validators.maxLength(256)]));
    const defaultValueFc = new FormControl('', Validators.compose([Validators.minLength(0), Validators.maxLength(256)]));
    const dicItemDescFc = new FormControl('', Validators.compose([Validators.minLength(0), Validators.maxLength(256)]));
    const iconClsFc = new FormControl('', Validators.compose([Validators.minLength(1), Validators.maxLength(32)]));
    const sortNumFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.min(1), Validators.max(999)]));
    const statusFc = new FormControl(null, Validators.compose([Validators.required]));

    this.saveForm = this.formBuilder.group({
      dicItemCode: dicItemCodeFc,
      dicItemName: dicItemNameFc,
      dicItemParentId: dicItemParentIdFc,
      dicItemValue: dicItemValueFc,
      spareValue: spareValueFc,
      defaultValue: defaultValueFc,
      dicItemDesc: dicItemDescFc,
      iconCls: iconClsFc,
      sortNum: sortNumFc,
      status: statusFc
    });
  }


  initPageData(): void {
    this.dataDicApiService.initDataDataDicItemAddData({
      dicTypeId: this.dicTypeId,
      dicItemId: this.id
    }).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.dicItemOptionList = result.data.resultData.dataDicItemList;
          this.statusOptionList = result.data.resultData.STATUS_TYPE;
          CommonUtil.loadFormData(result.data.resultData.dataDicItemData, this.saveForm);
        }, this.notificationService);
      }
    );
  }


  saveFormHandle(isBack = false) {
    if (this.saveForm.valid) {
      const params = this.saveForm.value;
      params.dicTypeId = this.dicTypeId;
      params.dicItemId = this.id;

      if (null === params.dicItemParentId || 'null' === params.dicItemParentId) {
        params.dicItemParentId = -1;
      }

      if (params.dicItemId === params.dicItemParentId) {
        this.notificationService.warning('提示', '上一级不可以是自己!');
        return;
      }

      CommonUtil.formSaveHandle(this.dataDicApiService.saveDataDicItem(params),
        this.saveForm,
        isBack,
        () => {
          this.back();
        },
        this.id,
        this.notificationService,
        (result: any) => {
          if (result && result.data && result.data.resultData) {
              this.dicItemOptionList = result.data.resultData;
          }
        }
      );
    } else {
      CommonUtil.formUpdateValueAndValidity(this.saveForm);
    }
  }

  back() {
    this.router.navigate(['app/dataDic/dataDicList']);
  }

  selectParentDicItem(key: any) {
    if (key === this.id) {
      this.notificationService.warning('提示', '上一级不能是自己！');
      this.saveForm.patchValue({
        dicItemParentId: null
      });
    }
  }
}

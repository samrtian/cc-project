import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseSaveComponent } from '@platform/view/base/base-save-component';
import { DeptApiService } from '@platform/api/dept/dept-api.service';
import { NzNotificationService, NzTreeSelectComponent } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonUtil } from '@platform/common/util/common-util';
import { customValidators } from '@platform/shared/custom-validator/custom-validator';

@Component({
  selector: 'app-dept-add',
  templateUrl: './dept-add.component.html',
  styleUrls: ['./dept-add.component.less'],
  providers: [DeptApiService]
})
export class DeptAddComponent extends BaseSaveComponent implements OnInit {
  @ViewChild('parentDeptTreeSelect', { static: false }) parentDeptTreeSelect: NzTreeSelectComponent;

  deptOptionList: Array<any> = [];
  deptLeaderOptionList: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private deptApiService: DeptApiService,
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
    const deptCodeFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)]));
    const deptNameFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)]));
    const deptSortNameFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(25)]));
    const deptLevelFc = new FormControl('');
    const deptDescriptFc = new FormControl('', Validators.compose([Validators.minLength(0), Validators.maxLength(500)]));
    const parentDeptIdFc = new FormControl('', Validators.compose([Validators.required]));
    const deptLeaderIdFc = new FormControl(null, Validators.compose([Validators.required]));
    const deptTelFc = new FormControl('', Validators.compose([customValidators.telMobile]));
    const deptAddrFc = new FormControl('', Validators.compose([Validators.minLength(0), Validators.maxLength(200)]));
    const iconClsFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(32)]));

    this.saveForm = this.formBuilder.group({
      deptCode: deptCodeFc,
      deptName: deptNameFc,
      deptSortName: deptSortNameFc,
      deptLevel: deptLevelFc,
      deptDescript: deptDescriptFc,
      parentDeptId: parentDeptIdFc,
      deptLeaderId: deptLeaderIdFc,
      deptTel: deptTelFc,
      deptAddr: deptAddrFc,
      iconCls: iconClsFc
    });
  }


  initPageData(): void {
    this.deptApiService.initDeptAddData({
      deptId: this.id
    }).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.deptOptionList = result.data.resultData.deptList;
          this.deptLeaderOptionList = result.data.resultData.userList;
          CommonUtil.loadFormData(result.data.resultData.deptData, this.saveForm);
        }, this.notificationService);
      }
    );
  }


  saveFormHandle(isBack = false) {
    if (this.saveForm.valid) {
      const params = this.saveForm.value;
      params.deptId = this.id;

      CommonUtil.formSaveHandle(this.deptApiService.saveDept(params),
        this.saveForm,
        isBack,
        () => {
          this.back();
        },
        this.id,
        this.notificationService,
        (result: any) => {
          if (result && result.data && result.data.resultData) {
              this.deptOptionList = result.data.resultData;
          }
        }
      );
    } else {
      CommonUtil.formUpdateValueAndValidity(this.saveForm);
    }
  }

  back() {
    this.router.navigate(['app/dept/deptList']);
  }

  selectParentDept(key: any) {
    if (!!key) {
      const node = this.parentDeptTreeSelect.getTreeNodeByKey(key);
      if (node && node.origin && node.origin.attr3) {
        this.saveForm.patchValue({
          deptLevel: (parseInt(node.origin.attr3, 0) + 1)
        });
      }
    } else {
      this.saveForm.patchValue({
        deptLevel: 1
      });
    }

    if (key === this.id) {
      this.notificationService.warning('提示', '上一级不能是自己！');
      this.saveForm.patchValue({
        parentDeptId: null
      });
    }
  }
}

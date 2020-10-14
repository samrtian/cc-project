import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuApiService } from '@platform/api/menu/menu-api.service';
import { BaseSaveComponent } from '@platform/view/base/base-save-component';
import { NzTreeSelectComponent, NzNotificationService } from 'ng-zorro-antd';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.less'],
  providers: [MenuApiService]
})
export class MenuAddComponent extends BaseSaveComponent implements OnInit {
  @ViewChild('parentMenuTreeSelect', { static: false }) parentMenuTreeSelect: NzTreeSelectComponent;

  menuOptionList: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private menuApiService: MenuApiService,
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
    const menuCodeFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)]));
    const menuNameFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)]));
    const accessUrlFc = new FormControl('', Validators.compose([Validators.minLength(0), Validators.maxLength(300)]));
    const parentMenuIdFc = new FormControl('', Validators.compose([Validators.required]));
    const sortNumFc = new FormControl('', Validators.compose([Validators.required]));
    const menuLevelFc = new FormControl('');
    const iconClsFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(32)]));

    this.saveForm = this.formBuilder.group({
      menuCode: menuCodeFc,
      menuName: menuNameFc,
      iconCls: iconClsFc,
      accessUrl: accessUrlFc,
      parentMenuId: parentMenuIdFc,
      sortNum: sortNumFc,
      menuLevel: menuLevelFc
    });
  }


  initPageData(): void {
    this.menuApiService.initMenuAddData({
      menuId: this.id
    }).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.menuOptionList = result.data.resultData.menuList;
          CommonUtil.loadFormData(result.data.resultData.menuData, this.saveForm);
        }, this.notificationService);
      }
    );
  }


  saveFormHandle(isBack = false) {
    if (this.saveForm.valid) {
      const params = this.saveForm.value;
      params.menuId = this.id;

      CommonUtil.formSaveHandle(this.menuApiService.saveMenu(params),
        this.saveForm,
        isBack,
        () => {
          this.back();
        },
        this.id,
        this.notificationService,
        (result: any) => {
          if (result && result.data && result.data.resultData) {
              this.menuOptionList = result.data.resultData;
          }
        }
      );
    } else {
      CommonUtil.formUpdateValueAndValidity(this.saveForm);
    }
  }

  back() {
    this.router.navigate(['app/menu/menuList']);
  }

  selectParentMenu(key: any) {
    if (!!key) {
      const node = this.parentMenuTreeSelect.getTreeNodeByKey(key);
      if (node && node.origin && node.origin.attr3) {
        this.saveForm.patchValue({
          menuLevel: (parseInt(node.origin.attr3, 0) + 1)
        });
      }
    } else {
      this.saveForm.patchValue({
        menuLevel: 1
      });
    }

    if (key === this.id) {
      this.notificationService.warning('提示', '上一级不能是自己！');
      this.saveForm.patchValue({
        parentMenuId: null
      });
    }
  }
}

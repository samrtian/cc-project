import { Component, OnInit, Input, TemplateRef, OnChanges, SimpleChanges, ViewChild, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService, NzNotificationService, NzModalRef } from 'ng-zorro-antd';

import { environment } from '@environments/environment';
import { TreeMenuService } from '../../../tree-menu/tree-menu.service';
import { SysApiService } from '@platform/api/sys/sys-api.service';
import { CommonUtil } from '@platform/common/util/common-util';
import { PlatformStorageService } from '../../../platform-storage/platform-storage.service';
import { UserApiService } from '@platform/api/user/user-api.service';



import { UserModel } from '@platform/common/model/user-model';
import { ImgCropperModalComponent } from '@platform/shared/img-cropper-modal/img-cropper-modal.component';
import { UpdatePwdComponent } from '@platform/shared/update-pwd/update-pwd.component';
import { LayoutHeaderMenuItemModel, LayoutHeaderBtnModel } from '@platform/common/model/layout-header-model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [UserApiService]
})
export class HeaderComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChild('userAvatarImgCropper', { static: true }) userHeaderImgCropper: ImgCropperModalComponent;

  @Input()
  sysLogo: any;

  @Input()
  userData: UserModel;

  @Input()
  rightBtnList: LayoutHeaderBtnModel[];

  @Input()
  leftBtnList: LayoutHeaderBtnModel[];

  @Input()
  dropdownMenuItemList: LayoutHeaderMenuItemModel[];

  @Output() switchSiderChange = new EventEmitter<boolean>();
  @Output() btnHandler = new EventEmitter<string>();
  @Output() dropdownMenuItemHandler = new EventEmitter<string>();

  showHeaderlogo = true;

  menuDropdownVisible = false;

  userAvatarCropperVisible = false;

  originalUserAvatar = this.userApiService.previewUserAvatar();


  updatePwdModal: NzModalRef = undefined;


  constructor(
    private treeMenuService: TreeMenuService,
    private modalService: NzModalService,
    private sysApiService: SysApiService,
    private platformStorageService: PlatformStorageService,
    private notificationService: NzNotificationService,
    private router: Router,
    private userApiService: UserApiService
  ) { }

  ngOnInit() {
    this.treeMenuService.getSubject().subscribe((node) => {
      this.menuDropdownVisible = false;
    });

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy() {
    if (!!this.updatePwdModal) {
      this.updatePwdModal.destroy();
    }
  }

  exitSys() {
    this.modalService.confirm({
      nzTitle: '提示',
      nzContent: '您确定要退出系统吗？',
      nzOnOk: () => {
        this.sysApiService.exitLogin().subscribe((result) => {

          CommonUtil.resultHandle(result, () => {
            this.platformStorageService.removeSecurityKey();
            this.platformStorageService.removeSessionUser();
            this.platformStorageService.removeSessionUserInfo();
            this.router.navigate([environment.loginRouter]);
            setTimeout(() => {
              this.notificationService.success('提示', result.data.resultMsg);
            }, 500);
          }, this.notificationService);


        });
      }
    });
  }


  toHome() {
    this.router.navigate([environment.homeRouter]);
  }

  updatePwd() {
    this.updatePwdModal = this.modalService.create({
      nzTitle: '修改密码',
      nzWidth: '430px',
      nzContent: UpdatePwdComponent,
      nzMaskClosable: false,
      nzOnOk: (componentInstance) => {
        componentInstance.ok();
        return false;
      }
    });
  }

  userAvatarUpload(data: any) {
    this.userApiService.uploadUserAvatarImg(data.image).subscribe((result) => {
      CommonUtil.resultHandle(result, () => {
        this.userHeaderImgCropper.close();
        this.notificationService.success('提示', '上传头像成功，刷新页面后生效！');
      }, this.notificationService);

    });
  }

  switchSider() {
    this.showHeaderlogo = !this.showHeaderlogo;
    this.switchSiderChange.emit(this.showHeaderlogo);
  }

  dropdownItemHandler(act: string) {
    this.dropdownMenuItemHandler.emit(act);
  }

  buttonHandler(act: string) {
    this.btnHandler.emit(act);
  }
}

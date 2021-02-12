import { Component, OnInit, Input, ViewChild, OnChanges, OnDestroy, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { ImgCropperModalComponent } from '@platform/shared/img-cropper-modal/img-cropper-modal.component';
import { UserModel } from '@platform/common/model/user-model';
import { LayoutLeftToolbarBtnModel, LayoutLeftToolbarMenuItemModel } from '@platform/common/model/layout-left-toolbar-model';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TreeMenuService } from '@platform/shared/tree-menu/tree-menu.service';
import { SysApiService } from '@platform/api/sys/sys-api.service';
import { PlatformStorageService } from '@platform/shared/platform-storage/platform-storage.service';
import { UserApiService } from '@platform/api/user/user-api.service';
import { Router } from '@angular/router';
import { CommonUtil } from '@platform/common/util/common-util';
import { environment } from '@environments/environment';
import { UpdatePwdComponent } from '@platform/shared/update-pwd/update-pwd.component';

@Component({
  selector: 'app-left-toolbar',
  templateUrl: './left-toolbar.component.html',
  styleUrls: ['./left-toolbar.component.less']
})
export class LeftToolbarComponent implements OnInit, OnChanges, OnDestroy {


  @ViewChild('userAvatarImgCropper', { static: true }) userHeaderImgCropper: ImgCropperModalComponent;

  @Input()
  sysLogo: any;

  @Input()
  userData: UserModel;

  @Input()
  menuData: Array<any>;

  @Input()
  rightBtnList: LayoutLeftToolbarBtnModel[];

  @Input()
  leftBtnList: LayoutLeftToolbarBtnModel[];

  @Input()
  dropdownMenuItemList: LayoutLeftToolbarMenuItemModel[];

  @Output() btnHandler = new EventEmitter<string>();
  @Output() dropdownMenuItemHandler = new EventEmitter<string>();



  userAvatarCropperVisible = false;

  originalUserAvatar = this.userApiService.previewUserAvatar();

  updatePwdModal: NzModalRef = undefined;

  userMenuPopoverShow: boolean = false;
  menuPopoverShow: boolean = false;


  constructor(
    private modalService: NzModalService,
    private sysApiService: SysApiService,
    private platformStorageService: PlatformStorageService,
    private notificationService: NzNotificationService,
    private router: Router,
    private userApiService: UserApiService,
    private treeMenuService: TreeMenuService
  ) { }

  ngOnInit() {
    this.treeMenuService.getSubject().subscribe((node) => {
      this.menuPopoverShow = false;
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


  dropdownItemHandler(act: string) {
    this.dropdownMenuItemHandler.emit(act);
  }

  buttonHandler(act: string) {
    this.btnHandler.emit(act);
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
    event.preventDefault();
  }
}

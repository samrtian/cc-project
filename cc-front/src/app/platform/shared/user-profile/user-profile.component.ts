import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, OnDestroy } from '@angular/core';
import { NzModalService, NzNotificationService, NzModalRef } from 'ng-zorro-antd';
import { Router } from '@angular/router';

import { environment } from '@environments/environment';
import { UserModel } from '@platform/common/model/user-model';
import { SysApiService } from '@platform/api/sys/sys-api.service';
import { CommonUtil } from '@platform/common/util/common-util';
import { PlatformStorageService } from '../platform-storage/platform-storage.service';
import { UserApiService } from '@platform/api/user/user-api.service';
import { ImgCropperModalComponent } from '../img-cropper-modal/img-cropper-modal.component';
import { UpdatePwdComponent } from '../update-pwd/update-pwd.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less'],
  providers: [UserApiService]
})
export class UserProfileComponent implements OnInit, OnChanges, OnDestroy {


  @Input()
  userData: UserModel;

  @Input()
  userInfoRouter: string = '';

  @ViewChild('userAvatarImgCropper', { static: true }) userHeaderImgCropper: ImgCropperModalComponent;

  userAvatar = this.userApiService.previewUserAvatar();

  userAvatarCropperVisible = false;

  updatePwdModal: NzModalRef = undefined;

  constructor(
    private modalService: NzModalService,
    private platformStorageService: PlatformStorageService,
    private notificationService: NzNotificationService,
    private sysApiService: SysApiService,
    private router: Router,
    private userApiService: UserApiService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userData && !changes.userData.firstChange) {
      this.userData = changes.userData.currentValue;
    }
  }

  ngOnDestroy() {
    if (!!this.updatePwdModal) {
      this.updatePwdModal.destroy();
    }
  }


  userInfo() {
    this.router.navigate([this.userInfoRouter]);
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

  userAvatarUpload(data: any) {
    this.userApiService.uploadUserAvatarImg(data.image).subscribe((result) => {
      CommonUtil.resultHandle(result, () => {
        this.userHeaderImgCropper.close();
        this.notificationService.success('提示', '上传头像成功，刷新页面后生效！');
      }, this.notificationService);
    });
  }
}

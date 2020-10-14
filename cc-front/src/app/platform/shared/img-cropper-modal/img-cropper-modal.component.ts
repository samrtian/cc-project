import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CropperSettings, ImageCropperComponent } from 'ngx-img-cropper';
import { NzNotificationService } from 'ng-zorro-antd';
import * as lodash from 'lodash';

@Component({
  selector: 'app-img-cropper-modal',
  templateUrl: './img-cropper-modal.component.html',
  styleUrls: ['./img-cropper-modal.component.less']
})
export class ImgCropperModalComponent implements OnInit {

  @Input()
  visible = false;

  @Input()
  title = '图片裁剪';

  @Input()
  previewTitle = '图片预览';

  @Input()
  originalImgLabel = '原图片';

  @Input()
  closable = true;

  @Input()
  previewSquare = false;

  @Input()
  uploadBtnText: string = '上传';

  @Input()
  uploadBtnIcon: string = 'cloud-upload';

  @Input()
  browseBtnText: string = '选择';

  @Input()
  browseBtnIcon: string = 'search';

  @Input()
  uploadBtnCls: any;

  @Input()
  imgCropperCutCls: any;

  @Input()
  imgPreviewCls: any;

  @Input()
  maskClosable = false;

  @Input()
  width: string | number = 800;

  @Input()
  originalImgSrc = '';

  @Input()
  defaultImg = 'assets/platform/img/img-cropper/default-square-img.png';

  @Input()
  imgSettings: CropperSettings;

  @Input() maxSize: number = 8388608;

  @Output() visibleChange = new EventEmitter();

  @Output() imgChange = new EventEmitter<any>();

  @Output() imgUpload = new EventEmitter<any>();


  @ViewChild('imgCropper', { static: true })
  imgCropper: ImageCropperComponent;


  imgData: any;

  settings: CropperSettings;

  constructor(private notificationService: NzNotificationService) {

  }

  ngOnInit() {
    this.initSetting();
  }

  initSetting() {
    this.defaultImg = this.previewSquare ? 'assets/platform/img/img-cropper/default-square-img.png'
      : 'assets/platform/img/img-cropper/default-circular-img.png';

    //头像裁剪配置
    const initSettings = new CropperSettings();
    initSettings.noFileInput = true;
    initSettings.width = 120;
    initSettings.height = 120;
    initSettings.croppedWidth = 120;
    initSettings.croppedHeight = 120;
    initSettings.canvasWidth = 600;
    initSettings.canvasHeight = 350;
    initSettings.minWidth = 100;
    initSettings.minHeight = 100;
    initSettings.cropperDrawSettings.strokeWidth = 2;
    initSettings.rounded = true;
    initSettings.fileType = 'image/png';

    this.settings = lodash.merge({}, initSettings, this.imgSettings);
    if (this.imgSettings && this.imgSettings.rounded !== undefined && this.imgSettings.rounded !== null) {
      this.settings.rounded = this.imgSettings.rounded;
    } else {
      this.settings.rounded = true;
    }
    this.imgData = {};
  }


  imgFileChange(data: any) {
    this.imgChange.emit(data);
  }

  close() {
    this.visibleChange.emit(false);
    this.visible = false;
    if (this.imgCropper) {
      this.imgCropper.reset();
    }
    this.imgData = {};
  }

  upload() {
    if (!!this.imgData.image) {
      this.imgUpload.emit(this.imgData);
    } else {
      this.notificationService.error(
        '提示',
        '请上传图片!'
      );
    }
  }

}

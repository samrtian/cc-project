import { Directive, Input, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { ImageCropperComponent } from 'ngx-img-cropper';
import { NzNotificationService } from 'ng-zorro-antd';

@Directive({
  selector: '[appImgCropperSelect]'
})
export class ImgCropperSelectDirective {

  @Input() cropper: ImageCropperComponent;
  @Input() maxSize: number = 8388608;
  @Output() imgChange = new EventEmitter();

  constructor(
    private elementRef: ElementRef,
    private notificationService: NzNotificationService
  ) { }

  @HostListener('change')
  public onChange(): any {
    const files = this.elementRef.nativeElement.files;

    if (files && files.length > 0) {
      if (!(/^(\s|\S)+(jpg|png|jpeg|gif|JPG|PNG|JPEG|GIF)+$/.test(files[0].type))) {
        this.notificationService.error(
          '提示',
          '图片格式不正确，请上传JPG/JPEG、PNG、GIF格式的图片！'
        );
        throw JSON.stringify({
          error: '图片格式不正确，请上传JPG/JPEG、PNG、GIF格式的图片！'
        });
      }

      if (files[0].size > this.maxSize) {
        this.notificationService.error(
          '提示',
          '请上传小于' + (this.maxSize / 1024 / 1024) + 'M的JPG/JPEG、PNG、GIF图片!'
        );
        throw JSON.stringify({
          error: '请上传小于' + (this.maxSize / 1024 / 1024) + 'M的JPG/JPEG、PNG、GIF图片!'
        });
      }

      const image: any = new Image();
      const file: File = files[0];
      const myReader: FileReader = new FileReader();
      const that = this;
      myReader.onloadend = (loadEvent: any) => {
        image.src = loadEvent.target.result;
        that.cropper.setImage(image);
        that.imgChange.emit(image);
      };
      myReader.readAsDataURL(file);
    }
  }

}

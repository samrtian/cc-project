import { Directive, Input, Output, EventEmitter, ElementRef, HostListener, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import Viewer from 'viewerjs';

/**
 * 图片查看器
 */
@Directive({
    selector: '[appImageViewer]'
})
export class ImageViewerDirective implements AfterViewInit, OnDestroy {

    //配置
    @Input() options: any = {};

    @Output()
    viewInit = new EventEmitter();

    private imageViewerInstance: any;

    constructor(private elementRef: ElementRef) { }

    ngAfterViewInit() {
        this.createImageViewer();
    }

    createImageViewer() {
        this.imageViewerInstance = new Viewer(this.elementRef.nativeElement, this.options);
        this.viewInit.emit(this.imageViewerInstance);
    }



    /**
    * 销毁
    */
    ngOnDestroy() {
        if (this.imageViewerInstance) {
            this.imageViewerInstance.destroy();
        }
    }

}

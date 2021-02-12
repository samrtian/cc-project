
import { Directive, Input, Output, EventEmitter, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as lodash from 'lodash';
import * as OverlayScrollbars from 'overlayscrollbars';



/**
 * 滚动条
 */
@Directive({
  selector: '[appScrollbar]'
})
export class ScrollbarDirective implements AfterViewInit, OnDestroy {

  @Input() options: any = {};

  @Output()
  viewInit = new EventEmitter<any>();

  defaultOptions: any = {
    overflowBehavior: {
      x: 'hidden'
    },
    scrollbars: {
      autoHide: 'leave',
      autoHideDelay: 200
    }
  };

  private scrollbarInstance: any;

  constructor(private elementRef: ElementRef) { }


  /**
   * 视图初始化
   */
  ngAfterViewInit() {
    this.createScrollbar();
  }


  /**
  * 创建树
  */
  createScrollbar() {
    const ops = lodash.merge({}, this.defaultOptions, this.options);
    this.scrollbarInstance = OverlayScrollbars(this.elementRef.nativeElement, ops);
    this.viewInit.emit(this.scrollbarInstance);
  }

  /**
  * 销毁
  */
  ngOnDestroy() {
    if (this.scrollbarInstance) {
      this.scrollbarInstance.destroy();
    }
  }

  /**
   * 获得实例
   */
  getScrollbarInstance() {
    return this.scrollbarInstance;
  }
}

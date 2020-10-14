import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

/**
 *  元素src错误默认值
 */
@Directive({
  selector: '[appErrorSrc]'
})
export class ErrorSrcDirective implements AfterViewInit {
  @Input() errSrc: string = '';

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.addEventListener('error', (e) => {
      if (this.errSrc !== '') {
        this.elementRef.nativeElement.src = this.errSrc;
      }
    });
  }




}

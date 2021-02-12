import { Directive, Input, OnInit, Renderer2, ElementRef } from '@angular/core';
import { environment } from '@environments/environment';

@Directive({
  selector: '[appContainerCss]'
})
export class ContainerCssDirective implements OnInit {

  /**
   * 默认样式
   */
  @Input()
  defaultCls = 'app-layout-full-np-content-container';

  /**
   * 渲染样式
   */
  @Input()
  rendererCls = 'app-desk-layout-full-np-content-container';

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.autoRendererCls();
  }

  autoRendererCls() {
    if (environment.autoRendererCls) {
      this.renderer.addClass(this.elementRef.nativeElement, this.rendererCls);
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, this.defaultCls);
    }
  }

}

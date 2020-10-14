import { Directive, Input, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appContainerCss]'
})
export class ContainerCssDirective implements OnInit {


  /**
   * 需要渲染的url
   */
  @Input()
  matchRouters = [];

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
    private router: Router,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.matchRouter();
  }


  matchRouter() {
    const str = this.router.url.split('/')[1];
    let exist = false;
    for (const routerStr of this.matchRouters) {
      if (routerStr === str) {
        exist = true;
        break;
      }
    }

   

    if (exist) {
      this.renderer.addClass(this.elementRef.nativeElement, this.rendererCls);
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, this.defaultCls);
    }
  }

}

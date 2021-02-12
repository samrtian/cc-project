import { Directive, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { PlatformRootService } from '../platform-root/platform-root.service';
import { ToolsBtnTypeEnum } from '@platform/common/enum/tools-btn-type.enum';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[appPageTool]'
})
export class PageToolDirective implements OnInit, OnDestroy, OnChanges {

  @Input()
  title: string = undefined;

  @Input()
  btnsTpl: TemplateRef<void> = undefined;

  routerTitle: string = undefined;

  constructor(
    private platformRootService: PlatformRootService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((routerData: any) => {
      if (routerData && routerData.title) {
        this.routerTitle = routerData.title;
      } else {
        this.routerTitle = undefined;
      }
    });
    this.pushMsg();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes.title && !changes.title.firstChange) || (changes.btns && !changes.btns.firstChange)) {
      this.pushMsg();
    }
  }

  pushMsg() {
    
    // 当未配置标题时，最路由的配置标题
    if (this.title === undefined && this.routerTitle !== undefined) {
      this.title = this.routerTitle;
    }

    if (this.title !== undefined && this.btnsTpl !== undefined) {
      this.platformRootService.toolBtnEventEmitter.emit({
        type: ToolsBtnTypeEnum.all,
        title: this.title,
        btnsTpl: this.btnsTpl
      });
    } else if (this.title !== undefined && this.btnsTpl === undefined) {
      this.platformRootService.toolBtnEventEmitter.emit({
        type: ToolsBtnTypeEnum.title,
        title: this.title
      });
    } else if (this.title === undefined && this.btnsTpl !== undefined) {
      this.platformRootService.toolBtnEventEmitter.emit({
        type: ToolsBtnTypeEnum.button,
        btnsTpl: this.btnsTpl
      });
    } else {
      this.platformRootService.toolBtnEventEmitter.emit({
        type: ToolsBtnTypeEnum.clear
      });
    }
  }

  /**
   * 销毁
   */
  ngOnDestroy() {
    this.platformRootService.toolBtnEventEmitter.emit({
      type: ToolsBtnTypeEnum.clear
    });
  }
}



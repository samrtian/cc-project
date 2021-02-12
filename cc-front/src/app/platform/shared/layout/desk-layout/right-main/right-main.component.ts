import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { PlatformRootService } from '../../../platform-root/platform-root.service';
import { ToolsBtnTypeEnum } from '@platform/common/enum/tools-btn-type.enum';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-right-main',
  templateUrl: './right-main.component.html',
  styleUrls: ['./right-main.component.less']
})
export class RightMainComponent implements OnInit {

  toolTitle: string = undefined;

  toolBtnTpl: TemplateRef<void> = undefined;

  showTool = false;

  @Input()
  showFull = true;

  scrollbarInstance: any = undefined;

  constructor(
    private platformRootService: PlatformRootService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.initRouterEvent();
    this.initToolEvent();
  }

  initToolEvent() {
    this.platformRootService.toolBtnEventEmitter.subscribe((value: any) => {
      setTimeout(() => {
        if (value && value.type === ToolsBtnTypeEnum.all) {
          this.toolBtnTpl = value.btnsTpl;
          this.toolTitle = value.title;
          this.showTool = true;
        } else if (value && value.type === ToolsBtnTypeEnum.title) {
          this.toolTitle = value.title;
          this.showTool = true;
        } else if (value && value.type === ToolsBtnTypeEnum.button) {
          this.toolBtnTpl = value.btnsTpl;
          this.showTool = true;
        } else if (value && value.type === ToolsBtnTypeEnum.clear && !this.showTool) {
          this.toolBtnTpl = undefined;
          this.toolTitle = undefined;
          this.showTool = false;
        }
      }, 1);
    });
  }


  initRouterEvent() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === event.urlAfterRedirects) {
          this.toolBtnTpl = undefined;
          this.toolTitle = undefined;
          this.showTool = false;
          if (this.scrollbarInstance && this.scrollbarInstance.scroll) {
            this.scrollbarInstance.scroll({ y: '0%' });
          }
        }
      }
    });
  }

  scrollerViewInit(scrollbarInstance: any) {
    this.scrollbarInstance = scrollbarInstance;
  }

}

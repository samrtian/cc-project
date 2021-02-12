import { Component, OnInit, Injector, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';
import { Router, ActivatedRoute, NavigationStart, NavigationCancel, NavigationError, NavigationEnd, RoutesRecognized } from '@angular/router';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Subject } from 'rxjs';


declare var NProgress: any;

@Component({
  selector: 'app-platform-root',
  templateUrl: './platform-root.component.html',
  styleUrls: ['./platform-root.component.less']
})
export class PlatformRootComponent implements OnInit, OnDestroy {

  @ViewChild('commonEmptyTpl', { static: true }) commonEmptyTpl: TemplateRef<any>;

  locale: { [key: string]: string } = {};
  private localeDestroy = new Subject<void>();

  constructor(
    private router: Router,
    private injector: Injector,
    private titleService: Title,
    private nzConfigService: NzConfigService,
    private nzI18nService: NzI18nService
  ) { }

  ngOnInit() {
    this.initCommonEmpty();
    this.initNprogress();
    this.initTitle();
  }

  initCommonEmpty() {
    this.nzI18nService.localeChange.pipe(takeUntil(this.localeDestroy)).subscribe(() => {
      this.locale = this.nzI18nService.getLocaleData('Empty');
    });
    this.nzConfigService.set('empty', { nzDefaultEmptyContent: this.commonEmptyTpl });
  }

  initTitle() {
    this.router.events
      .pipe(filter(evt => evt instanceof NavigationEnd))
      .subscribe((evt) => {
        let next = this.injector.get(ActivatedRoute);
        while (next.firstChild) {
          next = next.firstChild;
        }
        const data = (next.snapshot && next.snapshot.data) || {};

        if (data.title) {
          const title = data.title;
          const browserTitle = (!!environment.browserTitle) ? environment.browserTitle : '';
          if (!!title) {
            this.titleService.setTitle(browserTitle + '-' + title);
          } else {
            this.titleService.setTitle(browserTitle);
          }
        }

      });
  }



  /**
   * 进度条
   */
  initNprogress() {
    // nprogress
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        NProgress.start();
      } else if (event instanceof NavigationEnd) {
        NProgress.done();
      } else if (event instanceof NavigationCancel) {
        NProgress.done();
      } else if (event instanceof NavigationError) {
        NProgress.done();
      } else if (event instanceof RoutesRecognized) {
      }
    });
  }

  ngOnDestroy(): void {
    this.localeDestroy.next();
    this.localeDestroy.complete();
  }
}

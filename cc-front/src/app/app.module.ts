import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, } from 'ng-zorro-antd/i18n';

import { zh_CN } from 'ng-zorro-antd/i18n';

import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { NzModalModule } from 'ng-zorro-antd/modal';



import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { CookieModule } from 'ngx-cookie';
import { PlatformRootModule } from '@platform/shared/platform-root/platform-root.module';
import { AppHttpInterceptor } from './app-http-interceptor';
import { RouteReuseStrategy } from '@angular/router';


registerLocaleData(zh);

// providers
const providers: Array<any> = [
  { provide: NZ_I18N, useValue: zh_CN },
  {
    provide: NZ_CONFIG, useValue: {
      message: { nzDuration: 2000 },
      notification: { nzDuration: 2000 }
    }
  },
  { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzNotificationModule,
    NzModalModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    PlatformRootModule,
    CookieModule.forRoot()
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

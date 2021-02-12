
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpInterceptor as PlatformHttpInterceptor } from '@platform/shared/platform-interceptor/http-interceptor';

@Injectable()
export class AppHttpInterceptor extends PlatformHttpInterceptor implements HttpInterceptor { }

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as lodash from 'lodash';

import { environment } from '@environments/environment';
import { CommonUtil } from '../common/util/common-util';


@Injectable()
export class BaseApiService {

  environment: any;

  constructor(
    private httpClient: HttpClient
  ) {
    this.environment = environment;
  }

  get http() {
    return this.httpClient;
  }

  /**
  * post请求
  */
  httpPost(url: string, params: any = {}, convert: boolean = true, useSpinning: boolean = true): Observable<any> {
    return this.http.post(this.environment.webPrefix + url + this.environment.webSuffix, {
      data: params,
      convert,
      useSpinning
    });
  }

  /**
 * url参数的post请求
 */
  httpUrlParamsPost(url: string, params: any = {}, urlParams: any = {}, convert: boolean = true, useSpinning: boolean = true): Observable<any> {
    return this.http.post(this.environment.webPrefix + url + this.environment.webSuffix + this.parseJsonToUrlParams(urlParams), {
      data: params,
      convert,
      useSpinning
    });
  }

  /**
   * get请求
   */
  httpGet(url: string, params: any = {}, useSpinning: boolean = true): Observable<any> {
    params.useSpinning = useSpinning;
    url = this.environment.webPrefix + url + this.environment.webSuffix + this.parseJsonToUrlParams(params);
    return this.http.get(url);
  }

  /**
   * jsonp请求
   */
  httpJsonp(url: string, callbackParam: string = 'callback'): Observable<any> {
    return this.http.jsonp(url, callbackParam);
  }

  /**
   * 字符串地址
   * @param url 
   */
  stringUrl(url: string, params: any = ''): string {
    return this.environment.webPrefix + url + this.environment.webSuffix + this.parseJsonToUrlParams(params);
  }


  /**
   * 转换json到url参数
   */
  parseJsonToUrlParams(params: any) {
    if (!lodash.isEmpty(params)) {
      return CommonUtil.parseJsonToUrlParams(params);
    } else {
      return '';
    }
  }
}

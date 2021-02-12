import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

import { BaseApiService } from '../base-api.service';


@Injectable()
export class WeatherApiService extends BaseApiService {

  /**
   *  查询天气
   */
  queryWeather(params: any): Observable<any> {
    return this.httpPost('weather/queryWeather', params, true, false);
  }

  /**
   * 查询定位
   */
  queryLocation(): Observable<any> {
    return this.httpJsonp(environment.weatherLocationUrl);
  }
}

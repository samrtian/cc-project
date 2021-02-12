import { Component, OnInit, Input } from '@angular/core';
import { WeatherApiService } from '@platform/api/weather/weather-api.service';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less'],
  providers: [WeatherApiService]
})
export class WeatherComponent implements OnInit {

  @Input()
  autoLocation = true;

  @Input()
  cityName = '';

  content: any;
  loading = true;
  errorMsg = '';

  constructor(
    private weatherApiService: WeatherApiService
  ) { }

  ngOnInit() {
    this.initWeather();
  }

  initWeather() {
    this.loading = true;
    if (this.autoLocation) {
      this.weatherApiService.queryLocation().subscribe((result: any) => {
        if (result.content) {
          this.cityName = result.content.address;
          this.queryWeather();
        } else {
          this.errorMsg = '获取位置信息失败！';
        }
      });
    } else {
      this.queryWeather();
    }
  }

  queryWeather() {
    this.weatherApiService.queryWeather({
      cityName: this.cityName,
      useSpinning: false
    }).subscribe((result: any) => {
      this.loading = false;
      if (CommonUtil.resultSuccess(result.data.resultType)) {
        if (result.data.resultData && result.data.resultData.success) {
          this.content = result.data.resultData.content;
        } else {
          this.errorMsg = '获取天气失败！';
        }
      } else if (CommonUtil.resultFailure(result.data.resultType)) {
        this.errorMsg = result.data.resultMsg;
      } else {
        this.errorMsg = result.data.resultMsg;
      }
    });
  }

}

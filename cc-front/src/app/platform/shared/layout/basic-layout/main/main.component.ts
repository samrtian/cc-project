import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WaterMarkerOptionModel } from '@platform/common/model/water-marker-model';
import { UserModel } from '@platform/common/model/user-model';
import { environment } from '@environments/environment';
import * as lodash from 'lodash';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit, OnChanges {

  @Input()
  menuData: any[];

  @Input()
  userData: UserModel;

  @Input()
  userInfoRouter: string = '';

  @Input()
  showSider = true;

  waterMarkerOptions: WaterMarkerOptionModel = {
    watermarkY: 20,
    showWaterMark: false
  };

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userData && !changes.userData.firstChange) {

        this.waterMarkerOptions = lodash.merge({}, this.waterMarkerOptions, environment.waterMarkerOptions);

        // 显示水印，并且没有定义水印文字
        if (this.waterMarkerOptions.showWaterMark && !this.waterMarkerOptions.watermarkLabel) {
          //配置了用户水印信息
          if (this.waterMarkerOptions.userKeys && this.waterMarkerOptions.userKeys.length) {
            let label = '';
            const splitChar = this.waterMarkerOptions.splitChar ? this.waterMarkerOptions.splitChar : '-';
            for (let i = 0; i < this.waterMarkerOptions.userKeys.length; i++) {
              label += this.userData[this.waterMarkerOptions.userKeys[i]];
              if (i < this.waterMarkerOptions.userKeys.length - 1) {
                label += splitChar;
              }
            }

            this.waterMarkerOptions.watermarkLabel = label;
          } else {
            this.waterMarkerOptions.watermarkLabel = this.userData.realName + '-' + this.userData.userName;
          }
        }
        

    }
  }

}

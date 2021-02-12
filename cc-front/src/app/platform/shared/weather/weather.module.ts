import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { NzIconModule} from 'ng-zorro-antd/icon';
import {NzResultModule} from 'ng-zorro-antd/result';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';

import { ViewGridModule } from '../view-grid/view-grid.module';



@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    NzSkeletonModule,
    NzIconModule,
    NzResultModule,
    ViewGridModule
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule { }

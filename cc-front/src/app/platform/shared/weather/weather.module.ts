import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { NzSkeletonModule, NzIconModule, NzResultModule } from 'ng-zorro-antd';
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

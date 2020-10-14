import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterMarkerDirective } from './water-marker.directive';

@NgModule({
  declarations: [
    WaterMarkerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WaterMarkerDirective
  ]
})
export class WaterMarkerModule { }

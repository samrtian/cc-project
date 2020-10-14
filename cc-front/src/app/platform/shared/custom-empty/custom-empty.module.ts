import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomEmptyComponent } from './custom-empty.component';
import { NzEmptyModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomEmptyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzEmptyModule
  ],
  exports: [
    CustomEmptyComponent
  ]
})
export class CustomEmptyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessUrlModalComponent } from './access-url-modal.component';
import { NzTableModule, NzButtonModule, NzIconModule, NzInputModule, NzFormModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewGridModule } from '../view-grid/view-grid.module';



@NgModule({
  declarations: [
    AccessUrlModalComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    ViewGridModule
  ],
  exports: [
    AccessUrlModalComponent
  ],
  entryComponents: [
    AccessUrlModalComponent
  ]
})
export class AccessUrlModalModule { }

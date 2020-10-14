import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule, NzIconModule, NzInputModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePwdComponent } from './update-pwd.component';

@NgModule({
  declarations: [
    UpdatePwdComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UpdatePwdComponent
  ],
  entryComponents: [
    UpdatePwdComponent
  ]
})
export class UpdatePwdModule { }

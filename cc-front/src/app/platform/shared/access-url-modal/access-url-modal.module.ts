import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessUrlModalComponent } from './access-url-modal.component';
import { NzButtonModule} from 'ng-zorro-antd/button';
import { NzTableModule} from 'ng-zorro-antd/table';
import { NzIconModule} from 'ng-zorro-antd/icon';
import { NzInputModule} from 'ng-zorro-antd/input';
import { NzFormModule} from 'ng-zorro-antd/form';
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

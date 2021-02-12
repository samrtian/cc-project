import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule} from 'ng-zorro-antd/form';
import { NzInputModule} from 'ng-zorro-antd/input';
import { NzButtonModule} from 'ng-zorro-antd/button';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule as PlatformLoginModule } from '@platform/shared/login/login.module';

import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PlatformLoginModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }

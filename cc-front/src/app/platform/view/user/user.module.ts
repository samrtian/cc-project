import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserInfoComponent } from './user-info/user-info.component';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserPwdEditComponent } from './user-pwd-edit/user-pwd-edit.component';
import { UserRoleDistributeComponent } from './user-role-distribute/user-role-distribute.component';
import { UserDeptDistributeComponent } from './user-dept-distribute/user-dept-distribute.component';
import { NzTableModule} from 'ng-zorro-antd/table';
import { NzFormModule} from 'ng-zorro-antd/form';
import { NzInputModule} from 'ng-zorro-antd/input';
import { NzIconModule} from 'ng-zorro-antd/icon';
import { NzButtonModule} from 'ng-zorro-antd/button';
import { NzSelectModule} from 'ng-zorro-antd/select';
import { NzListModule} from 'ng-zorro-antd/list';
import { NzTreeModule} from 'ng-zorro-antd/tree';
import { NzTransferModule} from 'ng-zorro-antd/transfer';
import { ViewGridModule } from '@platform/shared/view-grid/view-grid.module';
import { BusinessBtnModule } from '@platform/shared/business-btn/business-btn.module';
import { PageToolModule } from '@platform/shared/page-tool/page-tool.module';
import { DataDicPipeModule } from '@platform/shared/custom-pipe/data-dic-pipe/data-dic-pipe.module';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'userInfo',
        component: UserInfoComponent,
        data: { title: '个人资料' }
      },
      {
        path: 'userList',
        component: UserListComponent,
        data: { title: '用户管理' }
      },
      {
        path: 'userAdd',
        component: UserAddComponent,
        data: { title: '用户添加' }
      },
      {
        path: 'userEdit',
        component: UserAddComponent,
        data: { title: '用户编辑' }
      },
      {
        path: 'userView',
        component: UserViewComponent,
        data: { title: '用户查看' }
      }
    ]
  }
];

@NgModule({
  declarations: [
    UserInfoComponent,
    UserComponent,
    UserListComponent,
    UserAddComponent,
    UserViewComponent,
    UserPwdEditComponent,
    UserRoleDistributeComponent,
    UserDeptDistributeComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzSelectModule,
    NzListModule,
    NzTreeModule,
    NzTransferModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ViewGridModule,
    BusinessBtnModule,
    PageToolModule,
    DataDicPipeModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    UserPwdEditComponent,
    UserRoleDistributeComponent,
    UserDeptDistributeComponent
  ]
})
export class UserModule { }

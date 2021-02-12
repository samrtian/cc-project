import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataPermissionsComponent } from './data-permissions.component';
import { DataPermissionsAddComponent } from './data-permissions-add/data-permissions-add.component';
import { DataPermissionsListComponent } from './data-permissions-list/data-permissions-list.component';
import { DataPermissionsViewComponent } from './data-permissions-view/data-permissions-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AccessUrlModalModule } from '@platform/shared/access-url-modal/access-url-modal.module';
import { NzInputNumberModule} from 'ng-zorro-antd/input-number';
import { NzPopoverModule} from 'ng-zorro-antd/popover';
import { NzFormModule} from 'ng-zorro-antd/form';
import { NzInputModule} from 'ng-zorro-antd/input';
import { NzTableModule} from 'ng-zorro-antd/table';
import { NzSelectModule} from 'ng-zorro-antd/select';
import { NzButtonModule} from 'ng-zorro-antd/button';
import { NzIconModule} from 'ng-zorro-antd/icon';
import { ViewGridModule } from '@platform/shared/view-grid/view-grid.module';
import { BusinessBtnModule } from '@platform/shared/business-btn/business-btn.module';
import { PageToolModule } from '@platform/shared/page-tool/page-tool.module';
import { DataDicPipeModule } from '@platform/shared/custom-pipe/data-dic-pipe/data-dic-pipe.module';

const routes: Routes = [
  {
    path: '',
    component: DataPermissionsComponent,
    children: [
      {
        path: 'dataPermissionsList',
        component: DataPermissionsListComponent,
        data: { title: '数据权限管理' }
      },
      {
        path: 'dataPermissionsAdd',
        component: DataPermissionsAddComponent,
        data: { title: '数据权限添加' }
      },
      {
        path: 'dataPermissionsEdit',
        component: DataPermissionsAddComponent,
        data: { title: '数据权限编辑' }
      },
      {
        path: 'dataPermissionsView',
        component: DataPermissionsViewComponent,
        data: { title: '数据权限查看' }
      }
    ]
  }
];

@NgModule({
  declarations: [
    DataPermissionsComponent,
    DataPermissionsAddComponent,
    DataPermissionsListComponent,
    DataPermissionsViewComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzSelectModule,
    NzTableModule,
    NzIconModule,
    NzInputNumberModule,
    NzInputModule,
    NzButtonModule,
    NzPopoverModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ViewGridModule,
    BusinessBtnModule,
    PageToolModule,
    DataDicPipeModule,
    AccessUrlModalModule,
    RouterModule.forChild(routes)
  ]
})
export class DataPermissionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessUrlComponent } from './access-url.component';
import { Routes, RouterModule } from '@angular/router';
import { NzFormModule} from 'ng-zorro-antd/form';
import { NzInputModule} from 'ng-zorro-antd/input';
import { NzTableModule} from 'ng-zorro-antd/table';
import { NzSelectModule} from 'ng-zorro-antd/select';
import { NzButtonModule} from 'ng-zorro-antd/button';
import { NzIconModule} from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccessUrlAddComponent } from './access-url-add/access-url-add.component';
import { AccessUrlListComponent } from './access-url-list/access-url-list.component';
import { AccessUrlViewComponent } from './access-url-view/access-url-view.component';
import { ViewGridModule } from '@platform/shared/view-grid/view-grid.module';
import { BusinessBtnModule } from '@platform/shared/business-btn/business-btn.module';
import { PageToolModule } from '@platform/shared/page-tool/page-tool.module';
import { DataDicModule } from '../data-dic/data-dic.module';
import { DataDicPipeModule } from '@platform/shared/custom-pipe/data-dic-pipe/data-dic-pipe.module';


const routes: Routes = [
  {
    path: '',
    component: AccessUrlComponent,
    children: [
      {
        path: 'accessUrlList',
        component: AccessUrlListComponent,
        data: { title: '访问地址管理' }
      },
      {
        path: 'accessUrlAdd',
        component: AccessUrlAddComponent,
        data: { title: '访问地址添加' }
      },
      {
        path: 'accessUrlEdit',
        component: AccessUrlAddComponent,
        data: { title: '访问地址编辑' }
      },
      {
        path: 'accessUrlView',
        component: AccessUrlViewComponent,
        data: { title: '访问地址查看' }
      }
    ]
  }
];


@NgModule({
  declarations: [
    AccessUrlComponent,
    AccessUrlAddComponent,
    AccessUrlListComponent,
    AccessUrlViewComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzFormModule,
    NzSelectModule,
    NzInputModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ViewGridModule,
    BusinessBtnModule,
    PageToolModule,
    DataDicPipeModule,
    RouterModule.forChild(routes)
  ]
})
export class AccessUrlModule { }

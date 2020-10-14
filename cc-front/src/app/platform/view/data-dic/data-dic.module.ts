import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataDicComponent } from './data-dic.component';
import { DataDicListComponent } from './data-dic-list/data-dic-list.component';
import { DataDicItemAddComponent } from './data-dic-item-add/data-dic-item-add.component';
import { DataDicItemRoleDistributeComponent } from './data-dic-item-role-distribute/data-dic-item-role-distribute.component';
import { DataDicItemViewComponent } from './data-dic-item-view/data-dic-item-view.component';
import { DataDicTypeAddComponent } from './data-dic-type-add/data-dic-type-add.component';
import { DataDicTypeViewComponent } from './data-dic-type-view/data-dic-type-view.component';
import { NzFormModule, NzTreeSelectModule, NzSelectModule, NzTransferModule, NzIconModule, NzMenuModule, NzTableModule, NzInputModule, NzButtonModule, NzCheckboxModule } from 'ng-zorro-antd';
import { ViewGridModule } from '@platform/shared/view-grid/view-grid.module';
import { BusinessBtnModule } from '@platform/shared/business-btn/business-btn.module';
import { PageToolModule } from '@platform/shared/page-tool/page-tool.module';
import { DataDicPipeModule } from '@platform/shared/custom-pipe/data-dic-pipe/data-dic-pipe.module';
import { CustomEmptyModule } from '@platform/shared/custom-empty/custom-empty.module';
import { ScrollbarModule } from '@platform/shared/scrollbar/scrollbar.module';
import { ContainerCssModule } from '@platform/shared/container-css/container-css.module';


const routes: Routes = [
  {
    path: '',
    component: DataDicComponent,
    children: [
      {
        path: 'dataDicList',
        component: DataDicListComponent,
        data: { title: '数据字典管理' }
      },
      {
        path: 'dataDicTypeAdd',
        component: DataDicTypeAddComponent,
        data: { title: '数据字典类别添加' }
      },
      {
        path: 'dataDicTypeEdit',
        component: DataDicTypeAddComponent,
        data: { title: '数据字典类别编辑' }
      },
      {
        path: 'dataDicItemAdd',
        component: DataDicItemAddComponent,
        data: { title: '数据字典明细添加' }
      },
      {
        path: 'dataDicItemEdit',
        component: DataDicItemAddComponent,
        data: { title: '数据字典明细编辑' }
      }
    ]
  }
];

@NgModule({
  declarations: [
    DataDicComponent,
    DataDicListComponent,
    DataDicItemAddComponent,
    DataDicItemRoleDistributeComponent,
    DataDicItemViewComponent,
    DataDicTypeAddComponent,
    DataDicTypeViewComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzTreeSelectModule,
    NzSelectModule,
    NzTransferModule,
    NzIconModule,
    NzMenuModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ViewGridModule,
    BusinessBtnModule,
    PageToolModule,
    ScrollbarModule, 
    DataDicPipeModule,
    CustomEmptyModule,
    ContainerCssModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    DataDicItemViewComponent,
    DataDicTypeViewComponent,
    DataDicItemRoleDistributeComponent
  ]
})
export class DataDicModule { }

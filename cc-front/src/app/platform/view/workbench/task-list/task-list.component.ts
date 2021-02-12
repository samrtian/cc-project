import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BaseListComponent } from '@platform/view/base/base-list-component';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CommonUtil } from '@platform/common/util/common-util';
import { TaskApiService } from '@platform/api/task/task-api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less'],
  providers: [TaskApiService]
})
export class TaskListComponent extends BaseListComponent implements OnInit {

  list: Array<any> = [];
  queryTaskStateOptionList: Array<any> = [];

  constructor(
    private router: Router,
    private notificationService: NzNotificationService,
    private taskApiService: TaskApiService
  ) {
    super();

    this.queryParams = CommonUtil.queryParamsMergePageParams({
      status: '1'
    });
  }

  ngOnInit() {
    this.initPageData();
    this.query();
  }


  initPageData(): void {
    this.taskApiService.initTaskManageData({}).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.buttonList = result.data.resultData.buttonList;
          this.queryTaskStateOptionList = result.data.resultData.QUERY_TASK_STATUS_TYPE;
        }, this.notificationService);

      });
  }

  query(btnQuery: boolean = false) {
    if (btnQuery) {
      this.queryParams = CommonUtil.resetPaginationParams(this.queryParams);
    }
    this.taskApiService.queryTaskByConditionPaging(this.queryParams).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.queryParams = CommonUtil.paginationParamsMergeResultParams(this.queryParams, result.data.resultData);
          this.list = result.data.resultData.rows;
        }, this.notificationService);

      });
  }

  updateTaskStatus(item: any) {
    this.taskApiService.updateTaskById(item.taskId).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.query();
          this.notificationService.success('提示', result.data.resultMsg);
        }, this.notificationService);

      });
  }

  taskView(item: any) {
    this.router.navigate([item.taskUrl], { queryParams: JSON.parse(item.taskParameter) });
  }


}

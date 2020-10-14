import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@platform/view/base/base-list-component';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { CommonUtil } from '@platform/common/util/common-util';
import { StudentApiService } from '@business/api/student/student-api.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.less'],
  providers: [StudentApiService]
})
export class StudentListComponent extends BaseListComponent implements OnInit {

  list: any[] = [];
  cron = '0-59 0-59 5,1,2 ? 1 0,1 2020-2120';

  constructor(
    private router: Router,
    private studentApiService: StudentApiService,
    private modalService: NzModalService,
    private notificationService: NzNotificationService
  ) {
    super();

    this.queryParams = CommonUtil.queryParamsMergePageParams({});
  }
  ngOnInit(): void {
    this.initPageData();
  }

  initPageData(): void {
    this.studentApiService.queryStudentByConditionPaging(this.queryParams).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.queryParams = CommonUtil.paginationParamsMergeResultParams(this.queryParams, result.data.resultData);
          this.list = result.data.resultData.rows;
        }, this.notificationService);

      });
  }

  query() {

  }

  cronChange(value: any) {
    console.log(value);
  }
}

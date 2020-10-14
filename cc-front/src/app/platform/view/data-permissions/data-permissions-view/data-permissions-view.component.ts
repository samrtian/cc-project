import { Component, OnInit } from '@angular/core';
import { DataPermissionsApiService } from '@platform/api/data-permissions/data-permissions-api.service';
import { BaseViewComponent } from '@platform/view/base/base-view-component';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-data-permissions-view',
  templateUrl: './data-permissions-view.component.html',
  styleUrls: ['./data-permissions-view.component.less'],
  providers: [DataPermissionsApiService]
})
export class DataPermissionsViewComponent extends BaseViewComponent implements OnInit {

  constructor(
    private notificationService: NzNotificationService,
    private dataPermissionsApiService: DataPermissionsApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    CommonUtil.pageQueryParams(this.activatedRoute, (params: any) => {
      if (!!params.id) {
        this.id = params.id;
        this.initPageData();
      }
    });
  }

  initPageData() {
    this.dataPermissionsApiService.queryDataPermissionsById(this.id).subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.resultData = result.data.resultData;
      }, this.notificationService);
    });

  }

  back() {
    this.router.navigate(['app/dataPermissions/dataPermissionsList']);
  }

}

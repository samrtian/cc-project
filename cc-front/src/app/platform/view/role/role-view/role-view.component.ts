import { Component, OnInit } from '@angular/core';
import { RoleApiService } from '@platform/api/role/role-api.service';
import { BaseViewComponent } from '@platform/view/base/base-view-component';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-role-view',
  templateUrl: './role-view.component.html',
  styleUrls: ['./role-view.component.less'],
  providers: [
    RoleApiService
  ]
})
export class RoleViewComponent extends BaseViewComponent implements OnInit {

  constructor(
    private notificationService: NzNotificationService,
    private roleApiService: RoleApiService,
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
    this.roleApiService.queryRoleById(this.id).subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.resultData = result.data.resultData;
      }, this.notificationService);
    });

  }

  back() {
    this.router.navigate(['app/role/roleList']);
  }

}

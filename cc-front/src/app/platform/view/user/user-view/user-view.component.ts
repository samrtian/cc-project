import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { UserApiService } from '@platform/api/user/user-api.service';
import { CommonUtil } from '@platform/common/util/common-util';
import { BaseViewComponent } from '@platform/view/base/base-view-component';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.less'],
  providers: [UserApiService]
})
export class UserViewComponent extends BaseViewComponent implements OnInit {

  constructor(
    private notificationService: NzNotificationService,
    private userApiService: UserApiService,
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
    this.userApiService.queryUserById(this.id).subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.resultData = result.data.resultData;
      }, this.notificationService);
    });

  }

  back() {
    this.router.navigate(['app/user/userList']);
  }

}

import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonUtil } from '@platform/common/util/common-util';
import { AccessUrlApiService } from '@platform/api/access-url/access-url-api.service';
import { BaseViewComponent } from '@platform/view/base/base-view-component';

@Component({
  selector: 'app-access-url-view',
  templateUrl: './access-url-view.component.html',
  styleUrls: ['./access-url-view.component.less'],
  providers: [AccessUrlApiService]
})
export class AccessUrlViewComponent extends BaseViewComponent implements OnInit {

  constructor(
    private notificationService: NzNotificationService,
    private accessUrlApiService: AccessUrlApiService,
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
    this.accessUrlApiService.queryAccessUrlById(this.id).subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.resultData = result.data.resultData;
      }, this.notificationService);
    });

  }

  back() {
    this.router.navigate(['app/accessUrl/accessUrlList']);
  }

}

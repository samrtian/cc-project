import { Component, OnInit } from '@angular/core';
import { BaseViewComponent } from '@platform/view/base/base-view-component';
import { ButtonApiService } from '@platform/api/button/button-api.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-button-view',
  templateUrl: './button-view.component.html',
  styleUrls: ['./button-view.component.less'],
  providers: [ButtonApiService]
})
export class ButtonViewComponent extends BaseViewComponent implements OnInit {

  constructor(private notificationService: NzNotificationService,
    private buttonApiService: ButtonApiService,
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
    this.buttonApiService.queryButtonById(this.id).subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.resultData = result.data.resultData;
      }, this.notificationService);
    });

  }

  back() {
    this.router.navigate(['app/button/buttonList']);
  }

}

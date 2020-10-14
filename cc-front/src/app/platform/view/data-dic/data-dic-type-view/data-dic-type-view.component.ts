import { Component, OnInit } from '@angular/core';
import { BaseViewComponent } from '@platform/view/base/base-view-component';
import { NzNotificationService } from 'ng-zorro-antd';
import { DataDicApiService } from '@platform/api/data-dic/data-dic-api.service';
import { CommonUtil } from '@platform/common/util/common-util';

@Component({
  selector: 'app-data-dic-type-view',
  templateUrl: './data-dic-type-view.component.html',
  styleUrls: ['./data-dic-type-view.component.less'],
  providers: [DataDicApiService]
})
export class DataDicTypeViewComponent  extends BaseViewComponent implements OnInit {

  constructor(
    private notificationService: NzNotificationService,
    private dataDicApiService: DataDicApiService
  ) {
    super();
  }

  ngOnInit() {
    this.initPageData();
  }

  initPageData(): void {
    this.dataDicApiService.queryDataDicTypeById(this.id).subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.resultData = result.data.resultData;
      }, this.notificationService);
    });
  }

}

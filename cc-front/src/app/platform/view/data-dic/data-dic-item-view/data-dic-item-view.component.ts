import { Component, OnInit } from '@angular/core';
import { BaseViewComponent } from '@platform/view/base/base-view-component';
import { DataDicApiService } from '@platform/api/data-dic/data-dic-api.service';
import { CommonUtil } from '@platform/common/util/common-util';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-data-dic-item-view',
  templateUrl: './data-dic-item-view.component.html',
  styleUrls: ['./data-dic-item-view.component.less'],
  providers: [DataDicApiService]
})
export class DataDicItemViewComponent extends BaseViewComponent implements OnInit {

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
    this.dataDicApiService.queryDataDicItemById(this.id).subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.resultData = result.data.resultData;
      }, this.notificationService);
    });
  }

}

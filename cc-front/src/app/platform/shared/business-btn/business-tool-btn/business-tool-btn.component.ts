import { Component, OnInit, Input } from '@angular/core';
import { BusinessBtnModel } from '@platform/common/model/business-btn-model';
import { LAYOUT_MARK } from '@platform/common/constant/business-tool-btn-contant';
import { ExpressionExePipePipe } from '@platform/shared/custom-pipe/expression-exe-pipe/expression-exe-pipe.pipe';
import { BusinessBaseBtnComponent } from '../business-base-btn/business-base-btn.component';

@Component({
  selector: 'app-business-tool-btn',
  templateUrl: './business-tool-btn.component.html',
  styleUrls: ['./business-tool-btn.component.less']
})
export class BusinessToolBtnComponent extends BusinessBaseBtnComponent implements OnInit {

  @Input() btnSize = 'default';

  /**
   * 初始化
   */
  ngOnInit() {
    super.ngOnInit();
  }

}

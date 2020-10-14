import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BusinessBtnModel } from '@platform/common/model/business-btn-model';
import { LAYOUT_MARK } from '@platform/common/constant/business-tool-btn-contant';
import { ExpressionExePipePipe } from '@platform/shared/custom-pipe/expression-exe-pipe/expression-exe-pipe.pipe';
import { BusinessBaseBtnComponent } from '../business-base-btn/business-base-btn.component';


@Component({
  selector: 'app-business-row-dropdown-btn',
  templateUrl: './business-row-dropdown-btn.component.html',
  styleUrls: ['./business-row-dropdown-btn.component.less']
})
export class BusinessRowDropdownBtnComponent extends BusinessBaseBtnComponent implements OnInit {

  /**
   * 布局标识
   */
  @Input() layoutMark: string = LAYOUT_MARK.rowBtn;

  /**
   * 初始化
   */
  ngOnInit() {
    super.ngOnInit();
  }


}

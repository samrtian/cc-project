import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BusinessBtnModel } from '@platform/common/model/business-btn-model';
import { LAYOUT_MARK } from '@platform/common/constant/business-tool-btn-contant';
import { ExpressionExePipePipe } from '@platform/shared/custom-pipe/expression-exe-pipe/expression-exe-pipe.pipe';
import { BusinessBaseBtnComponent } from '../business-base-btn/business-base-btn.component';

@Component({
  selector: 'app-business-row-btn',
  templateUrl: './business-row-btn.component.html',
  styleUrls: ['./business-row-btn.component.less']
})
export class BusinessRowBtnComponent extends BusinessBaseBtnComponent implements OnInit {
  /**
   * 布局标识
   */
  @Input() layoutMark: string = LAYOUT_MARK.rowBtn;

  //按钮列表
  moreBtnList: BusinessBtnModel[] = [];



  constructor(
    public expressionExePipePipe: ExpressionExePipePipe
  ) {
    super(expressionExePipePipe);
  }

  /**
   * 初始化
   */
  ngOnInit() {
    super.ngOnInit();
  }


  initBtn() {
    if (this.buttonList && this.buttonList.length) {
      const list = [];
      for (const btn of this.buttonList) {
        if (btn.layoutMark === this.layoutMark) {
          if (this.data && this.showBtnFunction) {
            if (this.showBtnFunction(btn, this.data)) {
              list.push(btn);
            }
          } else if (this.data && btn.btnExp) {
            if (this.expressionExePipePipe.transform(btn.btnExp, this.data)) {
              list.push(btn);
            }
          } else {
            list.push(btn);
          }
        }
      }
      if ((list.length - 2) >= 2) {
        this.btnList = list.slice(0, 2);
        this.moreBtnList = list.slice(2, list.length);
      } else {
        this.btnList = list;
      }
    }

  }



}

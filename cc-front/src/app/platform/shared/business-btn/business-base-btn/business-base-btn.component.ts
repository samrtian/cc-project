import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { BusinessBtnModel } from '@platform/common/model/business-btn-model';
import { LAYOUT_MARK } from '@platform/common/constant/business-tool-btn-contant';
import { ExpressionExePipePipe } from '@platform/shared/custom-pipe/expression-exe-pipe/expression-exe-pipe.pipe';

@Component({
  selector: 'app-business-base-btn',
  template: ''
})
export class BusinessBaseBtnComponent implements OnInit, OnChanges {

  /**
   * 布局标识
   */
  @Input() layoutMark: string = LAYOUT_MARK.toolBtn;

  //按钮
  @Input() buttonList: BusinessBtnModel[];

  /**
   * 数据
   */
  @Input() data = undefined;

  /**
   * 显示按钮函数
   */
  @Input() showBtnFunction: Function = undefined;

  //事件
  @Output() btnClick = new EventEmitter();

  btnList: Array<BusinessBtnModel> = [];

  constructor(public expressionExePipePipe: ExpressionExePipePipe) { }

  ngOnInit(): void {
    this.initBtn();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((!!changes.layoutMark && changes.layoutMark.currentValue !== changes.layoutMark.previousValue && !changes.layoutMark.firstChange) ||
      (!!changes.buttonList && changes.buttonList.currentValue !== changes.buttonList.previousValue && !changes.buttonList.firstChange) ||
      (!!changes.data && changes.data.currentValue !== changes.data.previousValue && !changes.data.firstChange)
    ) {
      this.initBtn();
    }

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

      this.btnList = list;
    }

  }


  /**
   * 按钮处理
   * @param functionName 
   */
  btnHandler(functionName: string) {
    this.btnClick.emit(functionName);
  }


}

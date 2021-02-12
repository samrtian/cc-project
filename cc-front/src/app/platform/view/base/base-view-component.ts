import { BaseComponent } from './base-component';
import { BUSINESS_TOOL_VIEW_PAGE_BTN } from '@platform/common/constant/business-tool-btn-contant';

export abstract class BaseViewComponent extends BaseComponent {
    buttonList = BUSINESS_TOOL_VIEW_PAGE_BTN;
    resultData: any = {};
    id: string = undefined;
    
    onBtnClick(funcName: string, item: any = '') {
        this[funcName](item);
    }
}

import { LAYOUT_MARK, BUSINESS_TOOL_ADD_PAGE_BTN } from '@platform/common/constant/business-tool-btn-contant';
import { BaseComponent } from './base-component';
import { FormGroup } from '@angular/forms';

export abstract class BaseSaveComponent extends BaseComponent {
    layoutMark = LAYOUT_MARK;
    id: string = undefined;
    saveForm: FormGroup;
    buttonList = BUSINESS_TOOL_ADD_PAGE_BTN;

    initFormGroup() {
    }

    onBtnClick(funcName: string, item: any = '') {
        this[funcName](item);
    }

    save() {
        this.saveFormHandle();
    }

    saveAndBack() {
        this.saveFormHandle(true);
    }

    saveFormHandle(isBack = false) {
    }
}

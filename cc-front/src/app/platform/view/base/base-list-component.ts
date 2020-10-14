import { LAYOUT_MARK } from '@platform/common/constant/business-tool-btn-contant';
import { BaseComponent } from './base-component';

export abstract class BaseListComponent extends BaseComponent {
    layoutMark = LAYOUT_MARK;
    queryParams: any;

    onBtnClick(funcName: string, item: any = '') {
        this[funcName](item);
    }
}

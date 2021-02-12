import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';
/**
 * 非中文
 * @param ctrl 
 */
export const nonCh: ValidatorFn = function (ctrl: AbstractControl): { [key: string]: boolean } {
    if (Validators.required(ctrl) && null != Validators.required(ctrl)) {
        return null;
    } else {
        return !(/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(ctrl.value)) ? null : { 'nonCh': true };
    }
};

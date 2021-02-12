import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

/**
 * 手机
 * @param ctrl 
 */
export const mobile: ValidatorFn = function (ctrl: AbstractControl): { [key: string]: boolean } {
    if (Validators.required(ctrl) && null != Validators.required(ctrl)) {
        return null;
    } else {
        const MOBILE = new RegExp('^[1][3|4|5|8|7][0-9]{9}$');
        if (!MOBILE.test(ctrl.value)) {
            return { 'telMobile': true };
        } else {
            return null;
        }
    }
};

import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

/**
 * 电话格式或手机
 * @param ctrl 
 */
export const telMobile: ValidatorFn = function (ctrl: AbstractControl): { [key: string]: boolean } {
    if (Validators.required(ctrl) && null != Validators.required(ctrl)) {
        return null;
    } else {
        const TEL = new RegExp('^[0-9]{3,4}-[0-9]{7,8}$');
        const MOBILE = new RegExp('^[1][3|4|5|8|7][0-9]{9}$');
        if (!TEL.test(ctrl.value) && !MOBILE.test(ctrl.value)) {
            return { 'telMobile': true };
        } else {
            return null;
        }
    }
};

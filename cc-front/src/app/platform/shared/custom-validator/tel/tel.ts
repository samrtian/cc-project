import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

/**
 * 电话
 * @param ctrl 
 */
export const tel: ValidatorFn = function (ctrl: AbstractControl): { [key: string]: boolean } {
    if (Validators.required(ctrl) && null != Validators.required(ctrl)) {
        return null;
    } else {
        const TEL = new RegExp('^[0-9]{3,4}-[0-9]{7,8}$');
        if (!TEL.test(ctrl.value)) {
            return { 'telMobile': true };
        } else {
            return null;
        }
    }
};

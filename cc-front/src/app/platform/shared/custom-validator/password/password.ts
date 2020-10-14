import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

/**
 * 密码格式
 * @param ctrl 
 */
export const password: ValidatorFn = function (ctrl: AbstractControl): { [key: string]: boolean } {
    if (Validators.required(ctrl) && null != Validators.required(ctrl)) {
        return null;
    } else {
        const PASSWORD = new RegExp('^([a-zA-Z0-9]|[_.*$#]){6,15}$');
        if (!PASSWORD.test(ctrl.value)) {
            return { 'password': true };
        } else {
            return null;
        }
    }
};

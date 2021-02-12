import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';
/**
 * 身份证
 * @param ctrl 
 */
export const idCard: ValidatorFn = function (ctrl: AbstractControl): { [key: string]: boolean } {
    if (Validators.required(ctrl) && null != Validators.required(ctrl)) {
        return null;
    } else {
        return /^([0-9]{15}|[0-9]{18}|[0-9]{17}(X|x))$/.test(ctrl.value) ? null : { 'idCard': true };
    }
};

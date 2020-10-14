import { Pipe, PipeTransform } from '@angular/core';
import { CommonUtil } from '@platform/common/util/common-util';

@Pipe({
  name: 'expressionExePipe'
})
export class ExpressionExePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!!value && !!args) {
      return CommonUtil.expressionExe(value, args);
    } else {
      return true;
    }
  }

}

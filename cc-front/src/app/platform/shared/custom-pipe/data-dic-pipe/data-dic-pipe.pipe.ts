import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataDicPipe'
})
export class DataDicPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const list = args[0] || [];
    const key = args[1];
    for (const item of list) {
      if (item[key] === value) {
        return item;
      }
    }
    return null;
  }

}

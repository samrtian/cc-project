import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'treeMenuPipe'
})
export class TreeMenuPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value === undefined ? false : value;
  }

}

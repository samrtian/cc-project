import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PlatformRootService {
  //标题
  public toolBtnEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }
}

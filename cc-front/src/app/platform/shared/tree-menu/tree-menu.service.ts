import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class TreeMenuService {

  private subject = new Subject<boolean>();

  constructor() { }

  getSubject(): Observable<boolean> {
    this.subject.observers = [];
    return this.subject;
  }


  nodeClick(node: any) {
    this.subject.next(node);
  }


}

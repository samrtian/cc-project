import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class SpinningService {

  private spinSubject = new Subject<boolean>();

  constructor() { }

  getSpinning(): Observable<boolean> {
    this.spinSubject.observers = [];
    return this.spinSubject;
  }


  showSpinning(showSpin: boolean) {
    this.spinSubject.next(showSpin);
  }
}

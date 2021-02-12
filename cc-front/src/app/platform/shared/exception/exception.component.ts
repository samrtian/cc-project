import { Component, OnInit, Input } from '@angular/core';
import { exceptionTypes } from '@platform/common/constant/exception-contant';

@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.less']
})
export class ExceptionComponent implements OnInit {

  @Input()
  type: string;


  config = exceptionTypes;

  constructor() { }

  ngOnInit() {

  }

}

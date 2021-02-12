import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from '@platform/common/model/user-model';


@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.less']
})
export class SiderComponent implements OnInit {


  @Input()
  menuData: Array<any>;

  @Input()
  userData: UserModel;

  @Input()
  userInfoRouter: string = '';

  @Input()
  showSider = true;

  @Output()
  switchSiderChange = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  switchSider() {
    this.showSider = !this.showSider;
    this.switchSiderChange.emit(this.showSider);
  }
}

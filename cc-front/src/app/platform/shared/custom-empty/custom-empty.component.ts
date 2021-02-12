import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-empty',
  templateUrl: './custom-empty.component.html',
  styleUrls: ['./custom-empty.component.less']
})
export class CustomEmptyComponent implements OnInit {

  @Input() content: string = '暂无数据！';
  
  constructor() { }

  ngOnInit() {
  }

}

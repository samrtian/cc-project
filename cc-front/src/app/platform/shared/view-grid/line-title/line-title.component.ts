import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-title',
  templateUrl: './line-title.component.html',
  styleUrls: ['./line-title.component.less']
})
export class LineTitleComponent implements OnInit {

  @Input()
  title: string = '';

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { NoticeModel } from '@platform/common/model/notice-model';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.less']
})
export class NoticeComponent implements OnInit, OnChanges {

  //公告
  @Input()
  noticeList: Array<NoticeModel> = [];

  @Output() moreClick = new EventEmitter();

  @Output() itemClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.noticeList && !changes.noticeList.firstChange) {
      this.noticeList = changes.noticeList.currentValue;
    }

  }

  toNoticeList() {
    this.moreClick.emit();
  }

  toNoticeInfo(item: any) {
    this.itemClick.emit({ queryParams: { id: item.noticeId } });
  }

}

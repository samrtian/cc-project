import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { TaskObjModel } from '@platform/common/model/task-model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit, OnChanges {

  //待办
  @Input()
  taskObj: TaskObjModel = {
    count: 0,
    tasks: []
  };

  @Output() moreClick = new EventEmitter();

  @Output() itemClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.taskObj && !changes.taskObj.firstChange) {
      this.taskObj = changes.taskObj.currentValue;
    }

  }

  toTaskList() {
    this.moreClick.emit();
  }

  toTaskInfo(item: any) {
    this.itemClick.emit({
      url: item.taskUrl,
      queryParams: { queryParams: JSON.parse(item.taskParameter) }
    });
  }

}

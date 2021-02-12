import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { WEEK_MAP, DEFAULT_ASTERISK } from '../cron-const';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-cron-week',
  templateUrl: './cron-week.component.html',
  styleUrls: ['./cron-week.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CronWeekComponent),
      multi: true
    }
  ]
})
export class CronWeekComponent extends CronBaseComponent implements OnInit, ControlValueAccessor {
  @Input()
  day: string = DEFAULT_ASTERISK;
  
  weekMapList = [];

  constructor() {
    super();
  }

  ngOnInit() {
    this.init();
  }

  init() {
    const list = [];
    Object.keys(WEEK_MAP).forEach((key: string) => {
      list.push({
        label: key,
        value: WEEK_MAP[key]
      });
    });
    this.weekMapList = list;

    this.defaultValue = DEFAULT_ASTERISK;
    this.minValue = 1;
    this.maxValue = 7;
    this.valueRange.start = 1;
    this.valueRange.end = 7;
    this.valueLoop.start = 2;
    this.valueLoop.interval = 1;
    this.valueList = list;
  }

  change(val: any) {
    this.defaultValue = this.valueComputed();
    this.onChangeCallback(this.defaultValue);
  }


  writeValue(obj: any): void {
    if (obj && obj !== this.valueComputed()) {
      this.parseValue(obj);
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  private onTouchedCallback = (v: any) => {
  }
  private onChangeCallback = (v: any) => {
  }

}

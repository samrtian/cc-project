import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { DEFAULT_VALUE, DEFAULT_ASTERISK } from '../cron-const';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-cron-day',
  templateUrl: './cron-day.component.html',
  styleUrls: ['./cron-day.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CronDayComponent),
      multi: true
    }
  ]
})
export class CronDayComponent extends CronBaseComponent implements OnInit, ControlValueAccessor {

  @Input()
  week = DEFAULT_VALUE;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  init() {
    this.defaultValue = DEFAULT_ASTERISK;
    this.minValue = 1;
    this.maxValue = 31;
    this.valueRange.start = 1;
    this.valueRange.end = 31;
    this.valueLoop.start = 1;
    this.valueLoop.interval = 1;
    for (let i = this.minValue; i <= this.maxValue; i++) {
      this.valueList.push({
        label: i < 10 ? '0' + i : i,
        value: i
      });
    }
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

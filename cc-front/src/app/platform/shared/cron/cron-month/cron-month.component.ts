import { Component, OnInit, forwardRef } from '@angular/core';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DEFAULT_ASTERISK } from '../cron-const';

@Component({
  selector: 'app-cron-month',
  templateUrl: './cron-month.component.html',
  styleUrls: ['./cron-month.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CronMonthComponent),
      multi: true
    }
  ]
})
export class CronMonthComponent extends CronBaseComponent implements OnInit, ControlValueAccessor {

  constructor() {
    super();
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.defaultValue = DEFAULT_ASTERISK;
    this.minValue = 1;
    this.maxValue = 12;
    this.valueRange.start = 1;
    this.valueRange.end = 12;
    this.valueLoop.start = 1;
    this.valueLoop.interval = 1;
    const values = [];
    for (let i = this.minValue; i <= this.maxValue; i++) {
      values.push({
        label: i,
        value: i
      });
    }
    this.valueList = values;
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

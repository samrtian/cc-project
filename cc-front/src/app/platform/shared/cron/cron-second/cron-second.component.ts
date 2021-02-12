import { Component, OnInit, forwardRef } from '@angular/core';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DEFAULT_ASTERISK } from '../cron-const';

/**
 * 秒
 */
@Component({
  selector: 'app-cron-second',
  templateUrl: './cron-second.component.html',
  styleUrls: ['./cron-second.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CronSecondComponent),
      multi: true
    }
  ]
})
export class CronSecondComponent extends CronBaseComponent implements OnInit, ControlValueAccessor {

  constructor() {
    super();
  }


  ngOnInit() {
    this.init();
  }

  init() {
    this.defaultValue = DEFAULT_ASTERISK;
    this.minValue = 0;
    this.maxValue = 59;
    this.valueRange.start = 0;
    this.valueRange.end = 59;
    this.valueLoop.start = 0;
    this.valueLoop.interval = 1;
    const values = [];
    for (let i = this.minValue; i <= this.maxValue; i++) {
      values.push({
        label: i < 10 ? '0' + i : i,
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

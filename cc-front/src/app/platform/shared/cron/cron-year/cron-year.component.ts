import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { CronBaseComponent } from '../cron-base/cron-base.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DEFAULT_ASTERISK } from '../cron-const';

@Component({
  selector: 'app-cron-year',
  templateUrl: './cron-year.component.html',
  styleUrls: ['./cron-year.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CronYearComponent),
      multi: true
    }
  ]
})
export class CronYearComponent extends CronBaseComponent implements OnInit, ControlValueAccessor {

  @Input()
  minYear = 1975;
  @Input()
  maxYear = 9999;

  constructor() {
    super();
  }

  ngOnInit() {
    this.init();
  }

  init() {
    const nowYear = (new Date()).getFullYear();
    this.defaultValue = DEFAULT_ASTERISK;
    this.minValue = this.minYear;
    this.maxValue = this.maxYear;
    this.valueRange.start = nowYear;
    this.valueRange.end = nowYear + 100;
    this.valueLoop.start = nowYear;
    this.valueLoop.interval = 1;
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

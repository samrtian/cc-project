import { Component, OnInit, Input, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { INPUT_SIZE, DEFAULT_ASTERISK, DEFAULT_VALUE } from '../cron-const';

@Component({
  selector: 'app-cron',
  templateUrl: './cron.component.html',
  styleUrls: ['./cron.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CronComponent),
      multi: true
    }
  ]
})
export class CronComponent implements OnInit, OnChanges, ControlValueAccessor {
  /**
   * 是否可用
   */
  @Input()
  disabled: boolean = false;

  /**
   * 输入框大小
   */
  @Input()
  inputSize = INPUT_SIZE.DEFAULT;

  /**
   * 最小年
   */
  @Input()
  minYear = 1975;

  /**
   * 最大年
   */
  @Input()
  maxYear = 9999;

  /**
   * 使用年
   */
  @Input()
  useYear: boolean = true;

  /**
   * 显示年
   */
  @Input()
  showYear: boolean = true;

  /**
   * 显示周
   */
  @Input()
  showWeek: boolean = true;

  /**
   * 显示月
   */
  @Input()
  showMonth: boolean = true;

  /**
   * 显示日
   */
  @Input()
  showDay: boolean = true;

  /**
   * 显示时
   */
  @Input()
  showHour: boolean = true;

  /**
   * 显示分
   */
  @Input()
  showMinute: boolean = true;

  /**
   * 显示秒
   */
  @Input()
  showSecond: boolean = true;

  /**
   * 默认值
   */
  @Input()
  second = DEFAULT_ASTERISK;

  /**
   * 默认值
   */
  @Input()
  minute = DEFAULT_ASTERISK;

  /**
   * 默认值
   */
  @Input()
  hour = DEFAULT_ASTERISK;

  /**
   * 默认值
   */
  @Input()
  day = DEFAULT_ASTERISK;

  /**
   * 默认值
   */
  @Input()
  month = DEFAULT_ASTERISK;

  /**
   * 默认值
   */
  @Input()
  week = DEFAULT_VALUE;

  /**
   * 默认值
   */
  @Input()
  year = DEFAULT_ASTERISK;

  @Input()
  style = {};

  cronValue: string = '';



  constructor() { }


  ngOnInit() {

  }



  ngOnChanges(changes: SimpleChanges): void {

  }

  initValue() {
    if (!this.cronValue) {
      return;
    }
    const values = this.cronValue.split(' ').filter((item: string) => {
      return !!item;
    });

    if (!values || values.length <= 0) {
      return;
    }

    let i = 0;
    if (values.length > i) {
      this.second = values[i++];
    }
    if (values.length > i) {
      this.minute = values[i++];
    }
    if (values.length > i) {
      this.hour = values[i++];
    }
    if (values.length > i) {
      this.day = values[i++];
    }
    if (values.length > i) {
      this.month = values[i++];
    }
    if (values.length > i) {
      this.week = values[i++];
    }
    if (values.length > i) {
      this.year = values[i];
    }
  }



  writeValue(obj: any): void {
    if (obj) {
      this.cronValue = obj;
      this.initValue();
    }
  }

  change(val: any) {
    const result = [];
    result.push(this.second ? this.second : DEFAULT_ASTERISK);
    result.push(this.minute ? this.minute : DEFAULT_ASTERISK);
    result.push(this.hour ? this.hour : DEFAULT_ASTERISK);
    result.push(this.day ? this.day : DEFAULT_ASTERISK);
    result.push(this.month ? this.month : DEFAULT_ASTERISK);
    result.push(this.week ? this.week : DEFAULT_VALUE);
    if (this.useYear) {
      result.push(this.year ? this.year : DEFAULT_ASTERISK);
    }

    this.cronValue = result.join(' ');
    this.onChangeCallback(this.cronValue);
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

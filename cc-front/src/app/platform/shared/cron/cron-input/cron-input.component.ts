import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { INPUT_SIZE, DEFAULT_ASTERISK, DEFAULT_VALUE, CRON_INPUT_TRIGGER } from '../cron-const';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-cron-input',
  templateUrl: './cron-input.component.html',
  styleUrls: ['./cron-input.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CronInputComponent),
      multi: true
    }
  ]
})
export class CronInputComponent implements OnInit, ControlValueAccessor {

  /**
   * placeholder
   */
  @Input()
  placeholder = '请选择...';

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
  cronInputTrigger = CRON_INPUT_TRIGGER.CLICK;


  @Output()
  visibleChange = new EventEmitter<boolean>();


  @Input()
  style = {
    width: '650px'
  };

  @Input()
  popoverPlacement = 'topLeft';

  @Input()
  popoverTitle = '';


  value = '';
  visible = false;


  constructor() { }

  ngOnInit() {
  }


  visibleChanged(val: boolean) {
    this.visibleChange.emit(val);
  }

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }

  cronChange(value: any) {
    this.value = value;
    this.onChangeCallback(this.value);
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

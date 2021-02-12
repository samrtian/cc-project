import { Component, OnInit, Input } from '@angular/core';
import { DEFAULT_VALUE, TYPE_EVERY, TYPE_NOT_SET, TYPE_RANGE, TYPE_LOOP, TYPE_WORK, TYPE_LAST, TYPE_SPECIFY, INPUT_SIZE } from '../cron-const';


@Component({
  selector: 'app-cron-base',
  template: '',
  styleUrls: ['./cron-base.component.less']
})
export class CronBaseComponent implements OnInit {

  @Input()
  disabled: boolean = false;

  @Input()
  inputSize = INPUT_SIZE.DEFAULT;

  type = TYPE_EVERY;
  defaultValue = DEFAULT_VALUE;
  typeNotSet = TYPE_NOT_SET;
  typeEvery = TYPE_EVERY;
  typeRange = TYPE_RANGE;
  typeLoop = TYPE_LOOP;
  typeWork = TYPE_WORK;
  typeLast = TYPE_LAST;
  typeSecify = TYPE_SPECIFY;
  valueRange = {
    start: 0,
    end: 0
  };

  valueLoop = {
    start: 0,
    interval: 1
  };

  valueWeek = {
    start: 0,
    end: 0
  };
  valueList = [];
  valueWork = 1;
  maxValue = 0;
  minValue = 0;
  valueLast = 0;

  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {

  }

  /**
   * 值计算
   */
  valueComputed() {
    const result = [];
    switch (this.type) {
      case TYPE_NOT_SET:
        result.push('?');
        break;
      case TYPE_EVERY:
        result.push('*');
        break;
      case TYPE_RANGE:
        result.push(`${this.valueRange.start}-${this.valueRange.end}`);
        break;
      case TYPE_LOOP:
        result.push(`${this.valueLoop.start}/${this.valueLoop.interval}`);
        break;
      case TYPE_WORK:
        result.push(`${this.valueWork}W`);
        break;
      case TYPE_LAST:
        result.push('L');
        break;
      case TYPE_SPECIFY:
        const list = [];
        this.valueList.forEach((item: any) => {
          if (item.checked) {
            list.push(item.value);
          }
        });
        result.push(list.join(','));
        break;
      default:
        result.push(this.defaultValue);
        break;
    }
    return result.length > 0 ? result.join('') : this.defaultValue;
  }

  /**
   * 解析值
   */
  parseValue(value: any) {
    try {
      if (!value || value === this.defaultValue) {
        this.type = this.typeEvery;
      } else if (value.indexOf('?') >= 0) {
        this.type = this.typeNotSet;
      } else if (value.indexOf('-') >= 0) {
        this.type = this.typeRange;
        const values = value.split('-');
        if (values.length >= 2) {
          this.valueRange.start = parseInt(values[0], 0);
          this.valueRange.end = parseInt(values[1], 0);
        }
      } else if (value.indexOf('/') >= 0) {
        this.type = this.typeLoop;
        const values = value.split('/');
        if (values.length >= 2) {
          this.valueLoop.start = value[0] === '*' ? 0 : parseInt(values[0], 0);
          this.valueLoop.interval = parseInt(values[1], 0);
        }
      } else if (value.indexOf('W') >= 0) {
        this.type = this.typeWork;
        const values = value.split('W');
        if (!values[0] && !isNaN(values[0])) {
          this.valueWork = parseInt(values[0], 0);
        }
      } else if (value.indexOf('L') >= 0) {
        this.type = this.typeLast;
        const values = value.split('L');
        this.valueLast = parseInt(values[0], 0);
      } else if (value.indexOf(',') >= 0 || !isNaN(value)) {
        this.type = this.typeSecify;
        const vals = value.split(',');
        this.valueList.forEach((item: any) => {
          vals.forEach((val: any) => {
            if (parseInt(val, 0) === item.value) {
              item.checked = true;
              return;
            }
          });
          return item;
        });
      } else {
        this.type = this.typeEvery;
      }
    } catch (e) {
      this.type = this.typeEvery;
    }

    this.defaultValue = this.valueComputed();
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronComponent } from './cron/cron.component';
import { CronYearComponent } from './cron-year/cron-year.component';
import { CronDayComponent } from './cron-day/cron-day.component';
import { CronHourComponent } from './cron-hour/cron-hour.component';
import { CronMinuteComponent } from './cron-minute/cron-minute.component';
import { CronMonthComponent } from './cron-month/cron-month.component';
import { CronSecondComponent } from './cron-second/cron-second.component';
import { CronWeekComponent } from './cron-week/cron-week.component';
import { CronBaseComponent } from './cron-base/cron-base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTabsModule, NzInputModule, NzSelectModule, NzRadioModule, NzCheckboxModule, NzInputNumberModule, NzPopoverModule } from 'ng-zorro-antd';
import { CronInputComponent } from './cron-input/cron-input.component';



@NgModule({
  declarations: [CronComponent, CronYearComponent, CronDayComponent, CronHourComponent, CronMinuteComponent, CronMonthComponent, CronSecondComponent, CronWeekComponent, CronBaseComponent, CronInputComponent],
  imports: [
    CommonModule,
    NzTabsModule,
    NzInputModule,
    NzSelectModule,
    NzRadioModule,
    NzCheckboxModule,
    NzInputNumberModule,
    NzPopoverModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CronComponent, CronInputComponent, CronYearComponent, CronDayComponent, CronHourComponent, CronMinuteComponent, CronMonthComponent, CronSecondComponent, CronWeekComponent, CronBaseComponent]
})
export class CronModule { }

import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';


import { SysApiService } from '@platform/api/sys/sys-api.service';
import { CommonUtil } from '@platform/common/util/common-util';
import { TaskObjModel } from '@platform/common/model/task-model';
import { NoticeModel } from '@platform/common/model/notice-model';
import { environment } from '@environments/environment';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [SysApiService]
})
export class HomeComponent implements OnInit {

  echartOption: any;
  //公告
  noticeList: Array<NoticeModel> = [];

  //待办
  taskObj: TaskObjModel = {
    count: 0,
    tasks: []
  };


  constructor(
    private notificationService: NzNotificationService,
    private sysApiService: SysApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initHomeData();
    this.initEchartData();
  }

  /**
   * 初始化主页
   */
  initHomeData() {
    this.sysApiService.initHomeData().subscribe((result: any) => {
      CommonUtil.resultHandle(result, () => {
        this.noticeList = result.data.resultData.notices;
        this.taskObj = result.data.resultData.task;
      }, this.notificationService);
    });
  }

  /**
  * 初始化echart数据
  */
  initEchartData() {
    const data1 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30];
    const data2 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20];
    const data3 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30];
    const datacity = ['济北市', '青山市', '文博市', '红枣县', '东胜县', '烟花市', '莱平市', '济东市', '山海市', '贵泉市'];

    this.echartOption = {
      color: ['#388BFF', '#05C3FA', '#2eca94', '#18e09b'],
      tooltip: {
        trigger: 'axis',
      },
      legend: {

        top: '8%',
        data: ['存量', '新增', '拆除', '整改'],
      },
      grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      yAxis: [{
        type: 'value',
        axisLabel: {
          show: true,
          interval: 'auto',
          formatter: '{value} '
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        show: true

      }],
      xAxis: [{
        type: 'category',
        axisLabel: {
          interval: 0,
          show: true,
          splitNumber: 15,
          textStyle: {
            fontSize: 10,
            color: '#rgba(0,0,0,0.85)'
          },

        },
        data: datacity,
      }],
      series: [{
        name: '存量',
        type: 'bar',
        stack: 'sum',
        barWidth: '20px',
        data: data1

      },
      {
        name: '新增',
        type: 'bar',
        barWidth: '20px',
        stack: 'sum',
        data: data2,

      },
      {
        name: '拆除',
        type: 'bar',
        color: '#2eca94',
        stack: 'sum1',
        barWidth: '20px',
        data: data3

      },
      {
        name: '整改',
        type: 'bar',
        color: '#18e09b',
        stack: 'sum1',
        barWidth: '20px',
        data: data3

      },
      ]
    };
  }


  toTaskList() {
    this.router.navigate(['/app/workbench/taskList']);
  }

  toTaskInfo(item: any) {
    this.router.navigate([item.url], item.queryParams);
  }

  toNoticeList() {
    this.router.navigate(['app/workbench/noticeList']);
  }

  toNoticeInfo(item: any) {
    this.router.navigate(['app/workbench/noticeView'], item);
  }

}

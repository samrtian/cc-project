import { Component, OnInit } from '@angular/core';
import { NoticeApiService } from '@platform/api/notice/notice-api.service';
import { BaseSaveComponent } from '@platform/view/base/base-save-component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonUtil } from '@platform/common/util/common-util';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sys-notice-add',
  templateUrl: './sys-notice-add.component.html',
  styleUrls: ['./sys-notice-add.component.less'],
  providers: [NoticeApiService]
})
export class SysNoticeAddComponent extends BaseSaveComponent implements OnInit {

  formStatusOptionList: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private noticeApiService: NoticeApiService,
    private notificationService: NzNotificationService,
    private datePipe: DatePipe
  ) {
    super();

    CommonUtil.pageQueryParams(this.activatedRoute, (params: any) => {
      if (!!params.id) {
        this.id = params.id;
      }
    });
  }

  ngOnInit() {
    this.initFormGroup();
    this.initPageData();
  }

  initFormGroup() {
    const noticeTitleFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(100)]));
    const noticeContentFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(1024)]));
    const cutoffDateFc = new FormControl('', Validators.compose([Validators.required]));
    const statusFc = new FormControl(null, Validators.compose([Validators.required]));

    this.saveForm = this.formBuilder.group({
      noticeTitle: noticeTitleFc,
      noticeContent: noticeContentFc,
      cutoffDate: cutoffDateFc,
      status: statusFc
    });
  }


  initPageData(): void {
    this.noticeApiService.initSysNoticeAddData({
      noticeId: this.id
    }).subscribe(
      (result: any) => {
        CommonUtil.resultHandle(result, () => {
          this.formStatusOptionList = result.data.resultData.FORM_STATUS_TYPE;
          CommonUtil.loadFormData(result.data.resultData.noticeData, this.saveForm);
        }, this.notificationService);
      }
    );
  }


  saveFormHandle(isBack = false) {
    if (this.saveForm.valid) {
      const params = this.saveForm.value;
      params.noticeId = this.id;
      params.cutoffDate = this.datePipe.transform(params.cutoffDate, 'yyyy-MM-dd');
      CommonUtil.formSaveHandle(this.noticeApiService.saveSysNotice(params),
        this.saveForm,
        isBack,
        () => {
          this.back();
        },
        this.id,
        this.notificationService
      );
    } else {
      CommonUtil.formUpdateValueAndValidity(this.saveForm);
    }
  }

  back() {
    this.router.navigate(['app/notice/sysNoticeList']);
  }

}

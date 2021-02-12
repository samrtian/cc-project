import { Injectable } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ConfirmType } from 'ng-zorro-antd/modal';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Injectable()
export class SingleModalService {
  modal: NzModalRef = undefined;

  constructor(
    private modalService: NzModalService
  ) { }

  open<T>(options?: any, confirmType?: ConfirmType): NzModalRef<T> {
    if (this.modal === undefined) {
      this.modal = this.modalService.confirm(options, confirmType);
    }
    return this.modal;
  }

  close() {
    if (this.modal !== undefined) {
      this.modal.destroy();
      this.modal = undefined;
    }
  }
}

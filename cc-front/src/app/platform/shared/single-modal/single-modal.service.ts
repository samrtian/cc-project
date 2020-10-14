import { Injectable } from '@angular/core';
import { NzModalService, ConfirmType, NzModalRef } from 'ng-zorro-antd';

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

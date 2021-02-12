import { Injectable } from '@angular/core';
import * as lodash from 'lodash';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PlatformStorageService } from '../platform-storage/platform-storage.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SingleModalService } from '../single-modal/single-modal.service';

@Injectable()
export class PlatformAuth {

    constructor(
        private notificationService: NzNotificationService,
        private router: Router,
        private platformStorageService: PlatformStorageService,
        private singleModalService: SingleModalService
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (lodash.isEmpty(this.platformStorageService.getSessionUser())) {
            const errorMsg = '未登录系统或登录超时，请重新登录！';
            this.singleModalService.open({
                nzTitle: '提示',
                nzContent: errorMsg,
                nzCancelText: null,
                nzOnOk: () => {
                    this.singleModalService.close();
                    this.router.navigate(['/login']);
                }
            }, 'error');
            console.error(errorMsg);
            return false;
        } else {
            return true;
        }
    }
}

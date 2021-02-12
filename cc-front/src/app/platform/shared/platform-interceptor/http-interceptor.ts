import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';

import { NzNotificationService } from 'ng-zorro-antd/notification';

import { SpinningService } from '../spinning/spinning.service';
import { PlatformStorageService } from '../platform-storage/platform-storage.service';
import { SecurityUtil } from '../../common/util/security-util';
import { SingleModalService } from '../single-modal/single-modal.service';
import { SESSION_TIME_OUT, NO_AUTHORITY, UNDISTRIBUTED_ROLE } from '../../common/constant/common-contant';


@Injectable()
export class HttpInterceptor {

    constructor(
        private router: Router,
        private spinningService: SpinningService,
        private notificationService: NzNotificationService,
        private platformStorageService: PlatformStorageService,
        private singleModalService: SingleModalService
    ) {

    }

    /**
     * 拦截器
     * @param req
     * @param next
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {


        const cloneReq = req.clone({
            withCredentials: true
        });

        if ((cloneReq.body && cloneReq.body.convert === undefined) || (cloneReq.body && cloneReq.body.convert)) {
            cloneReq.body.data = SecurityUtil.encrypt(JSON.stringify(cloneReq.body.data), this.platformStorageService.getSecurityKey());
            cloneReq.body.convert = true;
        }

        const useSpinning = cloneReq.body && cloneReq.body.useSpinning !== undefined && cloneReq.body.useSpinning === false ? false : true;


        if (useSpinning) {
            this.spinningService.showSpinning(true);
        }

        return next.handle(cloneReq).pipe(
            catchError((res: HttpResponse<any>) => {
                if (useSpinning) {
                    this.spinningService.showSpinning(false);
                }
                this.notificationService.create(
                    'error',
                    '提示',
                    '其它的未知错误！'
                );
                return throwError(res);
            }),
            mergeMap((event: any) => {
                if (event instanceof HttpResponse) {
                    if (useSpinning) {
                        this.spinningService.showSpinning(false);
                    }
                    let errorMsg = '其它的未知错误！';
                    let isSkin = false;
                    if (event.body.sysErrorResult) {
                        if (event.body.sysErrorResult && event.body.sysErrorResult === SESSION_TIME_OUT) {
                            errorMsg = '未登录系统或登录超时，请重新登录！';
                            isSkin = true;
                            this.singleModalService.open({
                                nzTitle: '提示',
                                nzContent: errorMsg,
                                nzCancelText: null,
                                nzOnOk: () => {
                                    this.singleModalService.close();
                                    this.router.navigate(['/login']);
                                }
                            }, 'error');

                        } else if (event.body.sysErrorResult && event.body.sysErrorResult === NO_AUTHORITY) {
                            errorMsg = '权限不足，无法访问！';
                        } else if (event.body.sysErrorResult && event.body.sysErrorResult === UNDISTRIBUTED_ROLE) {
                            errorMsg = '未分配角色！';
                        }


                        if (!isSkin) {
                            this.notificationService.create(
                                'error',
                                '提示',
                                errorMsg
                            );
                        }

                        return throwError(errorMsg);

                    } else {
                        console.info(event.body);
                        if (event.body && event.body.data && event.body.convert) {
                            event.body.data = JSON.parse(SecurityUtil.decrypt(event.body.data, this.platformStorageService.getSecurityKey()));
                        } else {
                            event.body.data = JSON.parse(SecurityUtil.decrypt(event.body.data, environment.loginAesKey));
                        }

                        // return Observable.create((observer: any) => observer.next(event));
                        return new Observable((observer: any) => {
                            observer.next(event);
                            observer.complete();
                        });
                    }

                } else {
                    return new Observable((observer: any) => {
                        observer.next(event);
                        observer.complete();
                    });

                    // return Observable.create((observer: any) => observer.next(event));
                }
            }));

    }
}

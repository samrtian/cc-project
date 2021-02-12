import { FormGroup } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable } from 'rxjs';
import { PaginationModel } from '../model/pagination-model';
import * as lodash from 'lodash';

export class CommonUtil {
    static activatedRoute: any;

    /**
     * url中如果有双斜杠替换为单斜杠
     * @param url
     * @returns {string}
     */
    static replaceUrl(url: string): string {
        if (-1 !== url.indexOf('http://')) {
            return 'http://' + url.substring(7).replace(/\/\//g, '/');
        } else if (-1 !== url.indexOf('https://')) {
            return 'https://' + url.substring(8).replace(/\/\//g, '/');
        } else {
            return url;
        }
    }


    /**
     *  UUID生成
     *  @returns {string}
     */
    static UUID(): string {
        return 'xxxxxxxx-xxxx-6xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    /**
     *  短UUID生成
     *  @returns {string}
     */
    static shortUUID(): string {
        return 'xx-x-6xy'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(8);
        });
    }

    /**
     * 获得绝对位置
     * @param element
     * @param target
     */
    static absolutePosition(element: any, target: any): void {
        const elementDimensions = element.offsetParent ?
            { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        const elementOuterHeight = elementDimensions.height;
        const elementOuterWidth = elementDimensions.width;
        const targetOuterHeight = target.offsetHeight;
        const targetOuterWidth = target.offsetWidth;
        const targetOffset = target.getBoundingClientRect();
        const windowScrollTop = this.getWindowScrollTop();
        const windowScrollLeft = this.getWindowScrollLeft();
        const viewport = this.getViewport();
        let top, left;

        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
            top = targetOffset.top + windowScrollTop - elementOuterHeight;
            if (top < 0) {
                top = 0 + windowScrollTop;
            }
        } else {
            top = targetOuterHeight + targetOffset.top + windowScrollTop;
        }

        if (targetOffset.left + targetOuterWidth + elementOuterWidth > viewport.width) {
            left = targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth;
        } else {
            left = targetOffset.left + windowScrollLeft;
        }


        element.style.top = top + 'px';
        element.style.left = left + 'px';
    }

    /**
     * 获得尺寸
     * @param element
     */
    static getHiddenElementDimensions(element: any): any {
        const dimensions: any = {};
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';

        return dimensions;
    }

    /**
     * 获得视图大小
     */
    static getViewport(): any {
        const win = window,
            d = document,
            e = d.documentElement,
            g = (d.getElementsByTagName('body')[0]) as Element,
            w = win.innerWidth || e.clientWidth || g.clientWidth,
            h = win.innerHeight || e.clientHeight || g.clientHeight;

        return { width: w, height: h };
    }

    /**
     * 获得窗口滚动高度
     */
    static getWindowScrollTop(): number {
        const doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    }

    /**
     * 获得窗口滚动宽度
     */
    static getWindowScrollLeft(): number {
        const doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    }

    /**
    * 获得实际位置
    * @param element
    * @param target
    */
    static relativePosition(element: any, target: any): void {
        const elementDimensions = element.offsetParent ?
            { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        const targetHeight = target.offsetHeight;
        const targetWidth = target.offsetWidth;
        const targetOffset = target.getBoundingClientRect();
        const windowScrollTop = this.getWindowScrollTop();
        const viewport = this.getViewport();
        let top, left;

        if ((targetOffset.top + targetHeight + elementDimensions.height) > viewport.height) {
            top = -1 * (elementDimensions.height);
            if (targetOffset.top + top < 0) {
                top = 0;
            }
        } else {
            top = targetHeight;
        }


        if ((targetOffset.left + elementDimensions.width) > viewport.width) {
            left = targetWidth - elementDimensions.width;
        } else {
            left = 0;
        }


        element.style.top = top + 'px';
        element.style.left = left + 'px';
    }



    /**
     * 将list转换成tree
     * @param data
     * @param prop
     */
    static transformToTreeFormat(data: Array<any>, prop: any) {
        let i, l;
        const key = prop.key,
            parentKey = prop.parentKey,
            childKey = prop.childKey;
        if (!key || key === '' || !data) {
            return [];
        }


        const r = [];
        const tmpMap = [];
        for (i = 0, l = data.length; i < l; i++) {
            tmpMap[data[i][key]] = data[i];
        }
        for (i = 0, l = data.length; i < l; i++) {
            if (tmpMap[data[i][parentKey]] && data[i][key] !== data[i][parentKey]) {
                if (!tmpMap[data[i][parentKey]][childKey]) {
                    tmpMap[data[i][parentKey]][childKey] = [];
                }
                tmpMap[data[i][parentKey]][childKey].push(data[i]);
            } else {
                r.push(data[i]);
            }
        }
        return r;

    }

    /**
     * 对象转换成key数组
     * @param obj 
     */
    static objToKeyArray(obj: any) {
        const list = new Array<String>();
        Object.keys(obj).forEach((key) => {
            list.push(key);
        });
        return list;
    }

    /**
     * 对象转换成key数组
     * @param obj 
     */
    static objToArray(obj: any) {
        const list = new Array<String>();
        Object.keys(obj).forEach((key) => {
            const object: any = {
                key: obj[key]
            };
            list.push(object);
        });
        return list;
    }

    /**
    * 数组转换成单数组
    * @param list 
    * @param key 
    */
    static ArrayToSimpleArray(list: Array<any>, key: string) {
        const keys = [];
        for (const item of list) {
            keys.push(item[key]);
        }

        return keys;
    }

    /**
    * 表单禁用
    * @param thisForm 表单
    */
    /*static formElementDisable(thisForm: FormGroup): void {
        Object.keys(thisForm.controls).forEach((key) => {
            if (thisForm.controls[key]) {
                thisForm.controls[key].disable();
            }
        });
    }*/



    /**
     * 装载表单数据
     * @param thisForm 表单
     */
    static loadFormData(data: Object, thisForm: FormGroup): void {
        if (data) {
            Object.keys(data).forEach((key) => {
                if (!!thisForm.controls[key]) {
                    thisForm.patchValue({
                        [key]: data[key]
                    });
                }
            });
        }

    }


    /**
     * 装载请求数据
     * @param thisForm 表单
     */
    static loadReqData(data: Object, thisForm: FormGroup): void {
        return lodash.extend(data, thisForm.value);
    }

    /**
     * 表单更新与验证
     * @param thisForm 表单
     */
    static formUpdateValueAndValidity(thisForm: FormGroup): void {
        Object.keys(thisForm.controls).forEach((key) => {
            thisForm.controls[key].markAsDirty();
            thisForm.controls[key].updateValueAndValidity();
        });
    }

    /**
     * 表单保存处理
     * @param observable  观察者
     * @param thisForm   表单
     * @param isBack  是否返回
     * @param back   返回处理
     * @param id    id
     * @param notificationService  通知
     */
    static formSaveHandle(observable: Observable<any>, thisForm: FormGroup,
        isBack: boolean, back: Function, id: string,
        notificationService: NzNotificationService, complete?: Function) {
        observable.subscribe(
            (result: any) => {
                if (complete) {
                    complete(result);
                }

                if (CommonUtil.resultSuccess(result.data.resultType)) {
                    notificationService.success('提示', result.data.resultMsg);
                    if (isBack) {
                        back();
                    } else if (!isBack && !!!id) {
                        thisForm.reset();
                    }
                } else if (CommonUtil.resultFailure(result.data.resultType)) {
                    notificationService.warning('提示', result.data.resultMsg);
                } else {
                    notificationService.error('提示', result.data.resultMsg);
                }
            }
        );
    }

    /**
     * 初始化页面查询参数
     */
    static pageQueryParams(activatedRoute: any, initParams: Function) {
        activatedRoute.queryParams.subscribe((params: any) => initParams(params));
    }

    /**
     * 分页初始化参数
     */
    static paginationInitParams(customParams?: any) {
        const paginationModel: PaginationModel = {
            total: 0,
            page: 1,
            rows: 10,
            pageSizeOptions: [10, 20, 30, 40, 50]
        };
        return lodash.extend(paginationModel, customParams);
    }

    /**
     * 重置分页参数
     */
    static resetPaginationParams(oldPageParams: any, customPageParams?: any) {
        return lodash.merge(oldPageParams, CommonUtil.paginationInitParams(customPageParams));
    }

    /**
     * 查询参数合并分页参数
     */
    static queryParamsMergePageParams(queryParams: any, customPageParams?: any) {
        return lodash.merge(queryParams, CommonUtil.paginationInitParams(customPageParams));
    }

    /**
     * 分页参数合并查询结果
     */
    static paginationParamsMergeResultParams(paginationParams: any, resultParams: any) {
        return lodash.merge(paginationParams, {
            total: resultParams.total
        });
    }

    /**
     * 列表全选
     * @param list 
     * @param mapOfCheckedId 
     * @param value 
     */
    static listCheckAll(list: Array<any>, mapOfCheckedId: { [key: string]: boolean }, key: string, value: any) {
        list.forEach(item => (mapOfCheckedId[item[key]] = value));
    }

    /**
    * 获取列表选中列表ids
    * @param list 
    * @param mapOfCheckedId 
    * @param value 
    */
    static getCheckOrUnCheckListIds(list: Array<any>, mapOfCheckedId: { [key: string]: boolean }, key: string, value: boolean = true) {
        const ids = [];
        list.forEach(item => {
            if (mapOfCheckedId[item[key]] === value) {
                ids.push(item[key]);
            }
        });
        return ids;
    }


    /**
     * 转换json到url参数
     * @param data
     */
    static parseJsonToUrlParams(data: any) {
        try {
            const tempArr = [];
            Object.keys(data).forEach((i) => {
                const key = encodeURIComponent(i);
                const value = encodeURIComponent(data[i]);
                tempArr.push(key + '=' + value);
            });
            const urlParamsStr = '?' + tempArr.join('&');
            return urlParamsStr;
        } catch (err) {
            return '';
        }
    }

    /**
     * 转换url参数到json
     * @param data
     */
    static parseUrlParamsToJson(url: any) {
        const str = url.split('?')[1];
        const iterms = str.split('&');
        let arr = {};
        const json = {};
        for (let i = 0; i < iterms.length; i++) {
            arr = iterms[i].split('=');
            json[arr[0]] = arr[1];
        }
        return json;
    }

    /**
    * 是否成功
    * @param val 
    */
    static resultSuccess(val: string): boolean {
        return val === 'success';
    }

    /**
     * 是否失败
     * @param val 
     */
    static resultFailure(val: string): boolean {
        return val === 'failure';
    }


    /**
    * 是否错误
    * @param val 
    */
    static resultError(val: string): boolean {
        return val === 'error';
    }

    /**
     * 返回数据处理
     * @param result 
     * @param successFn 
     * @param notificationService 
     */
    static resultHandle(result: any, successFn: Function, notificationService: NzNotificationService) {
        if (CommonUtil.resultSuccess(result.data.resultType)) {
            successFn();
        } else if (CommonUtil.resultFailure(result.data.resultType)) {
            notificationService.warning('提示', result.data.resultMsg);
        } else {
            notificationService.error('提示', result.data.resultMsg);
        }
    }

    /**
     * 表达式执行
     * @param exp 
     */
    static expressionExe(exp: any, data: any) {
        return new Function('data', 'return ' + exp)(data);
    }

    /**
     * 替换下划线
     */
    static replaceUnderline(str: string) {
        return str.replace(/\//g, '_');
    }

    /**
     * 获取url串
     */
    static getUrlStr(url: string) {
        return url ? url.split('?')[0] : '';
    }


}

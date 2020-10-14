import { Injectable } from '@angular/core';
import { BaseApiService } from '@platform/api/base-api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class StudentApiService extends BaseApiService {

    queryStudentByConditionPaging(params: any): Observable<any> {
        return this.httpPost('student/queryStudentByConditionPaging', params);
    }

}

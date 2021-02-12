import { PaginationModel } from '../model/pagination-model';

//安全KEY
export const SECURITY_KEY = '_SECURITY_KEY';

//session 
export const SESSION_USER = '_SESSION_USER';

//session  info
export const SESSION_USER_INFO = '_SESSION_USER_INFO';

export const SESSION_TIME_OUT = 'SESSION_TIME_OUT';

export const NO_AUTHORITY = 'NO_AUTHORITY';

export const UNDISTRIBUTED_ROLE = 'UNDISTRIBUTED_ROLE';

// 分页参数
export const modalListPaginationOpt: PaginationModel = {
    total: 0,
    page: 1,
    rows: 5,
    pageSizeOptions: [5]
};


/**
 * 分页模型
 */
export class PaginationModel {
    total: number; //总条数
    page: number; //当前页
    rows: number; //每页行数
    pageSizeOptions?: Array<number>; //每页显示多少条
}

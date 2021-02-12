/**
 * 通知数据 
 */
export class NoticeModel {
    //id
    noticeId?: string;
    //标题
    noticeTitle?: string;
    //公告类型(1 系统公告，2部门公告，3角色公告）
    noticeType?: string;
    //创建时间
    createDate?: string;
    //截止时间
    cutoffDate?: string;
    createUser?: string;
}

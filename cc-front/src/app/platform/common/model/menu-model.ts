/**
 * 菜单数据
 */
export class MenuModel {

    //ID
    id: string;

    //父ID
    parentId?: string;

    //名称
    text: string;

    //图标
    iconCls?: string;

    //是否展开
    state?: string;

    //URL
    attributes?: any;

    //子节点
    children?: Array<MenuModel>;
}



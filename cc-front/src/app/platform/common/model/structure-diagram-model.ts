/**
 * 层次图
 */
export class StructureDiagramModel {
    //ID
    id?: string;

    //父ID
    parentId?: string;

    //名称
    text?: string;

    //图标
    iconCls?: string;

    //是否展开
    state?: string;

    //URL
    attributes?: any;

    //子节点
    children?: StructureDiagramModel[];

    /**
     * 是否选中
     */
    selected?: boolean;

    /**
     * 是否查找
     */
    search?: boolean;
}

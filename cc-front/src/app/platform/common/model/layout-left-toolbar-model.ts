/**
 * 左侧按钮模型
 */
export class LayoutLeftToolbarBtnModel {
    showTooltip: string; //是否显示提示
    title?: string; //提示标题
    placement?: string; //提示位置
    icon: string; //按钮图标
    act: string; //按钮名称，后面的输出会按这个输出，用于区分按钮
}


/**
 * 下拉菜单项模型
 */
export class LayoutLeftToolbarMenuItemModel {
    icon: string; //图标
    label: string; //文本
    act: string; //菜单项目名称，后面的输出会按这个输出，用于区分菜单项
}

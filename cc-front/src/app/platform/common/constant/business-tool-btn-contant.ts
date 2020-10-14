/**
 * 添加页面按钮
 */
export const BUSINESS_TOOL_ADD_PAGE_BTN = [
    {
        buttonId: 'SAVE_BTN',
        buttonName: '保存',
        functionName: 'save',
        layoutMark: 'TOOL_BTN',
        btnCls: 'primary',
        iconCls: 'save'
    },
    {
        buttonId: 'SAVE_AND_BACK_BTN',
        buttonName: '保存并返回',
        functionName: 'saveAndBack',
        layoutMark: 'TOOL_BTN',
        btnCls: 'primary',
        iconCls: 'save'
    },
    {
        buttonId: 'BACK_BTN',
        buttonName: '返回上一页',
        functionName: 'back',
        layoutMark: 'TOOL_BTN',
        btnCls: 'default',
        iconCls: 'rollback'
    }
];

/**
 * 查看页面按钮
 */
export const BUSINESS_TOOL_VIEW_PAGE_BTN = [
    {
        buttonId: 'BACK_BTN',
        buttonName: '返回上一页',
        functionName: 'back',
        layoutMark: 'TOOL_BTN',
        btnCls: 'default',
        iconCls: 'rollback'
    }
];

export const LAYOUT_MARK = {
    toolBtn: 'TOOL_BTN',
    rowBtn: 'ROW_BTN',
    leftRowBtn: 'LEFT_ROW_BTN',
    rightRowBtn: 'RIGHT_ROW_BTN',
    leftToolBtn: 'LEFT_TOOL_BTN',
    rightToolBtn: 'RIGHT_TOOL_BTN'
};


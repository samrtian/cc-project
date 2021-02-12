import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import * as lodash from 'lodash';

import { NodeConfigModel } from '@platform/common/model/node-config-model';

import { TreeMenuService } from './tree-menu.service';


@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.less']
})
export class TreeMenuComponent implements OnInit, OnChanges {

  @Input() data: Array<any>;

  @Input() showSearch: Boolean = true;

  @Input() nodeConfig: any;

  @Input() menuCls: string = 'app-sider-tree-menu';

  defNodeConfig: NodeConfigModel = {
    menuId: 'id',
    menuParentId: 'parentId',
    menuLabel: 'text',
    menuIcon: 'iconCls',
    menuChildren: 'children',
    menuUrl: 'attr1',
    menuAttr: 'attrs',
    menuState: 'open'
  };

  /*scrollbarOptions = {
    autoUpdate: true,
    autoUpdateInterval: 10
  };*/


  //所有数据
  private allData: Array<any>;

  //搜索文本
  searchTxt: string = '';

  //搜索隐藏
  searchMsgHidden: boolean = true;

  /**
   * 构造方法
   */
  constructor(
    private router: Router,
    private treeMenuService: TreeMenuService
  ) { }

  /**
   * 初始化
   */
  ngOnInit() {
    this.nodeConfig = lodash.merge({}, this.defNodeConfig, this.nodeConfig);
    this.initData();
  }

  /**
   * 改变
   * @param changes
   */
  ngOnChanges(changes: any) {
    if (changes.data && !changes.data.firstChange) {
      this.initData();
    }
  }

  initData() {
    this.allData = this.data;
  }

  /**
   * 是否有子节点
   * @param item
   */
  isLeaf(item: any) {
    return !item[this.nodeConfig.menuChildren] || !item[this.nodeConfig.menuChildren].length;
  }

  /**
   * 点击
   * @param item
   */
  itemClicked(item: any) {
    if (!this.isLeaf(item)) {
      if (item[this.nodeConfig.menuState] === undefined) {
        item[this.nodeConfig.menuState] = true;
      } else {
        item[this.nodeConfig.menuState] = !item[this.nodeConfig.menuState];
      }

    } else {
      this.router.navigate([item[this.nodeConfig.menuUrl]]);
      this.treeMenuService.nodeClick(item);
    }
  }

  /**
   * 查询菜单
   */
  searchMenu(event: any, isEnter: boolean) {
    if (isEnter && event.which !== 13) {
      return;
    }
    const tempData = this.allData;
    this.searchTxt = this.searchTxt.trim();
    this.searchMsgHidden = true;

    if ('' !== this.searchTxt) {
      const keyWord = new RegExp(this.searchTxt);
      const menuList = new Array<any>();
      const menuIdList = new Array<string>();

      for (const item of tempData) {
        this.searchItem(item, menuList, menuIdList, keyWord);
      }
      if (menuList.length > 0) {
        this.data = menuList;
      } else {
        this.searchMsgHidden = false;
      }

    } else {
      this.data = this.allData;
    }
  }

  /**
   * 查询子菜单
   * @param item
   * @param menuList
   */
  searchItem(item: any, menuList: Array<any>, menuIdList: Array<string>, keyWord: RegExp) {
    item[this.nodeConfig.menuState] = false;
    //关键字匹配，并且不在列表中的
    if ((item[this.nodeConfig.menuLabel].match(keyWord)) && !this.checkSearchMenuIdExists(item[this.nodeConfig.menuId], menuIdList)) {
      menuList.push(item);
      this.pushSearchMenu(item, menuIdList);
    }

    //存在子菜单的，递归子菜单
    const itemChildren = item[this.nodeConfig.menuChildren];
    if (itemChildren && itemChildren.length > 0) {
      for (const subItem of itemChildren) {
        this.searchItem(subItem, menuList, menuIdList, keyWord);
      }
    }

  }

  /**
   * 添加查询的菜单
   * @param item
   * @param menuIdList
   */
  pushSearchMenu(item: any, menuIdList: Array<string>) {
    menuIdList.push(item[this.nodeConfig.menuId]);
    const itemChildren = item[this.nodeConfig.menuChildren];
    if (itemChildren && itemChildren.length > 0) {
      for (const subItem of itemChildren) {
        this.pushSearchMenu(subItem, menuIdList);
      }
    }
  }

  /**
   *
   * @param id 检查菜单id是否存在
   * @param menuIdList
   */
  checkSearchMenuIdExists(id, menuIdList: Array<string>) {
    for (const menuId of menuIdList) {
      if (menuId === id) {
        return true;
      }
    }

    return false;
  }

  /**
   * 查询输入
   * @param event
   */
  inputSearchTxt(event) {
    this.searchTxt = event.target.value;
  }

  chearMenu(event: any) {
    this.searchTxt = '';
    this.searchMenu(event, false);
  }
}


import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as lodash from 'lodash';

import { NodeConfigModel } from '@platform/common/model/node-config-model';
import { TreeMenuService } from '../tree-menu.service';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.less']
})
export class TreeNodeComponent implements OnInit {

  @Input() data: any;

  @Input() nodeConfig: any;

  @Input() level: number;

  @Input() menuCls: string = 'app-sider-tree-menu';

  defNodeConfig: NodeConfigModel = {
    menuId: 'id',
    menuParentId: 'parentId',
    menuLabel: 'name',
    menuIcon: 'icon',
    menuChildren: 'children',
    menuUrl: 'url',
    menuAttr: 'attrs',
    menuState: 'state'
  };


  constructor(
    private router: Router,
    private treeMenuService: TreeMenuService
  ) { }


  /**
 * 初始化
 */
  ngOnInit() {
    this.nodeConfig = lodash.extend(this.defNodeConfig, this.nodeConfig);
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
}

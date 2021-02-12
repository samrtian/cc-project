import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StructureDiagramModel } from '@platform/common/model/structure-diagram-model';
import { SelectionMode, Mode } from '@platform/common/constant/structure-diagram-contant';

@Component({
  selector: 'app-structure-diagram',
  templateUrl: './structure-diagram.component.html',
  styleUrls: ['./structure-diagram.component.less']
})
export class StructureDiagramComponent implements OnInit {

  //输入数据
  @Input() data: StructureDiagramModel[] = [];


  //动画样式
  @Input() animatedCls: string = 'animated fadeIn';

  //选中样式
  @Input() selectedCls: string = 'app-structure-diagram-node-name-selected';

  //查询样式
  @Input() searchCls: string = 'app-structure-diagram-node-name-search';

  //样式
  @Input() structureDiagramCls: string = '';

  //选择模式
  @Input() selectionMode: string = SelectionMode.DEFAULT;

  @Output()
  nodeClicked: EventEmitter<any> = new EventEmitter();

  @Output()
  nodeSingleSelected: EventEmitter<any> = new EventEmitter();

  @Output()
  nodeMultipleselected: EventEmitter<any> = new EventEmitter();

  //默认选择模式
  mode: string = Mode.SELECTED;


  singleSelectedData: StructureDiagramModel = {};

  constructor() { }

  ngOnInit() {
  }

  /**
   * 节点点击
   * @param event 
   * @param node 
   */
  nodeClick(node: StructureDiagramModel) {
    //修改模式为选择
    this.mode = Mode.SELECTED;
    if (this.selectionMode === SelectionMode.SINGLE) {
      for (const nodeItem of this.data) {
        this.selectedByState(nodeItem, false);
      }

      this.selectNodeByState(node, true);

      //单选数据
      this.singleSelectedData = node;
      //事件
      this.nodeSingleSelected.emit(node);
      //多选
    } else if (this.selectionMode === SelectionMode.MULTIPLE) {
      this.selectNodeByState(node, true);

      //事件
      this.nodeSingleSelected.emit(this.getMultipleSelectedData());
    }

    this.nodeClicked.emit(node);
  }

  /**
   * 根据状态选择
   * @param state 
   */
  private selectedByState(node: StructureDiagramModel, state: boolean) {
    this.selectNodeByState(node, state);
    if (node.children && node.children.length) {
      for (const children of node.children) {
        this.selectedByState(children, state);
      }
    }
  }

  /**
   * 根据状态选择节点
   * @param node 
   * @param state 
   */
  private selectNodeByState(node: StructureDiagramModel, state: boolean) {
    node.selected = state;
  }

  /**
   * 获得多选数据
   */
  getMultipleSelectedData() {
    const multipleSelectedData = new Array<StructureDiagramModel>();
    for (const node of this.data) {
      this.getSelectedNode(node, multipleSelectedData);
    }

    return multipleSelectedData;
  }

  /**
   * 清除选中的值
   */
  clearSelected() {
    this.singleSelectedData = {};
    for (const node of this.data) {
      this.selectedByState(node, false);
    }
  }

  /**
   * 递归获得选择的节点
   * @param node 
   * @param multipleSelectedData 
   */
  private getSelectedNode(node: StructureDiagramModel, multipleSelectedData: Array<StructureDiagramModel>) {
    if (node.selected) {
      multipleSelectedData.push(node);
    }

    if (node.children && node.children.length) {
      for (const children of node.children) {
        this.getSelectedNode(children, multipleSelectedData);
      }
    }
  }

  /**
   * 获得单选数据
   */
  getSingleSelectedData() {
    return this.singleSelectedData;
  }

  /**
   * 获得动画样式
   */
  getAnimatedCls(): string {
    return this.animatedCls;
  }

  /**
   * 获得选中的样式
   */
  getSelectedCls(node: StructureDiagramModel): string {
    return node.selected ? this.selectedCls : '';
  }

  /**
   * 获得选中的样式
   */
  getSearchCls(node: StructureDiagramModel): string {
    return node.search ? this.searchCls : '';
  }

  /**
   * 重绘样式
   * @param node 
   */
  drawCls(node: StructureDiagramModel): string {
    if (this.mode === Mode.SELECTED) {
      return this.getSelectedCls(node);
    } else if (this.mode === Mode.SEARCH) {
      return this.getSearchCls(node);
    }
  }


  /**
   * 查询
   * @param keyWord 
   */
  search(keyWord: string) {
    if (keyWord === '' || keyWord === undefined || keyWord === null) {
      return;
    }
    //修改模式为查询
    this.mode = Mode.SEARCH;
    for (const node of this.data) {
      this.searchNode(node, keyWord);
    }

  }

  /**
   * 查询子节点
   * @param node 
   * @param keyWord 
   */
  searchNode(node: StructureDiagramModel, keyWord: string) {
    if (node.text.match(keyWord)) {
      node.search = true;
    } else {
      node.search = false;
    }

    if (node.children && node.children.length) {
      for (const children of node.children) {
        this.searchNode(children, keyWord);
      }
    }
  }


}

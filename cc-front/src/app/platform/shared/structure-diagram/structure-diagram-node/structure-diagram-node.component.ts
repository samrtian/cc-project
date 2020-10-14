import { Component, OnInit, Input, forwardRef, Inject } from '@angular/core';
import { StructureDiagramComponent } from '../structure-diagram.component';
import { StructureDiagramModel } from '@platform/common/model/structure-diagram-model';

@Component({
  selector: 'app-structure-diagram-node',
  templateUrl: './structure-diagram-node.component.html',
  styleUrls: ['./structure-diagram-node.component.less']
})
export class StructureDiagramNodeComponent implements OnInit {

  @Input() node: StructureDiagramModel;

  constructor(@Inject(forwardRef(() => StructureDiagramComponent)) public sd: StructureDiagramComponent) { }

  ngOnInit() {
  }

  /**
   * 切换
   * @param event 
   * @param node 
   */
  toggle(event: Event, node: StructureDiagramModel) {
    node.state === 'closed' ? node.state = 'open' : node.state = 'closed';
  }
}

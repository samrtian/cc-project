import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDiagramNodeComponent } from './structure-diagram-node.component';

describe('StructureDiagramNodeComponent', () => {
  let component: StructureDiagramNodeComponent;
  let fixture: ComponentFixture<StructureDiagramNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureDiagramNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureDiagramNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptStructureComponent } from './dept-structure.component';

describe('DeptStructureComponent', () => {
  let component: DeptStructureComponent;
  let fixture: ComponentFixture<DeptStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDicItemRoleDistributeComponent } from './data-dic-item-role-distribute.component';

describe('DataDicItemRoleDistributeComponent', () => {
  let component: DataDicItemRoleDistributeComponent;
  let fixture: ComponentFixture<DataDicItemRoleDistributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDicItemRoleDistributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDicItemRoleDistributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

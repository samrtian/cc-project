import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDicTypeViewComponent } from './data-dic-type-view.component';

describe('DataDicTypeViewComponent', () => {
  let component: DataDicTypeViewComponent;
  let fixture: ComponentFixture<DataDicTypeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDicTypeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDicTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

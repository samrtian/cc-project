import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDicListComponent } from './data-dic-list.component';

describe('DataDicListComponent', () => {
  let component: DataDicListComponent;
  let fixture: ComponentFixture<DataDicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

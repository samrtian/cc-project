import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDicItemViewComponent } from './data-dic-item-view.component';

describe('DataDicItemViewComponent', () => {
  let component: DataDicItemViewComponent;
  let fixture: ComponentFixture<DataDicItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDicItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDicItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

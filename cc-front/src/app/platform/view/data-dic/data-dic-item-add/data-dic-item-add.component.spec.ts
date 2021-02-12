import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDicItemAddComponent } from './data-dic-item-add.component';

describe('DataDicItemAddComponent', () => {
  let component: DataDicItemAddComponent;
  let fixture: ComponentFixture<DataDicItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDicItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDicItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

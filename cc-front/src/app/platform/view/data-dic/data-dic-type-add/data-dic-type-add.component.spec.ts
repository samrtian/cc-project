import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDicTypeAddComponent } from './data-dic-type-add.component';

describe('DataDicTypeAddComponent', () => {
  let component: DataDicTypeAddComponent;
  let fixture: ComponentFixture<DataDicTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDicTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDicTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

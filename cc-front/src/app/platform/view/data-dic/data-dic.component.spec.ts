import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDicComponent } from './data-dic.component';

describe('DataDicComponent', () => {
  let component: DataDicComponent;
  let fixture: ComponentFixture<DataDicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

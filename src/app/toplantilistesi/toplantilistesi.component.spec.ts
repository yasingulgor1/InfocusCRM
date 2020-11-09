import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplantilistesiComponent } from './toplantilistesi.component';

describe('ToplantilistesiComponent', () => {
  let component: ToplantilistesiComponent;
  let fixture: ComponentFixture<ToplantilistesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToplantilistesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToplantilistesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

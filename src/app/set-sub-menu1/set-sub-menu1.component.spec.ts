import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSubMenu1Component } from './set-sub-menu1.component';

describe('SetSubMenu1Component', () => {
  let component: SetSubMenu1Component;
  let fixture: ComponentFixture<SetSubMenu1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetSubMenu1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSubMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSubMenu2Component } from './set-sub-menu2.component';

describe('SetSubMenu2Component', () => {
  let component: SetSubMenu2Component;
  let fixture: ComponentFixture<SetSubMenu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetSubMenu2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSubMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

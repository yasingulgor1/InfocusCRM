import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSubMenu3Component } from './set-sub-menu3.component';

describe('SetSubMenu3Component', () => {
  let component: SetSubMenu3Component;
  let fixture: ComponentFixture<SetSubMenu3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetSubMenu3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSubMenu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

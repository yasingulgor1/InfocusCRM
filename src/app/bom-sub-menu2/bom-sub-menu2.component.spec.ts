import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomSubMenu2Component } from './bom-sub-menu2.component';

describe('BomSubMenu2Component', () => {
  let component: BomSubMenu2Component;
  let fixture: ComponentFixture<BomSubMenu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomSubMenu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomSubMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

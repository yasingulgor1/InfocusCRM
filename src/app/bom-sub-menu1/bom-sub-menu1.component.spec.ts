import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomSubMenu1Component } from './bom-sub-menu1.component';

describe('BomSubMenu1Component', () => {
  let component: BomSubMenu1Component;
  let fixture: ComponentFixture<BomSubMenu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomSubMenu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomSubMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

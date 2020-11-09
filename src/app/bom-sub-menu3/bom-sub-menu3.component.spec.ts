import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomSubMenu3Component } from './bom-sub-menu3.component';

describe('BomSubMenu3Component', () => {
  let component: BomSubMenu3Component;
  let fixture: ComponentFixture<BomSubMenu3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomSubMenu3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomSubMenu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

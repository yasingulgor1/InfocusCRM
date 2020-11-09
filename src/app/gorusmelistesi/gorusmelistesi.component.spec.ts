import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GorusmelistesiComponent } from './gorusmelistesi.component';

describe('GorusmelistesiComponent', () => {
  let component: GorusmelistesiComponent;
  let fixture: ComponentFixture<GorusmelistesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GorusmelistesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GorusmelistesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

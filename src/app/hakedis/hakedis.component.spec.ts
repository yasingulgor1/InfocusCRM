import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HakedisComponent } from './hakedis.component';

describe('HakedisComponent', () => {
  let component: HakedisComponent;
  let fixture: ComponentFixture<HakedisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HakedisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HakedisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

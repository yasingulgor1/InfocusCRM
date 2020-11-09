import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmabilgileriComponent } from './firmabilgileri.component';

describe('FirmabilgileriComponent', () => {
  let component: FirmabilgileriComponent;
  let fixture: ComponentFixture<FirmabilgileriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmabilgileriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmabilgileriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

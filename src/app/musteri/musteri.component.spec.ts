import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusteriComponent } from './musteri.component';

describe('MusteriComponent', () => {
  let component: MusteriComponent;
  let fixture: ComponentFixture<MusteriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusteriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusteriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

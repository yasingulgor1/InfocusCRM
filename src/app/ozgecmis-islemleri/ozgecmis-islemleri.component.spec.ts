import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzgecmisIslemleriComponent } from './ozgecmis-islemleri.component';

describe('OzgecmisIslemleriComponent', () => {
  let component: OzgecmisIslemleriComponent;
  let fixture: ComponentFixture<OzgecmisIslemleriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OzgecmisIslemleriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OzgecmisIslemleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

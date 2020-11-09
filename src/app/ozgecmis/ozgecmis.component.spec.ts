import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzgecmisComponent } from './ozgecmis.component';

describe('OzgecmisComponent', () => {
  let component: OzgecmisComponent;
  let fixture: ComponentFixture<OzgecmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OzgecmisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OzgecmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

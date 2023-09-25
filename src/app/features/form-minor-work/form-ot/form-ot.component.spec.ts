import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOtComponent } from './form-ot.component';

describe('FormOtComponent', () => {
  let component: FormOtComponent;
  let fixture: ComponentFixture<FormOtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormOtComponent]
    });
    fixture = TestBed.createComponent(FormOtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

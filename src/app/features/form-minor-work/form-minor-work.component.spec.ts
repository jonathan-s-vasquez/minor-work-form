import { ComponentFixture, TestBed } from '@angular/core/testing';

import { formMinorWorkComponent } from './form-minor-work.component';

describe('formMinorWorkComponent', () => {
  let component: formMinorWorkComponent;
  let fixture: ComponentFixture<formMinorWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [formMinorWorkComponent]
    });
    fixture = TestBed.createComponent(formMinorWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

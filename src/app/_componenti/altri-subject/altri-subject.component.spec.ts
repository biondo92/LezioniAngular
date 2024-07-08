import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltriSubjectComponent } from './altri-subject.component';

describe('AltriSubjectComponent', () => {
  let component: AltriSubjectComponent;
  let fixture: ComponentFixture<AltriSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltriSubjectComponent]
    });
    fixture = TestBed.createComponent(AltriSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

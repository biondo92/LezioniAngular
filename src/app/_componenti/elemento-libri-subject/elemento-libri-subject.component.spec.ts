import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoLibriSubjectComponent } from './elemento-libri-subject.component';

describe('ElementoLibriSubjectComponent', () => {
  let component: ElementoLibriSubjectComponent;
  let fixture: ComponentFixture<ElementoLibriSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementoLibriSubjectComponent]
    });
    fixture = TestBed.createComponent(ElementoLibriSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

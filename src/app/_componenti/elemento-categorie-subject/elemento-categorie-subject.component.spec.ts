import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoCategorieSubjectComponent } from './elemento-categorie-subject.component';

describe('ElementoCategorieSubjectComponent', () => {
  let component: ElementoCategorieSubjectComponent;
  let fixture: ComponentFixture<ElementoCategorieSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementoCategorieSubjectComponent]
    });
    fixture = TestBed.createComponent(ElementoCategorieSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

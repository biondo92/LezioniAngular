import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimoComponenteComponent } from './primo-componente.component';

describe('PrimoComponenteComponent', () => {
  let component: PrimoComponenteComponent;
  let fixture: ComponentFixture<PrimoComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimoComponenteComponent]
    });
    fixture = TestBed.createComponent(PrimoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

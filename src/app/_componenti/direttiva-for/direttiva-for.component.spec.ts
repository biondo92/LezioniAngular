import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirettivaForComponent } from './direttiva-for.component';

describe('DirettivaForComponent', () => {
  let component: DirettivaForComponent;
  let fixture: ComponentFixture<DirettivaForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirettivaForComponent]
    });
    fixture = TestBed.createComponent(DirettivaForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

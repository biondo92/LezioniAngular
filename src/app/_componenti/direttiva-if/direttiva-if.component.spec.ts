import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirettivaIfComponent } from './direttiva-if.component';

describe('DirettivaIfComponent', () => {
  let component: DirettivaIfComponent;
  let fixture: ComponentFixture<DirettivaIfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirettivaIfComponent]
    });
    fixture = TestBed.createComponent(DirettivaIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

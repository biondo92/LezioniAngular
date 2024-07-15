import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoLibriComponent } from './elenco-libri.component';

describe('ElencoLibriComponent', () => {
  let component: ElencoLibriComponent;
  let fixture: ComponentFixture<ElencoLibriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElencoLibriComponent]
    });
    fixture = TestBed.createComponent(ElencoLibriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

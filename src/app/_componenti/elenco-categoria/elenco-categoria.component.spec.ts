import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoCategoriaComponent } from './elenco-categoria.component';

describe('ElencoCategoriaComponent', () => {
  let component: ElencoCategoriaComponent;
  let fixture: ComponentFixture<ElencoCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElencoCategoriaComponent]
    });
    fixture = TestBed.createComponent(ElencoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

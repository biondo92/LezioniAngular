import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Categoria } from '../type/categoria.type';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private cat$: BehaviorSubject<Categoria | null> = new BehaviorSubject<Categoria | null>(null)

  constructor() { }

  getCategoria(): BehaviorSubject<Categoria | null> {
    return this.cat$
  }

  setCategoria(cat: Categoria | null): void {
    if (cat !== null && (this.cat$.value === null || this.cat$.value.id !== cat.id)) {
      console.log("Emetto", cat)
      this.cat$.next(cat)
    }
  }
}

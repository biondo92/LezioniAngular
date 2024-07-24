import { Injectable } from '@angular/core';
import { Categoria } from '../type/categoria.type';
import { Libro } from '../type/libro.type';
import { ChiamataHTTP, ChiamateHTTP } from '../type/chiamateHTTP.type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  /**
   * Funzione che simula chiamata Http e ritorna le categorie
   * 
   * @returns Categoria[]
   */
  fakeHttpCategorie(): Categoria[] {
    const arrCat = [
      { id: 1, nome: "Romantico" },
      { id: 2, nome: "Fantascienza" },
      { id: 3, nome: "Avventura" },
    ]
    return arrCat

  }
  /**
   * La funzione simula chiamata Http e ritorna i libri
   * 
   * @returns Libro[]
   */
  fakeHttpLibri(): Libro[] {
    const arrLibro = [
      { id: 1, idCat: 1, titolo: "il libro romantico", autore: "Mario Rossi" },
      { id: 2, idCat: 3, titolo: "il libro avventura", autore: "Luca Rossi" },
      { id: 3, idCat: 2, titolo: "il libro fantascienza", autore: "Gianni Arancione" },
      { id: 4, idCat: 3, titolo: "l'avventura", autore: "Michele Rossi" },
      { id: 5, idCat: 1, titolo: "il romanticismo", autore: "Paolo Bianchi" },
      { id: 6, idCat: 2, titolo: "la fantascienza", autore: "Filippo Verdi" },
      { id: 7, idCat: 2, titolo: "l'isola misteriosa", autore: "Gino Lalla" }
    ]
    return arrLibro
  }


  //------------------------------------------------------------------------

  protected richiestaGenerica(risorsa: (string | number)[], tipo: ChiamataHTTP)
}

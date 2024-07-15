import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/_servizi/api.service';
import { Categoria } from 'src/app/type/categoria.type';
import { Libro } from 'src/app/type/libro.type';

@Component({
  selector: 'app-elenco-libri',
  templateUrl: './elenco-libri.component.html',
  styleUrls: ['./elenco-libri.component.scss']
})
export class ElencoLibriComponent implements OnInit, OnChanges {
  @Input() categoriaSelezionata: Categoria | null = null

  arrLibri: Libro[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {

  }
  ngOnChanges(cambiamenti: SimpleChanges): void {
    console.log("Cambio dati", cambiamenti)
    if (cambiamenti["categoriaSelezionata"].currentValue) {
      this.categoriaSelezionata = cambiamenti["categoriaSelezionata"].currentValue
      this.caricaLibri(this.categoriaSelezionata)
    }
  }

  caricaLibri(cat: Categoria | null): void {
    console.log("Carico i libri di categoria", cat)
    if (cat != null) {
      const arr = this.api.fakeHttpLibri()
      this.arrLibri = arr.filter((libro) => libro.idCat === cat.id)
    } else {
      this.arrLibri = []
    }
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/_servizi/api.service';
import { Categoria } from 'src/app/type/categoria.type';

@Component({
  selector: 'app-elenco-categoria',
  templateUrl: './elenco-categoria.component.html',
  styleUrls: ['./elenco-categoria.component.scss']
})
export class ElencoCategoriaComponent implements OnInit {

  @Output("selezionaCategoria") selezionaEvent = new EventEmitter()


  arrCat: Categoria[] = []


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.arrCat = this.api.fakeHttpCategorie()
  }

  clickSelezionaCategoria(cat: Categoria): void {
    console.log("Categoria selezionata", cat)
    this.selezionaEvent.emit(cat)
  }
}

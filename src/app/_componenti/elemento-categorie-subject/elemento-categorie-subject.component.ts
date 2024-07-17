import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_servizi/api.service';
import { CategoriaService } from 'src/app/_servizi/categoria.service';
import { Categoria } from 'src/app/type/categoria.type';

@Component({
  selector: 'app-elemento-categorie-subject',
  templateUrl: './elemento-categorie-subject.component.html',
  styleUrls: ['./elemento-categorie-subject.component.scss']
})
export class ElementoCategorieSubjectComponent implements OnInit {

  arrCat: Categoria[] = []

  constructor(private api: ApiService, private catService: CategoriaService) {

  }




  ngOnInit(): void {
    this.arrCat = this.api.fakeHttpCategorie()

  }


  clickSelezionaCategoria(cat: Categoria): void {
    console.log("selezionato", cat)
    this.catService.setCategoria(cat)
  }


}

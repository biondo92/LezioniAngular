import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, from, map, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/_servizi/api.service';
import { CategoriaService } from 'src/app/_servizi/categoria.service';
import { Categoria } from 'src/app/type/categoria.type';
import { Libro } from 'src/app/type/libro.type';

@Component({
  selector: 'app-elemento-libri-subject',
  templateUrl: './elemento-libri-subject.component.html',
  styleUrls: ['./elemento-libri-subject.component.scss']
})
export class ElementoLibriSubjectComponent implements OnInit {

  arrLibri: Libro[] = []
  catSelezionata: Categoria | null = null


  constructor(private api: ApiService, private catService: CategoriaService) {

  }



  ngOnInit(): void {
    this.catService.getCategoria().pipe(
      tap(x => console.log("TAP EMESSO", x))
    ).subscribe(x => this.catSelezionata = x)

    const obs$ = this.catService.getCategoria().asObservable()
    obs$.pipe(
      tap(x => console.log("TAP OBS", x)),
      map(x => {
        this.arrLibri = []
        return x
      }),
      switchMap(
        (x) => {
          const arr = this.api.fakeHttpLibri()
          return from(arr)
        }
      ),
      filter(libro => this.catSelezionata !== null && libro.idCat === this.catSelezionata.id)
    ).subscribe(x => this.arrLibri.push(x))


  }


}

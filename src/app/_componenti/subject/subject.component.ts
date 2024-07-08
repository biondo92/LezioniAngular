import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UtilityService } from 'src/app/_servizi/utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  datiObs1: string | null = null
  datiObs2: string | null = null
  datiSub1: string | null | unknown = null
  datiSub2: string | null | unknown = null

  constructor() { }


  ngOnInit(): void {

  }

  clickObs() {
    console.log("Cliccato observable")
    let mioObs$ = new Observable<any>(observer => {           //observable emette i dati solo se c'è un sottoscritto
      observer.next("val:" + UtilityService.numeroCasuale(1, 99))                      // sono unicast emetto dati per un solo subject 


    })
    mioObs$.subscribe(dati => { this.datiObs1 = dati })
    mioObs$.subscribe(dati => { this.datiObs2 = dati })
  }
  clickSub() {
    console.log("Cliccato subject")                               //il subject emette i dati
    let mioSub$ = new Subject()                                     // i subject sono multicast i dati emessi possono essere ricevuti da più abbonati


    mioSub$.subscribe(dati => { this.datiSub1 = dati })
    mioSub$.subscribe(dati => { this.datiSub2 = dati })
    mioSub$.next("val:" + UtilityService.numeroCasuale(1, 99))

  }

}

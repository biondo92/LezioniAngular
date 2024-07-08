import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { UtilityService } from 'src/app/_servizi/utility.service';

@Component({
  selector: 'app-altri-subject',
  templateUrl: './altri-subject.component.html',
  styleUrls: ['./altri-subject.component.scss']
})
export class AltriSubjectComponent implements OnInit {


  ngOnInit(): void {
    this.mioSub$.subscribe(dati => this.datiSub = dati)
    this.mioBehavior$.subscribe(dati => this.datiBehavior = dati)
  }

  datiSub: string | null | unknown = null
  datiBehavior: string | null | unknown = null
  datiReplay: string[] = []
  datiAsync: string | null | unknown = null


  mioSub$ = new Subject()
  mioBehavior$ = new BehaviorSubject("Valore iniziale")
  mioReplay$ = new ReplaySubject(2);
  mioAsync$ = new AsyncSubject()

  constructor() {

  }


  clickSub() {
    console.log("cliccato Subject")
    this.mioSub$.next("val:" + UtilityService.numeroCasuale(1, 10))
  }

  clickBehavior() {
    console.log("cliccato Behavior")
    this.mioBehavior$.next("val:" + UtilityService.numeroCasuale(1, 10))
  }

  clickReplay() {
    console.log("cliccato Replay")
    this.mioReplay$.next("val:1")
    this.mioReplay$.next("val:2")
    this.mioReplay$.next("val:3")
    this.mioReplay$.next("val:4")
    this.mioReplay$.next("val:5")
    this.mioReplay$.next("val:6")
    this.mioReplay$.subscribe(dati => { if (typeof dati === 'string') this.datiReplay.push(dati) })
  }

  clickAsync() {
    console.log("cliccato Async")
    this.mioAsync$.subscribe(dati => this.datiAsync = dati)
    this.mioAsync$.next("val:1")
    this.mioAsync$.next("val:2")
    this.mioAsync$.next("val:3")
    this.mioAsync$.next("val:4")
    this.mioAsync$.complete()
  }

}

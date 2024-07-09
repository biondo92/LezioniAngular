import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/_servizi/utility.service';

@Component({
  selector: 'app-direttiva-if',
  templateUrl: './direttiva-if.component.html',
  styleUrls: ['./direttiva-if.component.scss']
})
export class DirettivaIfComponent implements OnInit {
  nPar: number = 0
  //visPar: boolean = false


  constructor() { }
  ngOnInit(): void {

    // setInterval(() => this.clickBtn(), 2000)
    setTimeout(() => this.numeroCasuale(), 5000)
  }

  numeroCasuale() {
    this.nPar = UtilityService.numeroCasuale(1, 4)
  }

  clickBtn() {
    //this.visPar = !this.visPar
    this.numeroCasuale()
  }
}

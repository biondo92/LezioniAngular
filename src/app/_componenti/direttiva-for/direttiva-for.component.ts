import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/type/menu.type';

@Component({
  selector: 'app-direttiva-for',
  templateUrl: './direttiva-for.component.html',
  styleUrls: ['./direttiva-for.component.scss']
})
export class DirettivaForComponent implements OnInit {


  arrColori: string[] = ["Bianco", "Giallo", "Rosso", "Verde", "Blue"]



  arrVociMenu: menu[] = [
    {
      nome: "Lezione 1",
      url: "http://mioServer/lezione1.html",
      title: "Vai alla lezione 1"
    },
    {
      nome: "Lezione 2",
      url: "http://mioServer/lezione2.html",
      title: "Vai alla lezione 2"
    },
    {
      nome: "Lezione 3",
      url: "http://mioServer/lezione3.html",
      title: "Vai alla lezione 3"
    },
    {
      nome: "Lezione 4",
      url: "http://mioServer/lezione4.html",
      title: "Vai alla lezione 4"
    },


  ]

  constructor() { }

  ngOnInit(): void {


  }

  clickBtn() {
    this.arrColori.push("Nero")
  }

}
